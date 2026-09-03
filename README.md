# Developers Need

**Developer tools, made simple.**

Fast, free online utilities for developers. A scalable platform of 100+ developer tools built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **10 Built-in Tools**: JSON Formatter, JSON Validator, JSON Minifier, Base64 Encoder/Decoder, URL Encoder/Decoder, JWT Decoder, UUID Generator, Password Generator
- **Responsive Design**: Mobile-first, fully responsive interface
- **Dark Mode Support**: Light, dark, and system theme options
- **Privacy-First**: All tools process data in your browser - no server uploads
- **Fast & Lightweight**: Optimized for Core Web Vitals
- **Search & Discovery**: Find tools quickly with full-text search
- **Favorites & History**: Save favorite tools and access recently used tools
- **SEO Optimized**: Each tool has unique metadata for search engines
- **Extensible Architecture**: Easily add 100+ tools using the centralized tool registry

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Icons**: Lucide React
- **Deployment**: Vercel or Cloudflare Pages ready

## Requirements

- Node.js 18+ (LTS recommended)
- npm 9+ or yarn 4+

## Installation

1. **Clone the repository** (or extract the project)
   ```bash
   cd "developers-need"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your deployment URL.

## Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Set environment variables in Vercel dashboard

### Cloudflare Pages

1. Build locally: `npm run build`
2. Connect your Git repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `.next`

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your production URL (required for canonical URLs and sitemap)
- `NEXT_PUBLIC_ADSENSE_ENABLED`: Set to `true` to enable AdSense (disabled by default)
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`: Your AdSense publisher ID (only if enabled)

## Adding a New Tool

### 1. Update the Tool Registry

Edit `lib/tools/registry.ts` and add your tool metadata:

```typescript
{
  slug: 'new-tool',
  name: 'New Tool',
  description: 'Tool description',
  category: 'Category Name',
  keywords: ['keyword1', 'keyword2'],
  shortDescription: 'Brief description',
  seoTitle: 'New Tool | Developers Need',
  seoDescription: 'SEO description',
}
```

### 2. Create the Tool Component

Create `app/tools/[slug]/tools/NewTool.tsx`:

```typescript
'use client';

import { useState } from 'react';
import ToolShell from '@/components/tools/ToolShell';

export default function NewTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleProcess = () => {
    // Tool logic here
    setOutput(result);
  };

  return (
    <ToolShell
      title="New Tool"
      description="Tool description"
      onClear={() => {
        setInput('');
        setOutput('');
      }}
    >
      {/* Tool UI */}
    </ToolShell>
  );
}
```

### 3. The route and SEO metadata are automatically generated

No additional configuration needed!

## Changing the "Developers Need" Branding

1. **Site Configuration**: Edit `lib/site/siteConfig.ts`
   - Change `name` to your brand name
   - Update `tagline` and `description`

2. **Logo**: Edit `components/layout/Logo.tsx`
   - Replace with your logo

3. **Metadata**: Search project for "Developers Need" and replace as needed

## Configuration

### Site Configuration

Edit `lib/site/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'Developers Need',
  tagline: 'Developer tools, made simple.',
  description: '100+ free developer tools',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // ... more config
};
```

### Theme Colors

Edit `tailwind.config.ts` to customize brand colors.

### Enabling AdSense

1. Get your AdSense publisher ID
2. Set in `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_ENABLED=true
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
   ```
3. AdSense script loads automatically

## Structure

```
developers-need/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── tools/
│   │   ├── page.tsx            # Tools index
│   │   └── [slug]/
│   │       ├── page.tsx        # Tool page
│   │       └── tools/          # Tool implementations
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── blog/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── layout/                 # Header, footer, nav
│   ├── tools/                  # Tool UI components
│   └── ui/                     # Generic UI components
├── lib/
│   ├── tools/                  # Tool registry, utilities
│   ├── site/                   # Site configuration
│   └── utils.ts
├── public/                     # Static assets
├── types/                      # TypeScript types
└── package.json
```

## Privacy

- All tools process data **exclusively in your browser**
- No data is sent to servers (except static assets)
- No user tracking or analytics in MVP
- LocalStorage only stores tool slugs (favorites, recently used)
- Sensitive data (JSON, JWTs, passwords) is never logged or stored

## SEO

Every tool page includes:
- Unique, descriptive title and meta description
- Canonical URL
- Open Graph metadata
- Structured data (Schema.org)
- Sitemap and robots.txt

## Performance

- Optimized for Core Web Vitals
- Tree-shaked dependencies
- Server Components by default
- Minimal client-side JavaScript
- CSS-in-JS only where necessary
- Image optimization built-in

## Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```

### Node modules issues
```bash
rm -r node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint       # Check for linting issues
npm run build      # Check for build errors
```

## License

MIT License - Feel free to modify and deploy

## Support

For issues, feature requests, or contributions, please open an issue on GitHub.

---

Built with ❤️ for developers
