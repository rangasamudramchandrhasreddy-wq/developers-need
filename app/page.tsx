'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { toolRegistry, getCategories, searchTools } from '@/lib/tools/registry';
import { storageManager } from '@/lib/utils';
import { Search, Star, Clock, ArrowRight } from 'lucide-react';
import PrivacyNotice from '@/components/tools/PrivacyNotice';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState(
    searchQuery ? searchTools(searchQuery) : toolRegistry
  );

  useEffect(() => {
    setFavorites(storageManager.getFavorites());
    setRecentlyUsed(storageManager.getRecentlyUsed());
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchResults(searchTools(searchQuery));
    } else {
      setSearchResults(toolRegistry);
    }
  }, [searchQuery]);

  const favoriteTools = toolRegistry.filter((t) => favorites.includes(t.slug));
  const recentTools = toolRegistry.filter((t) => recentlyUsed.includes(t.slug));
  const categories = getCategories();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Developer tools, made simple.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fast, free online utilities for JSON formatting, encoding, text processing, and more. All processing happens in your browser.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search developer tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <PrivacyNotice />
      </section>

      {/* Recently Used Tools */}
      {recentTools.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recently Used
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {recentTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg dark:hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Favorites */}
      {favoriteTools.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Favorite Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {favoriteTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg dark:hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search Results or All Tools */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {searchQuery ? `Search Results (${searchResults.length})` : 'Popular Tools'}
            </h2>
            {searchQuery && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Showing tools matching &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
          {!searchQuery && (
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No tools found matching &quot;{searchQuery}&quot;
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {(searchQuery ? searchResults : toolRegistry.slice(0, 10)).map(
              (tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg dark:hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {tool.shortDescription}
                  </p>
                </Link>
              )
            )}
          </div>
        )}
      </section>

      {/* Categories */}
      {!searchQuery && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => {
              const categoryTools = toolRegistry.filter(
                (t) => t.category === category
              );
              return (
                <Link
                  key={category}
                  href={`/tools?category=${encodeURIComponent(category)}`}
                  className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-lg dark:hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {categoryTools.length} tool
                    {categoryTools.length !== 1 ? 's' : ''}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Why Developers Need */}
      {!searchQuery && (
        <section className="rounded-lg bg-gradient-to-r from-brand-50 to-blue-50 dark:from-brand-900/20 dark:to-blue-900/20 border border-brand-200 dark:border-brand-800 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Developers Need?
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="text-brand-600 dark:text-brand-400 font-bold">✓</span>
              <span>
                <strong>100% Browser Processing</strong> - All tools process data
                locally. Your data never leaves your computer.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 dark:text-brand-400 font-bold">✓</span>
              <span>
                <strong>Fast & Lightweight</strong> - No server requests. Tools load
                instantly and run without lag.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 dark:text-brand-400 font-bold">✓</span>
              <span>
                <strong>Privacy First</strong> - No tracking, no analytics, no data
                collection. Just useful tools.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-600 dark:text-brand-400 font-bold">✓</span>
              <span>
                <strong>Always Free</strong> - All tools are free with no ads, no
                signup, no limitations.
              </span>
            </li>
          </ul>
        </section>
      )}

      {/* FAQ */}
      {!searchQuery && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 group">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Is my data secure?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes! All tools process data exclusively in your browser. Your data
                never reaches our servers. We don't collect, store, or analyze any
                personal information.
              </p>
            </details>

            <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Do I need to create an account?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                No account needed! Open any tool and start using it immediately.
              </p>
            </details>

            <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Are the tools free?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes, all tools are completely free. There are no hidden fees, no
                premium upgrades required.
              </p>
            </details>

            <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Can I save my favorite tools?
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Yes! Click the star icon on any tool to add it to your favorites.
                Your favorites are saved locally on your device.
              </p>
            </details>
          </div>
        </section>
      )}
    </div>
  );
}
