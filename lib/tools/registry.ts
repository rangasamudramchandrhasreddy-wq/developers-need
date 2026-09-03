export interface ToolMetadata {
  slug: string;
  name: string;
  description: string;
  category: string;
  keywords: string[];
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  icon?: string;
  relatedKeywords?: string[];
}

export const toolRegistry: ToolMetadata[] = [
  // JSON Tools
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and beautify JSON with customizable indentation and syntax highlighting. Validate JSON structure and pretty-print minified JSON.',
    category: 'JSON',
    keywords: ['format', 'beautify', 'pretty-print', 'json', 'indent', 'whitespace'],
    shortDescription: 'Format and beautify JSON instantly',
    seoTitle: 'JSON Formatter – Free Online JSON Beautifier | Developers Need',
    seoDescription: 'Format and beautify JSON online. Pretty-print minified JSON, validate structure, and customize indentation.',
    icon: 'Code2',
  },
  {
    slug: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate JSON syntax and structure. Get detailed error messages when JSON is invalid with line numbers.',
    category: 'JSON',
    keywords: ['validate', 'check', 'json', 'syntax', 'error', 'parser'],
    shortDescription: 'Validate JSON syntax instantly',
    seoTitle: 'JSON Validator – Check JSON Syntax Online | Developers Need',
    seoDescription: 'Validate JSON syntax and structure online. Get detailed error messages with line numbers.',
    icon: 'CheckCircle2',
  },
  {
    slug: 'json-minifier',
    name: 'JSON Minifier',
    description: 'Minify JSON by removing unnecessary whitespace. Reduce file size while maintaining valid JSON structure.',
    category: 'JSON',
    keywords: ['minify', 'compress', 'json', 'whitespace', 'reduce', 'optimize'],
    shortDescription: 'Minify and compress JSON',
    seoTitle: 'JSON Minifier – Compress JSON Online | Developers Need',
    seoDescription: 'Minify JSON to reduce file size. Remove unnecessary whitespace while keeping valid JSON.',
    icon: 'Zap',
  },

  // Encoding Tools
  {
    slug: 'base64-encoder',
    name: 'Base64 Encoder',
    description: 'Encode text to Base64. Supports Unicode text and special characters. Perfect for encoding data for URLs and APIs.',
    category: 'Encoding',
    keywords: ['base64', 'encode', 'text', 'unicode', 'conversion', 'api'],
    shortDescription: 'Encode text to Base64',
    seoTitle: 'Base64 Encoder – Encode Text to Base64 Online | Developers Need',
    seoDescription: 'Encode text to Base64 online. Supports Unicode characters and special symbols.',
    icon: 'Lock',
  },
  {
    slug: 'base64-decoder',
    name: 'Base64 Decoder',
    description: 'Decode Base64-encoded text. Handles invalid input gracefully and supports Unicode output.',
    category: 'Encoding',
    keywords: ['base64', 'decode', 'text', 'unicode', 'conversion', 'api'],
    shortDescription: 'Decode Base64 text',
    seoTitle: 'Base64 Decoder – Decode Base64 Online | Developers Need',
    seoDescription: 'Decode Base64-encoded text online. Supports Unicode and handles invalid input gracefully.',
    icon: 'Unlock',
  },
  {
    slug: 'url-encoder',
    name: 'URL Encoder',
    description: 'Encode text for URLs. Convert special characters to URL-safe format. Essential for query parameters and API calls.',
    category: 'Encoding',
    keywords: ['url', 'encode', 'percent-encoding', 'special-characters', 'api', 'query'],
    shortDescription: 'Encode text for URLs',
    seoTitle: 'URL Encoder – Encode URLs Online | Developers Need',
    seoDescription: 'Encode text for URLs. Convert special characters to URL-safe format for APIs and query parameters.',
    icon: 'Link',
  },
  {
    slug: 'url-decoder',
    name: 'URL Decoder',
    description: 'Decode URL-encoded text. Reverse percent-encoding to get readable text from URLs and query parameters.',
    category: 'Encoding',
    keywords: ['url', 'decode', 'percent-encoding', 'query', 'parameter', 'reverse'],
    shortDescription: 'Decode URL-encoded text',
    seoTitle: 'URL Decoder – Decode URLs Online | Developers Need',
    seoDescription: 'Decode URL-encoded text online. Extract readable content from URLs and query parameters.',
    icon: 'LinkOff',
  },

  // Web Development Tools
  {
    slug: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode JWT tokens to view header and payload. Viewer only - does not verify signatures. Safely decode JSON Web Tokens locally.',
    category: 'Web Development',
    keywords: ['jwt', 'decode', 'token', 'json-web-token', 'header', 'payload', 'viewer'],
    shortDescription: 'Decode and view JWT tokens',
    seoTitle: 'JWT Decoder – Decode JSON Web Tokens Online | Developers Need',
    seoDescription: 'Decode JWT tokens to view header and payload. Viewer only - does not verify signatures.',
    icon: 'Key',
  },

  // Generators
  {
    slug: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate UUID v4 identifiers. Create universally unique identifiers for databases, APIs, and applications.',
    category: 'Generators',
    keywords: ['uuid', 'generate', 'unique-id', 'identifier', 'v4', 'guid'],
    shortDescription: 'Generate UUID v4 identifiers',
    seoTitle: 'UUID Generator – Generate UUIDs Online | Developers Need',
    seoDescription: 'Generate UUID v4 identifiers online. Create unique IDs for databases, APIs, and applications.',
    icon: 'Dices',
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure random passwords with customizable length and character options. Use uppercase, lowercase, numbers, and symbols.',
    category: 'Generators',
    keywords: ['password', 'generate', 'secure', 'random', 'strength', 'crypto'],
    shortDescription: 'Generate secure random passwords',
    seoTitle: 'Password Generator – Generate Strong Passwords | Developers Need',
    seoDescription: 'Generate secure random passwords online. Customize length and character options for strong passwords.',
    icon: 'Shield',
  },
];

export function getToolBySlug(slug: string): ToolMetadata | undefined {
  return toolRegistry.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): ToolMetadata[] {
  return toolRegistry.filter((tool) => tool.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(toolRegistry.map((tool) => tool.category));
  return Array.from(categories).sort();
}

export function getRelatedTools(
  slug: string,
  limit: number = 4
): ToolMetadata[] {
  const tool = getToolBySlug(slug);
  if (!tool) return [];

  const related = toolRegistry
    .filter((t) => t.slug !== slug && t.category === tool.category)
    .slice(0, limit);

  if (related.length < limit) {
    const additional = toolRegistry
      .filter(
        (t) =>
          t.slug !== slug &&
          t.category !== tool.category &&
          !related.includes(t)
      )
      .slice(0, limit - related.length);
    related.push(...additional);
  }

  return related;
}

export function searchTools(query: string): ToolMetadata[] {
  const lowerQuery = query.toLowerCase();
  return toolRegistry.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery) ||
      tool.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
  );
}
