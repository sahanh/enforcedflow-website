/**
 * URL Redirects Mapping
 * Maps old enforcedflow.com URLs to new site structure
 */

export const REDIRECTS: Record<string, string> = {
  // Old "advance-actions" → New Zapier setup guides
  '/advance-actions/skill-based-time-based-and-priority-based-round-robin':
    '/extensions/advanced-round-robin/guides/zapier/setup',
  '/advance-actions/human-in-the-loop-review-step-for-zapier-automations':
    '/extensions/human-in-the-loop/guides/zapier/setup',

  // Old "simple-actions" → New Zapier setup guides
  '/simple-actions/simple-round-robin': '/extensions/simple-round-robin/guides/zapier/setup',

  // Old "actions" → New extension landing pages
  '/actions/simple-round-robin': '/extensions/simple-round-robin',

  // Old "how-to" → New blog posts (under /blog)
  '/how-to/how-to-format-full-state-name-to-2-letter-code-in-zapier': '/blog/format-state-name-to-2-letter-code-zapier',

  // Old root-level blog posts → New /blog structure
  '/format-state-name-to-2-letter-code-zapier': '/blog/format-state-name-to-2-letter-code-zapier',

  // Policy pages
  '/terms-of-service': '/terms',
  '/privacy-policy': '/privacy',

  // Keep these paths (no redirect needed, but listed for reference)
  // '/' → '/'
  // '/blog/' → '/blog'
  // '/contact/' → '/contact'
  // '/api/' → '/api'
};

/**
 * Get the new URL for an old URL, if a redirect exists
 */
export function getRedirectUrl(oldUrl: string): string | null {
  // Remove trailing slash and check
  const normalizedUrl = oldUrl.endsWith('/') ? oldUrl.slice(0, -1) : oldUrl;

  if (REDIRECTS[normalizedUrl]) {
    return REDIRECTS[normalizedUrl];
  }

  if (REDIRECTS[normalizedUrl + '/']) {
    return REDIRECTS[normalizedUrl + '/'];
  }

  return null;
}

/**
 * URLs from old sitemap that should exist on new site
 */
export const OLD_SITEMAP_URLS = [
  'https://enforcedflow.com/',
  'https://enforcedflow.com/blog/',
  'https://enforcedflow.com/terms-of-service/',
  'https://enforcedflow.com/contact/',
  'https://enforcedflow.com/api/',
  'https://enforcedflow.com/privacy-policy/',
  'https://enforcedflow.com/advance-actions/skill-based-time-based-and-priority-based-round-robin/',
  'https://enforcedflow.com/advance-actions/human-in-the-loop-review-step-for-zapier-automations/',
  'https://enforcedflow.com/simple-actions/simple-round-robin/',
  'https://enforcedflow.com/how-to/how-to-format-full-state-name-to-2-letter-code-in-zapier/',
];
