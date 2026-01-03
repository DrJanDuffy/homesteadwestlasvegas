import { Feed } from 'feed';
import { fetchKCMPosts } from '@/lib/rss-fetcher';

export const revalidate = 3600; // 1 hour

export async function GET() {
  const posts = await fetchKCMPosts();
  const siteUrl = 'https://www.homesteadwestlasvegas.com';
  
  const feed = new Feed({
    title: 'Homestead West Las Vegas Real Estate Blog',
    description: 'Expert real estate insights, market updates, and home buying tips for Northwest Las Vegas from Dr. Jan Duffy.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Dr. Jan Duffy`,
    author: {
      name: 'Dr. Jan Duffy',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      link: siteUrl,
    },
    feedLinks: {
      rss2: `${siteUrl}/blog/rss.xml`,
    },
  });
  
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [
        {
          name: 'Dr. Jan Duffy (via Keeping Current Matters)',
          link: siteUrl,
        },
      ],
      date: post.publishedAt,
      category: post.categories.map((cat) => ({ name: cat })),
      image: post.featuredImage,
    });
  });
  
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
