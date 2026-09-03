import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Articles and tips for developers.',
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Articles, tips, and best practices for developers.
        </p>
      </div>

      <section className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Coming soon! Check back for articles and tutorials.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Topics We'll Cover
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ Developer tools and best practices</li>
            <li>✓ JSON formatting and validation</li>
            <li>✓ Security and encoding</li>
            <li>✓ Performance optimization</li>
            <li>✓ Web development tips</li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Subscribe for Updates
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Stay tuned for our first articles. Follow us or check back soon.
        </p>
      </section>
    </div>
  );
}
