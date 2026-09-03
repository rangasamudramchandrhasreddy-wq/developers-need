import { getToolBySlug, toolRegistry } from '@/lib/tools/registry';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import React from 'react';

export async function generateStaticParams() {
  return toolRegistry.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      type: 'website',
    },
  };
}

export default async function ToolLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <a href="/" className="hover:text-gray-900 dark:hover:text-gray-50">
          Home
        </a>
        <span>/</span>
        <a href="/tools" className="hover:text-gray-900 dark:hover:text-gray-50">
          Tools
        </a>
        <span>/</span>
        <span>{tool.name}</span>
      </nav>

      {/* Tool Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {tool.name}
          </h1>
          <span className="text-sm font-medium bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 px-3 py-1 rounded-full">
            {tool.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
      </div>

      {/* Tool Content */}
      {children}
    </div>
  );
}
