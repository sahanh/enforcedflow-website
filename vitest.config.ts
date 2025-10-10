import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Test environment
    environment: 'node',

    // Include test files
    include: ['tests/**/*.test.ts'],

    // Test timeout (10 seconds for network requests)
    testTimeout: 10000,
  },
});
