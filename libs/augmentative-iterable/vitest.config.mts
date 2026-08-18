import { defineConfig } from 'vitest/config';

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
        'node_modules/**',
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
      },
    },
  },
});
