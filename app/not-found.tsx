import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400">
        The tool or page you are looking for doesn’t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        Back to home
      </Link>
    </div>
  );
}
