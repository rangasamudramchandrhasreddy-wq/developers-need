import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ToolShellProps {
  children: ReactNode;
  title: string;
  description?: string;
  onClear?: () => void;
}

export default function ToolShell({
  children,
  title,
  description,
  onClear,
}: ToolShellProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
        {children}
      </div>

      {onClear && (
        <div className="flex justify-end">
          <button
            onClick={onClear}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
