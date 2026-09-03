import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site/siteConfig';

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: 'Learn about Developers Need, our mission, and what we stand for.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About {siteConfig.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {siteConfig.description}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Developers Need is built on a simple mission: provide free, fast, and
          privacy-conscious developer tools without unnecessary complexity or
          tracking.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          We believe developers deserve better tools. Tools that work instantly,
          respect privacy, and don't require accounts or subscriptions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Why We Built This
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Tired of bloated SaaS tools that require logins, collect data, and
          charge for basic functionality? We built Developers Need to be the
          opposite:
        </p>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
          <li>
            <strong>No login required</strong> - Open and use immediately
          </li>
          <li>
            <strong>100% browser processing</strong> - Your data stays on your
            device
          </li>
          <li>
            <strong>No tracking</strong> - We don't collect data or analytics
          </li>
          <li>
            <strong>Completely free</strong> - All tools, no ads, no upsell
          </li>
          <li>
            <strong>Simple and fast</strong> - Minimal dependencies, optimized
            performance
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We currently offer 10 essential developer tools and are constantly
          expanding. Each tool is designed to be:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>Focused on solving one problem really well</li>
          <li>Fast and responsive</li>
          <li>Mobile-friendly</li>
          <li>Accessible to everyone</li>
          <li>Privacy-first</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Technology
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Developers Need is built with modern, lightweight technologies:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
          <li>Next.js for performance</li>
          <li>TypeScript for reliability</li>
          <li>Tailwind CSS for design</li>
          <li>Browser APIs for processing</li>
        </ul>
      </section>

      <section className="rounded-lg bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Privacy Commitment
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your privacy is our top priority. All tools process data exclusively in
          your browser. We do not:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
          <li>Collect personal data</li>
          <li>Track user behavior</li>
          <li>Send input to third parties</li>
          <li>Store sensitive information</li>
          <li>Use invasive analytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Future Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We're constantly growing. Planned additions include:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
          <li>50+ additional developer tools</li>
          <li>Enhanced tool categories</li>
          <li>Community contributions</li>
          <li>Better organization and search</li>
          <li>More language support</li>
        </ul>
      </section>
    </div>
  );
}
