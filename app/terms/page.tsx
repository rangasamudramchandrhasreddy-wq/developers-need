import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: 'Terms of Service for Developers Need.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          <strong>⚠️ Note:</strong> This is a starter template. Site owners should
          review and customize these terms for their specific implementation before
          going live.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          By accessing and using {siteConfig.name}, you accept these terms and
          conditions. If you do not agree, please do not use our site.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          2. Use License
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We grant you a limited, non-exclusive, non-transferable license to use
          our tools for personal and professional purposes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          3. Prohibited Activities
        </h2>
        <p className="text-gray-600 dark:text-gray-400">You may not:</p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-3 list-disc list-inside">
          <li>Use our site for illegal purposes</li>
          <li>Attempt to hack or bypass security measures</li>
          <li>Scrape or automate access excessively</li>
          <li>Transmit malware or harmful code</li>
          <li>Violate anyone's intellectual property rights</li>
          <li>Transmit abusive, threatening, or harassing content</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          4. Accuracy of Tools
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We strive for accuracy, but tools are provided "as is". We do not
          guarantee perfect accuracy for all use cases. Always verify important
          results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          5. Limitations of Liability
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          To the extent permitted by law, {siteConfig.name} is not liable for:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-3 list-disc list-inside">
          <li>Damages from tool use or misuse</li>
          <li>Data loss or corruption</li>
          <li>Service interruptions</li>
          <li>Indirect or consequential damages</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          6. Availability
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We strive for 99% uptime but don't guarantee continuous availability. We
          reserve the right to perform maintenance or disable services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          7. Intellectual Property
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          All content, design, and tools are owned by {siteConfig.name} or our
          licensors. You may not reproduce or distribute without permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          8. Modifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We reserve the right to modify these terms at any time. Your continued
          use constitutes acceptance of changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          9. Termination
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We may terminate or restrict access to anyone violating these terms
          without notice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          10. Governing Law
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          These terms are governed by applicable law in our jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          11. Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Questions about these terms? Contact us at{' '}
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
