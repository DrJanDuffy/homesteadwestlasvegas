import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/rss-types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(post.publishedAt);

  return (
    <article className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder if image fails
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.image-placeholder');
              if (placeholder) {
                (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
        ) : null}
        <div className="image-placeholder w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center" style={{ display: post.featuredImage ? 'none' : 'flex' }}>
          <span className="text-white text-4xl">🏠</span>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <span 
                key={category}
                className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.publishedAt.toISOString()}>
            {formattedDate}
          </time>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
