'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { toolRegistry, getCategories, searchTools } from '@/lib/tools/registry';
import { Search, ChevronRight } from 'lucide-react';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [results, setResults] = useState(toolRegistry);

  const categories = getCategories();

  useEffect(() => {
    let filtered = toolRegistry;

    if (searchQuery) {
      filtered = searchTools(searchQuery);
    }

    if (selectedCategory) {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    setResults(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Developer Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse our collection of {toolRegistry.length} free developer tools
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Categories Filter */}
      <div className="space-y-3">
        <div>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Tools
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No tools found{' '}
            {searchQuery && `matching &quot;${searchQuery}&quot;`}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {results.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-md dark:hover:shadow-md transition-all group"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.description}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0 ml-4" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
