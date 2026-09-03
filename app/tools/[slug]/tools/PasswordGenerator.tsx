'use client';

import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import ToolShell from '@/components/tools/ToolShell';
import CopyButton from '@/components/tools/CopyButton';
import PrivacyNotice from '@/components/tools/PrivacyNotice';
import RelatedTools from '@/components/tools/RelatedTools';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [strength, setStrength] = useState<'weak' | 'medium' | 'strong' | 'very-strong'>('strong');

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (useUppercase) chars += uppercase;
    if (useLowercase) chars += lowercase;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (chars.length === 0) {
      setPassword('Select at least one character type');
      return;
    }

    let newPassword = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPassword += chars[array[i] % chars.length];
    }

    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (pwd.length >= 16) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    if (score <= 2) setStrength('weak');
    else if (score <= 4) setStrength('medium');
    else if (score <= 5) setStrength('strong');
    else setStrength('very-strong');
  };

  useEffect(() => {
    generatePassword();
  }, []);

  const getStrengthColor = () => {
    switch (strength) {
      case 'weak':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'strong':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'very-strong':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  return (
    <div className="space-y-6">
      <PrivacyNotice />

      <ToolShell
        title="Password Generator"
        description="Generate secure random passwords"
        onClear={() => {
          setPassword('');
        }}
      >
        <div className="space-y-6">
          {/* Password Display */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Generated Password
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={password}
                readOnly
                className="input-field flex-1 font-mono"
              />
              <CopyButton text={password} />
              <button
                onClick={generatePassword}
                className="button-secondary px-4"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Strength Indicator */}
          {password && password.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password Strength
                </label>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${getStrengthColor()}`}
                >
                  {strength.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    strength === 'weak'
                      ? 'w-1/4 bg-red-500'
                      : strength === 'medium'
                        ? 'w-1/2 bg-yellow-500'
                        : strength === 'strong'
                          ? 'w-3/4 bg-blue-500'
                          : 'w-full bg-green-500'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Length */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Length: {length}
            </label>
            <input
              type="range"
              min="8"
              max="128"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Options */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useUppercase}
                onChange={(e) => setUseUppercase(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Uppercase (A-Z)
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useLowercase}
                onChange={(e) => setUseLowercase(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Lowercase (a-z)
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Numbers (0-9)
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Symbols (!@#$%^&*)
              </span>
            </label>
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="button-primary w-full"
          >
            Generate Password
          </button>
        </div>
      </ToolShell>

      {/* FAQ and Related Tools */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use
          </h2>
          <ol className="space-y-3 text-gray-600 dark:text-gray-400 list-decimal list-inside">
            <li>Configure options: length and character types</li>
            <li>Click "Generate Password"</li>
            <li>Copy the password to use it</li>
            <li>Check the strength indicator</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>Customizable length (8-128 characters)</li>
            <li>Include/exclude uppercase, lowercase, numbers, symbols</li>
            <li>Password strength indicator</li>
            <li>Cryptographically secure generation</li>
            <li>Copy to clipboard</li>
            <li>Regenerate instantly</li>
            <li>Works entirely in your browser</li>
            <li>No passwords are stored or logged</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ
          </h2>
          <div className="space-y-3">
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                How long should my password be?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                At least 12-16 characters for strong security. Longer passwords are
                more secure but harder to remember.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Should I use symbols?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Yes! Including symbols significantly increases password strength. Use
                them unless a website doesn't allow them.
              </p>
            </details>
            <details className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold cursor-pointer">
                Are these passwords truly random?
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Yes! This tool uses crypto.getRandomValues() which provides
                cryptographically secure randomness.
              </p>
            </details>
          </div>
        </div>

        <RelatedTools currentSlug="password-generator" />
      </div>
    </div>
  );
}
