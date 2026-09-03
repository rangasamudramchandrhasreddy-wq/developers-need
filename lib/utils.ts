export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch {
    return false;
  }
};

export const downloadFile = (
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
) => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:${mimeType};charset=utf-8,${encodeURIComponent(content)}`
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const storageManager = {
  setFavorite: (slug: string) => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      ) as string[];
      if (!favorites.includes(slug)) {
        favorites.push(slug);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    } catch {
      // Silently fail if localStorage unavailable
    }
  },

  removeFavorite: (slug: string) => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      ) as string[];
      const filtered = favorites.filter((f) => f !== slug);
      localStorage.setItem('favorites', JSON.stringify(filtered));
    } catch {
      // Silently fail if localStorage unavailable
    }
  },

  getFavorites: (): string[] => {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch {
      return [];
    }
  },

  isFavorite: (slug: string): boolean => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      ) as string[];
      return favorites.includes(slug);
    } catch {
      return false;
    }
  },

  addRecentlyUsed: (slug: string) => {
    try {
      const recent = JSON.parse(
        localStorage.getItem('recentlyUsed') || '[]'
      ) as string[];
      const filtered = recent.filter((r) => r !== slug);
      filtered.unshift(slug);
      const limited = filtered.slice(0, 10);
      localStorage.setItem('recentlyUsed', JSON.stringify(limited));
    } catch {
      // Silently fail if localStorage unavailable
    }
  },

  getRecentlyUsed: (): string[] => {
    try {
      return JSON.parse(localStorage.getItem('recentlyUsed') || '[]');
    } catch {
      return [];
    }
  },
};
