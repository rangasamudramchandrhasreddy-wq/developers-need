import { Lock } from 'lucide-react';

export default function PrivacyNotice() {
  return (
    <div className="flex gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
      <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-blue-700 dark:text-blue-400">
        All processing happens in your browser. Your data is never sent to our servers.
      </p>
    </div>
  );
}
