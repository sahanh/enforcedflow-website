import { describe, it, expect } from 'vitest';
import { REDIRECTS, OLD_SITEMAP_URLS } from '../src/utils/redirects';

/**
 * Test suite for URL redirects
 *
 * This suite verifies that:
 * 1. All old URLs from the sitemap are accessible (either directly or via redirect)
 * 2. Redirects return proper HTTP status codes (301/308)
 * 3. Redirects point to the correct new URLs
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:4321';

describe('URL Redirects', () => {
  describe('Redirect Configuration', () => {
    it('should have redirects defined', () => {
      expect(Object.keys(REDIRECTS).length).toBeGreaterThan(0);
    });

    it('should have old sitemap URLs defined', () => {
      expect(OLD_SITEMAP_URLS.length).toBeGreaterThan(0);
    });
  });

  describe('Old Sitemap URLs Accessibility', () => {
    OLD_SITEMAP_URLS.forEach((oldUrl) => {
      it(`should make ${oldUrl} accessible`, async () => {
        // Extract path from old URL
        const oldPath = new URL(oldUrl).pathname;

        // Determine expected new path
        let expectedPath = oldPath;
        if (REDIRECTS[oldPath] || REDIRECTS[oldPath + '/'] || REDIRECTS[oldPath.replace(/\/$/, '')]) {
          const normalizedPath = oldPath.endsWith('/') ? oldPath.slice(0, -1) : oldPath;
          expectedPath = REDIRECTS[normalizedPath] || REDIRECTS[normalizedPath + '/'] || oldPath;
        }

        // Make request to new site
        const testUrl = `${BASE_URL}${oldPath}`;

        try {
          const response = await fetch(testUrl, {
            redirect: 'manual', // Don't follow redirects automatically
          });

          // Check if it's a redirect
          if (response.status === 301 || response.status === 308 || response.status === 302 || response.status === 307) {
            const location = response.headers.get('location');
            expect(location).toBeTruthy();

            // Verify redirect location matches expected path
            if (location) {
              const redirectPath = location.startsWith('http')
                ? new URL(location).pathname
                : location;

              expect(redirectPath).toBe(expectedPath);
            }
          } else if (response.status === 200) {
            // If it's a direct hit (no redirect needed), that's also acceptable
            expect(response.status).toBe(200);
          } else {
            // Any other status is a failure
            throw new Error(`Unexpected status ${response.status} for ${testUrl}`);
          }
        } catch (error) {
          throw new Error(`Failed to fetch ${testUrl}: ${error}`);
        }
      });
    });
  });

  describe('Redirect Status Codes', () => {
    Object.entries(REDIRECTS).forEach(([oldPath, newPath]) => {
      it(`should redirect ${oldPath} to ${newPath} with proper status code`, async () => {
        const testUrl = `${BASE_URL}${oldPath}`;

        const response = await fetch(testUrl, {
          redirect: 'manual',
        });

        // Should be a redirect (301, 302, 307, or 308)
        expect([301, 302, 307, 308]).toContain(response.status);

        // Should point to correct location
        const location = response.headers.get('location');
        expect(location).toBeTruthy();

        if (location) {
          const redirectPath = location.startsWith('http')
            ? new URL(location).pathname
            : location;

          expect(redirectPath).toBe(newPath);
        }
      });
    });
  });

  describe('New URLs Accessibility', () => {
    const newUrls = [...new Set(Object.values(REDIRECTS))];

    newUrls.forEach((newPath) => {
      it(`should have ${newPath} accessible with 200 status`, async () => {
        const testUrl = `${BASE_URL}${newPath}`;

        const response = await fetch(testUrl, {
          redirect: 'follow', // Follow redirects for new URLs
        });

        expect(response.status).toBe(200);
      });
    });
  });
});
