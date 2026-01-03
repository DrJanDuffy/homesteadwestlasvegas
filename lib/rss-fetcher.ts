import Parser from 'rss-parser';
import type { RSSItem, BlogPost } from './rss-types';

const KCM_RSS_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

// Custom parser with extended fields
const parser = new Parser<{}, RSSItem>({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['dc:creator', 'creator'],
      ['media:content', 'mediaContent', { keepArray: false }],
    ],
  },
});

function generateSlug(title: string, guid: string): string {
  // Create URL-safe slug from title
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
  
  // Add hash from guid for uniqueness
  const hash = guid.split('/').pop()?.slice(-8) || Date.now().toString(36);
  return `${baseSlug}-${hash}`;
}

function extractFeaturedImage(content: string): string | undefined {
  // Extract first image from content
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
  return imgMatch?.[1];
}

function createExcerpt(content: string, maxLength: number = 160): string {
  // Strip HTML and create excerpt
  const text = content
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (text.length <= maxLength) return text;
  
  // Cut at word boundary
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.slice(0, lastSpace) + '...';
}

export async function fetchKCMPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(KCM_RSS_URL);
    
    return feed.items.map((item): BlogPost => ({
      slug: generateSlug(item.title || '', item.guid || item.link || ''),
      title: item.title || 'Untitled Post',
      excerpt: item.contentSnippet || createExcerpt(item.content || item['content:encoded'] || ''),
      content: item.content || item['content:encoded'] || item.contentSnippet || '',
      publishedAt: new Date(item.isoDate || item.pubDate || Date.now()),
      link: item.link || '',
      categories: item.categories || [],
      featuredImage: extractFeaturedImage(item.content || item['content:encoded'] || ''),
    }));
  } catch (error) {
    console.error('Error fetching KCM RSS feed:', error);
    return [];
  }
}

export async function fetchKCMPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchKCMPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Export the RSS URL for reference
export { KCM_RSS_URL };
