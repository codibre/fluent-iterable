import { defineConfig } from 'vitest/config';

// Canonical, monorepo-wide Vitest config (nestjs-context pattern).
// Consumers re-export this file from their own vitest.config.mts so `vitest`
// run inside a package dir picks up the shared settings. Globs resolve
// relative to the package dir at runtime (turbo runs each task in its dir).
export default defineConfig({
  test: {
    include: ['test/unit/**/*.spec.ts'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['html', 'text', 'lcov'],
      include: ['index.js', 'lib/**/*.js'],
      exclude: [
        'coverage/**',
        '.eslintrc.js',
        'test/**',
        'dist/**',
        'node_modules/**'
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80
      }
    }
  }
});
