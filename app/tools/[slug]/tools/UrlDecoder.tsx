'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import DownloadButton from '@/components/tools/DownloadButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function UrlDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleDecode = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter URL-encoded text');
        setOutput('');
        return;
      }
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
    } catch (err) {
      setError('Failed to decode URL');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <ToolShell
        title="URL Decoder"
        description="Decode URL-encoded text"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL-Encoded Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter URL-encoded text (e.g., hello%20world)..."
              className="editor h-40"
            />
          </div>

          {/* Error */}
          {error && <ErrorMessage message={error} />}

          {/* Decode Button */}
          <button
            onClick={handleDecode}
            className="button-primary w-full"
          >
            Decode URL
          </button>

          {/* Output */}
          {output && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Decoded Output
              </label>
              <textarea
                value={output}
                readOnly
                className="editor h-40 bg-gray-50 dark:bg-gray-800 break-all"
              />
              <div className="flex gap-2 mt-3">
                <CopyButton text={output} />
                <DownloadButton
                  content={output}
                  filename="decoded.txt"
                  mimeType="text/plain"
                />
              </div>
            </div>
          )}
        </div>
      </ToolShell>

      {/* FAQ and Related Tools */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use
          </h2>
          <ol className="space-y-3 text-gray-600 dark:text-gray-400 list-decimal list-inside">
            <li>Paste URL-encoded text</li>
            <li>Click "Decode URL"</li>
            <li>Copy the readable decoded result</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Decodes URL-encoded text</li>
            <li>Converts %20 and other codes to readable text</li>
            <li>Handles all URL-encoded characters</li>
            <li>Error handling for invalid input</li>
            <li>Copy decoded output</li>
            <li>Download as file</li>
            <li>Works entirely in your browser</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ
          </h2>
          <div className="space-y-3">
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                What is URL encoding?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                URL encoding replaces special characters with %XX hexadecimal codes so
                they can be safely transmitted in URLs.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                When do I need to decode URLs?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                When you see encoded query parameters in URLs and need to read what
                they actually mean.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="url-decoder" />
      </div>
    </div>
  );
}
