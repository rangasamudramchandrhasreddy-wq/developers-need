import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy policy for Developers Need.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          <strong>⚠️ Note:</strong> This is a starter template. Site owners should
          review and customize this privacy policy for their specific implementation
          before going live.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          1. Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {siteConfig.name} ("we", "us", "our") is committed to protecting your
          privacy. This Privacy Policy explains how we handle information when you
          use our website and tools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          2. How We Process Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          <strong>Browser-Side Processing:</strong> Our tools process all data
          locally in your web browser. Data does not travel to our servers.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>What We Don't Do:</strong> We do not collect, store, or transmit
          the content you input into our tools, including JSON, passwords, JWTs, or
          text data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          3. Local Storage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We use your browser's localStorage to store only:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-3 list-disc list-inside">
          <li>Favorite tool slugs (for quick access)</li>
          <li>Recently used tool slugs (for convenience)</li>
          <li>Theme preference (light/dark/system)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          This data is stored only on your device and never sent to our servers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          4. Analytics & Tracking
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The MVP does not include analytics or tracking. When analytics are added
          in the future:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-3 list-disc list-inside">
          <li>You will be notified</li>
          <li>Only anonymized data will be tracked</li>
          <li>No sensitive input will be transmitted</li>
          <li>You will have opt-out options</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          5. Cookies
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We use only essential functional cookies to maintain user preferences and
          session information. No tracking or marketing cookies are used.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          6. Third-Party Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We don't send your tool input data to third-party services. The browser
          APIs and libraries used are all open-source and run locally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          7. Security
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Since all processing happens in your browser, data security depends on
          your device and network. We use HTTPS to protect data in transit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          8. Children's Privacy
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Our site does not target children under 13. We don't knowingly collect
          information from children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          9. Your Rights
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          You can clear your browser's localStorage at any time. All preferences
          will be reset. Since we don't store data on our servers, there's no user
          account data to request or delete.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          10. Changes to This Policy
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We may update this policy occasionally. Continued use constitutes
          acceptance of changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          11. Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Questions about privacy? Contact us at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand-600 dark:text-brand-400 hover:text-brand-700"
          >
            {siteConfig.email}
          </a>
        </p>
      </section>
    </div>
  );
}
