import { siteConfig } from '@/lib/site/siteConfig';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 font-bold text-xl ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
        DN
      </div>
      <span className="hidden sm:inline">{siteConfig.name}</span>
    </div>
  );
}
