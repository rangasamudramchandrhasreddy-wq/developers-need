import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: 'Get in touch with the Developers Need team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Have a question, suggestion, or found a bug? We'd love to hear from
          you.
        </p>
      </div>

      <section className="space-y-6">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Email
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            For support and inquiries:
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium mt-2 inline-block"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Feedback
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We're always looking to improve. If you have suggestions for new tools
            or improvements, please let us know.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Bug Reports
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Found a bug? Please report it so we can fix it as soon as possible.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Response Time
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We aim to respond to all inquiries within 24-48 hours. Thank you for
          your patience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          FAQ
        </h2>
        <div className="space-y-3">
          <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">
              How do I request a new tool?
            </summary>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Send us an email with your suggestion. Include what the tool should do
              and why you think it's useful.
            </p>
          </details>

          <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">
              Can I contribute tools?
            </summary>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              We're working on a contribution system. For now, reach out via email
              to discuss.
            </p>
          </details>

          <details className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <summary className="font-semibold cursor-pointer">
              How can I report a privacy concern?
            </summary>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Email us immediately at {siteConfig.email} if you have any privacy
              concerns.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
