'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import DownloadButton from '@/components/tools/DownloadButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter text to encode');
        setOutput('');
        return;
      }
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (err) {
      setError('Failed to encode text');
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
        title="Base64 Encoder"
        description="Encode text to Base64 format"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Text Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to encode..."
              className="editor h-40"
            />
          </div>

          {/* Error */}
          {error && <ErrorMessage message={error} />}

          {/* Encode Button */}
          <button
            onClick={handleEncode}
            className="button-primary w-full"
          >
            Encode to Base64
          </button>

          {/* Output */}
          {output && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Base64 Output
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
                  filename="encoded.txt"
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
            <li>Enter text in the input field</li>
            <li>Click "Encode to Base64"</li>
            <li>Copy or download the encoded result</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Supports Unicode text</li>
            <li>Handles special characters</li>
            <li>Copy encoded output</li>
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
                What is Base64 encoding?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Base64 is a text encoding standard that converts binary data into
                ASCII characters, making it safe for transmission in text-based
                systems.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                When should I use Base64?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Base64 is useful for embedding images in HTML/CSS, sending binary
                data over APIs, and encoding credentials in HTTP headers.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="base64-encoder" />
      </div>
    </div>
  );
}
