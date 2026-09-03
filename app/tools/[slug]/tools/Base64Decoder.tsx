'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import DownloadButton from '@/components/tools/DownloadButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function Base64Decoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleDecode = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter Base64 to decode');
        setOutput('');
        return;
      }
      const decoded = decodeURIComponent(
        atob(input.replace(/\s/g, '')).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
      );
      setOutput(decoded);
    } catch (err) {
      setError('Invalid Base64 format');
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
        title="Base64 Decoder"
        description="Decode Base64-encoded text"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Base64 Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Base64-encoded text..."
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
            Decode from Base64
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
            <li>Paste Base64-encoded text</li>
            <li>Click "Decode from Base64"</li>
            <li>Copy or download the decoded result</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Decodes Base64 to text</li>
            <li>Supports Unicode text</li>
            <li>Handles invalid input gracefully</li>
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
                How do I know if text is Base64?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Base64 text contains only A-Z, a-z, 0-9, +, /, and = characters. It
                often ends with one or two equals signs (padding).
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                What if decoding fails?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                The input may not be valid Base64. Check for typos, extra spaces,
                or special characters.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="base64-decoder" />
      </div>
    </div>
  );
}
