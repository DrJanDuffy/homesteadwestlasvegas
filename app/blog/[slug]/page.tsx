import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchKCMPosts, fetchKCMPostBySlug } from '@/lib/rss-fetcher';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import type { Metadata } from 'next';

// ISR: Revalidate every hour
export const revalidate = 3600;

// Generate static params for all known posts
export async function generateStaticParams() {
  const posts = await fetchKCMPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchKCMPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | Homestead West Las Vegas Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    alternates: {
      canonical: post.link, // Canonical to original KCM article
    },
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await fetchKCMPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(post.publishedAt);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Blog', url: 'https://www.homesteadwestlasvegas.com/blog' },
    { name: post.title, url: `https://www.homesteadwestlasvegas.com/blog/${slug}` }
  ]);

  // Schema.org BlogPosting structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Keeping Current Matters',
    },
    publisher: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      url: 'https://www.homesteadwestlasvegas.com',
      jobTitle: 'REALTOR®',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.link,
    },
    image: post.featuredImage,
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
          </nav>
          
          <article>
            {/* Header */}
            <header className="mb-8">
              {/* Categories */}
              {post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <span 
                      key={category}
                      className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600">
                <time dateTime={post.publishedAt.toISOString()}>
                  {formattedDate}
                </time>
                <span>•</span>
                <span>Powered by Keeping Current Matters</span>
              </div>
            </header>
            
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
                onError={(e) => {
                  // Hide image if it fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-img:rounded-lg prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Buy or Sell in Northwest Las Vegas?
              </h2>
              <p className="mb-6 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance on Homestead West and Northwest Las Vegas real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:7022996607" 
                  className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  📞 Call (702) 299-6607
                </a>
                <a 
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
            </div>
            
            {/* Source Attribution */}
            <footer className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This article is provided by{' '}
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:underline"
                >
                  Keeping Current Matters
                </a>
                . Shared by Dr. Jan Duffy, your Homestead West Las Vegas expert.
              </p>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
