'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import DownloadButton from '@/components/tools/DownloadButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [indent, setIndent] = useState(2);

  const handleFormat = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter JSON to format');
        setOutput('');
        return;
      }
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Invalid JSON format'
      );
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
        title="JSON Formatter"
        description="Format and beautify JSON with customizable indentation"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Indentation Control */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Indentation:
            </label>
            <select
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
              className="input-field max-w-[150px]"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
              <option value={1}>Tab</option>
            </select>
          </div>

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

          {/* Format Button */}
          <button
            onClick={handleFormat}
            className="button-primary w-full"
          >
            Format JSON
          </button>

          {/* Output */}
          {output && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Formatted Output
              </label>
              <textarea
                value={output}
                readOnly
                className="editor h-64 bg-gray-50 dark:bg-gray-800"
              />
              <div className="flex gap-2 mt-3">
                <CopyButton text={output} />
                <DownloadButton
                  content={output}
                  filename="formatted.json"
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
            <li>Paste or paste your JSON in the input field</li>
            <li>Choose your preferred indentation level</li>
            <li>Click "Format JSON"</li>
            <li>Copy or download the formatted result</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Pretty-print minified JSON</li>
            <li>Customizable indentation (2, 4, 8 spaces, or tab)</li>
            <li>Validates JSON syntax</li>
            <li>Copy formatted output</li>
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
                What is JSON formatting?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                JSON formatting adds proper indentation and line breaks to make JSON
                easier to read and debug.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Does my JSON get uploaded anywhere?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                No! All formatting happens in your browser. Your JSON never leaves
                your device.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="json-formatter" />
      </div>
    </div>
  );
}
