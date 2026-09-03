import dynamic from 'next/dynamic';
import { getToolBySlug } from '@/lib/tools/registry';
import { notFound } from 'next/navigation';

// Import all tool components dynamically
const toolComponents: Record<string, React.ComponentType> = {
  'json-formatter': dynamic(
    () => import('./tools/JsonFormatter'),
    { loading: () => <ToolSkeleton /> }
  ),
  'json-validator': dynamic(
    () => import('./tools/JsonValidator'),
    { loading: () => <ToolSkeleton /> }
  ),
  'json-minifier': dynamic(
    () => import('./tools/JsonMinifier'),
    { loading: () => <ToolSkeleton /> }
  ),
  'base64-encoder': dynamic(
    () => import('./tools/Base64Encoder'),
    { loading: () => <ToolSkeleton /> }
  ),
  'base64-decoder': dynamic(
    () => import('./tools/Base64Decoder'),
    { loading: () => <ToolSkeleton /> }
  ),
  'url-encoder': dynamic(
    () => import('./tools/UrlEncoder'),
    { loading: () => <ToolSkeleton /> }
  ),
  'url-decoder': dynamic(
    () => import('./tools/UrlDecoder'),
    { loading: () => <ToolSkeleton /> }
  ),
  'jwt-decoder': dynamic(
    () => import('./tools/JwtDecoder'),
    { loading: () => <ToolSkeleton /> }
  ),
  'uuid-generator': dynamic(
    () => import('./tools/UuidGenerator'),
    { loading: () => <ToolSkeleton /> }
  ),
  'password-generator': dynamic(
    () => import('./tools/PasswordGenerator'),
    { loading: () => <ToolSkeleton /> }
  ),
};

function ToolSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
    </div>
  );
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = toolComponents[slug];

  if (!ToolComponent) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <ToolComponent />
    </div>
  );
}
