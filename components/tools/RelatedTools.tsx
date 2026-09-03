import Link from 'next/link';
import { getRelatedTools } from '@/lib/tools/registry';
import { ChevronRight } from 'lucide-react';

interface RelatedToolsProps {
  currentSlug: string;
}

export default function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const related = getRelatedTools(currentSlug, 4);

  if (related.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
        Related Tools
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-md dark:hover:shadow-md transition-all group"
          >
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-50 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {tool.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tool.shortDescription}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
