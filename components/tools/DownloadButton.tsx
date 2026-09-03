'use client';

import { Download } from 'lucide-react';
import { downloadFile } from '@/lib/utils';

interface DownloadButtonProps {
  content: string;
  filename: string;
  mimeType?: string;
  className?: string;
}

export default function DownloadButton({
  content,
  filename,
  mimeType = 'text/plain',
  className = '',
}: DownloadButtonProps) {
  return (
    <button
      onClick={() => downloadFile(content, filename, mimeType)}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors ${className}`}
    >
      <Download className="w-4 h-4" />
      Download
    </button>
  );
}
