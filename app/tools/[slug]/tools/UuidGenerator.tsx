'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const generateUuids = () => {
    const newUuids = Array.from({ length: count }, () => {
      if ('randomUUID' in crypto) {
        return crypto.randomUUID();
      }
      // Fallback for older browsers
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    });
    setUuids(newUuids);
  };

  const handleClear = () => {
    setUuids([]);
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <ToolShell
        title="UUID Generator"
        description="Generate universally unique identifiers (UUID v4)"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Count Input */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Generate:
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Math.min(100, Math.max(1, Number(e.target.value))))}
              className="input-field max-w-[100px]"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">UUID(s)</span>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateUuids}
            className="button-primary w-full"
          >
            Generate UUID
            {count > 1 && `s (${count})`}
          </button>

          {/* Output */}
          {uuids.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated UUIDs
              </label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {uuids.map((uuid, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-50">
                      {uuid}
                    </code>
                    <CopyButton text={uuid} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    const text = uuids.join('\n');
                    navigator.clipboard.writeText(text);
                  }}
                  className="button-secondary flex-1"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy All
                </button>
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
            <li>Enter how many UUIDs you need (1-100)</li>
            <li>Click "Generate UUID"</li>
            <li>Copy individual UUIDs or all at once</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Generates UUID v4 (random)</li>
            <li>Uses cryptographically secure randomness</li>
            <li>Generate up to 100 at once</li>
            <li>Copy individual or all UUIDs</li>
            <li>Works entirely in your browser</li>
            <li>No external services needed</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ
          </h2>
          <div className="space-y-3">
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                What is a UUID?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                UUID (Universally Unique Identifier) is a 128-bit value that is
                extremely unlikely to be duplicated. Used as unique identifiers in
                databases, APIs, and applications.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                What is UUID v4?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                UUID v4 is generated using random numbers, making it suitable for most
                use cases where you need unique identifiers.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                When should I use UUIDs?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Use UUIDs for database primary keys, API request IDs, session tokens,
                or any value that needs to be globally unique.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="uuid-generator" />
      </div>
    </div>
  );
}
