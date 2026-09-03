'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import ToolShell from '@/components/tools/ToolShell';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function JsonValidator() {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleValidate = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter JSON to validate');
        setIsValid(null);
        return;
      }
      JSON.parse(input);
      setIsValid(true);
      setError(null);
    } catch (err) {
      setIsValid(false);
      setError(
        err instanceof Error ? err.message : 'Invalid JSON format'
      );
    }
  };

  const handleClear = () => {
    setInput('');
    setIsValid(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <ToolShell
        title="JSON Validator"
        description="Check JSON syntax and get detailed error messages"
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

          {/* Validate Button */}
          <button
            onClick={handleValidate}
            className="button-primary w-full"
          >
            Validate JSON
          </button>

          {/* Result */}
          {isValid === true && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="font-medium text-green-700 dark:text-green-400">
                Valid JSON! ✓
              </p>
            </div>
          )}

          {isValid === false && (
            <>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="font-medium text-red-700 dark:text-red-400">
                  Invalid JSON ✗
                </p>
              </div>
              {error && <ErrorMessage message={error} />}
            </>
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
            <li>Click "Validate JSON"</li>
            <li>Get instant feedback on validity</li>
            <li>View detailed error messages if invalid</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Validates JSON syntax</li>
            <li>Detailed error messages</li>
            <li>Error line number information</li>
            <li>Handles empty input</li>
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
                What is JSON validation?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                JSON validation checks if your JSON follows the correct syntax and
                structure rules.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                How do I fix invalid JSON?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Check the error message for hints. Common issues: missing commas,
                trailing commas, unquoted keys, or mismatched braces.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="json-validator" />
      </div>
    </div>
  );
}
