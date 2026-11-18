import rules from '../../eslint.config.mjs';

/**
 * Per-project overrides for @codibre/fluent-iterable.
 *
 * fluent-iterable is a GENERIC iterable wrapper: its public API intentionally
 * uses unconstrained types (`any`, variadic wrappers, `as unknown as` escape
 * hatches) to accept any input shape. The strict type-aware rules from the
 * shared root config (copied from nestjs-context) surface ~580 violations in
 * this lib's async internals that are deliberate design, not defects.
 *
 * We keep the centralized standard for every other lib and relax only the
 * rules whose violations here are intentional generic-library patterns. The
 * stylistic + core-safety rules (quotes, semi, no-unused-vars, eqeqeq, ...)
 * remain fully enforced from the root config.
 */

const fluentOverrides = {
    files: ['**/*.ts'],
    ignores: [
        '**/dist/**/*',
        '**/lib/**/*',
        '**/build/**/*',
        '**/bin/**/*',
        '**/templates/**/*',
        '**/coverage/**',
        'eslint.config.mjs',
        '**/.release-it.js',
        '**/jest.config.js',
        '**/scripts/**',
    ],
    rules: {
        // Generic-API type looseness (intentional in a wrapper library)
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',

        // Structural / escape-hatch patterns (variadic chain builders, iterator .return())
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',

        // Promise-return edge cases where awaiting would be incorrect
        // (sync fns returning a promise, intentional fire-and-forget)
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
    },
};

/** @type {import('eslint').ESLint} **/
export default [...rules, fluentOverrides];
