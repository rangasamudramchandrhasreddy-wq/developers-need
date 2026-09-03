'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import DownloadButton from '@/components/tools/DownloadButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function JsonMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState('0 B');

  const handleMinify = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter JSON to minify');
        setOutput('');
        setSaved('0 B');
        return;
      }
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);

      // Calculate bytes saved
      const originalSize = new Blob([input]).size;
      const minifiedSize = new Blob([minified]).size;
      const savedSize = originalSize - minifiedSize;

      if (savedSize > 1024 * 1024) {
        setSaved(`${(savedSize / (1024 * 1024)).toFixed(2)} MB`);
      } else if (savedSize > 1024) {
        setSaved(`${(savedSize / 1024).toFixed(2)} KB`);
      } else {
        setSaved(`${savedSize} B`);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Invalid JSON format'
      );
      setOutput('');
      setSaved('0 B');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    setSaved('0 B');
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <ToolShell
        title="JSON Minifier"
        description="Reduce JSON file size by removing unnecessary whitespace"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              JSON Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"name": "John", "age": 25}'
              className="editor h-64"
            />
          </div>

          {/* Error */}
          {error && <ErrorMessage message={error} />}

          {/* Minify Button */}
          <button
            onClick={handleMinify}
            className="button-primary w-full"
          >
            Minify JSON
          </button>

          {/* Output */}
          {output && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Minified Output
                </label>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Saved: {saved}
                </span>
              </div>
              <textarea
                value={output}
                readOnly
                className="editor h-32 bg-gray-50 dark:bg-gray-800"
              />
              <div className="flex gap-2 mt-3">
                <CopyButton text={output} />
                <DownloadButton
                  content={output}
                  filename="minified.json"
                  mimeType="application/json"
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
            <li>Paste your JSON in the input field</li>
            <li>Click "Minify JSON"</li>
            <li>See the size reduction instantly</li>
            <li>Copy or download the minified result</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Removes unnecessary whitespace</li>
            <li>Maintains valid JSON structure</li>
            <li>Shows size reduction</li>
            <li>Copy minified output</li>
            <li>Download as file</li>
            <li>Validates JSON before minifying</li>
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
                Why minify JSON?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Minification reduces file size by removing whitespace, speeding up
                transmission and reducing storage needs.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Does minification change the data?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                No! Minification only removes whitespace. The data and structure
                remain identical.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="json-minifier" />
      </div>
    </div>
  );
}
