'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import ErrorMessage from '@/components/tools/ErrorMessage';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

interface JwtPart {
  header?: Record<string, unknown>;
  payload?: Record<string, unknown>;
  error?: string;
}

export default function JwtDecoder() {
  const [input, setInput] = useState('');
  const [jwtData, setJwtData] = useState<JwtPart>({});
  const [error, setError] = useState<string | null>(null);

  const handleDecode = () => {
    try {
      setError(null);
      if (!input.trim()) {
        setError('Please enter a JWT to decode');
        setJwtData({});
        return;
      }

      const parts = input.trim().split('.');
      if (parts.length !== 3) {
        setError('Invalid JWT format. A JWT must have 3 parts separated by dots.');
        setJwtData({});
        return;
      }

      const [headerB64, payloadB64] = parts;

      try {
        const header = JSON.parse(
          decodeURIComponent(
            atob(headerB64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
          )
        );
        const payload = JSON.parse(
          decodeURIComponent(
            atob(payloadB64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
          )
        );

        setJwtData({ header, payload });
        setError(null);
      } catch {
        setError('Failed to decode JWT parts. The JWT may be malformed.');
        setJwtData({});
      }
    } catch (err) {
      setError('Invalid JWT');
      setJwtData({});
    }
  };

  const handleClear = () => {
    setInput('');
    setJwtData({});
    setError(null);
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          <strong>⚠️ Important:</strong> Decoding a JWT does NOT verify its signature. This is a viewer only. Never trust a JWT's claims without verifying its signature on your server.
        </p>
      </div>

      <ToolShell
        title="JWT Decoder"
        description="Decode JWT tokens to view header and payload"
        onClear={handleClear}
      >
        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              JWT Token
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your JWT here (format: header.payload.signature)..."
              className="editor h-32"
            />
          </div>

          {/* Error */}
          {error && <ErrorMessage message={error} />}

          {/* Decode Button */}
          <button
            onClick={handleDecode}
            className="button-primary w-full"
          >
            Decode JWT
          </button>

          {/* Output */}
          {jwtData.header && (
            <div className="space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Header
                </h3>
                <pre className="editor bg-gray-50 dark:bg-gray-800 text-xs max-h-40 overflow-auto">
                  {JSON.stringify(jwtData.header, null, 2)}
                </pre>
              </div>

              {/* Payload */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Payload
                </h3>
                <pre className="editor bg-gray-50 dark:bg-gray-800 text-xs max-h-40 overflow-auto">
                  {JSON.stringify(jwtData.payload, null, 2)}
                </pre>
                <div className="flex gap-2 mt-3">
                  <CopyButton text={JSON.stringify(jwtData.payload, null, 2)}>
                    Copy Payload
                  </CopyButton>
                </div>
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
            <li>Paste your JWT token into the input</li>
            <li>Click "Decode JWT"</li>
            <li>View the decoded header and payload</li>
            <li>Remember: Signature is not verified here!</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Decodes JWT header and payload</li>
            <li>Viewer only - does not verify signatures</li>
            <li>Handles malformed JWTs gracefully</li>
            <li>Displays formatted JSON</li>
            <li>Copy payload to clipboard</li>
            <li>Works entirely in your browser</li>
            <li>No tokens are stored or logged</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ
          </h2>
          <div className="space-y-3">
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                What is a JWT?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                JWT (JSON Web Token) is a compact token format used for authentication
                and information exchange. It has 3 parts: header.payload.signature.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Why can't this verify signatures?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Signature verification requires the secret key, which you should never
                share. Always verify signatures on your server.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Is my JWT secure here?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Yes! The tool runs in your browser. Your JWT is never sent to our
                servers. However, JWTs can be decoded by anyone, so don't share them.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="jwt-decoder" />
      </div>
    </div>
  );
}
