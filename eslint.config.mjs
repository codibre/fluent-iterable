import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';

const MAX_LINES = 300;

/** @type {import('eslint').ESLint} **/
export default [
    {
        files: ['**/*.ts'],
        ignores: [
            '**/dist/**/*',
            '**/lib/**/*',
            '**/build/**/*',
            '**/bin/**/*',
            '**/templates/**/*',
            '**/*.py',
            '**/.eslintrc.js',
            '**/coverage/**',
            'eslint.config.mjs',
            '**/.release-it.js',
            '**/jest.config.js',
            '**/scripts/**',
            "**/node_modules/**",
        ],
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': typescriptEslint,
            'unused-imports': unusedImports,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',

            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.js'],
            },
        },

        rules: {
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true,
                    },

                    singleline: {
                        delimiter: 'semi',
                        requireLast: false,
                    },
                },
            ],
            'no-return-await': 'off',
            '@typescript-eslint/return-await': ['error', 'always'],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-empty-function': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-use-before-define': 'error',

            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                },
            ],

            '@stylistic/semi': ['error', 'always'],
            camelcase: 'off',
            'comma-dangle': ['error', 'always-multiline'],

            complexity: [
                'off',
                {
                    max: 11,
                },
            ],

            curly: ['error', 'multi-line'],
            'default-case': 'error',
            'eol-last': 'error',
            eqeqeq: ['error', 'smart'],
            'guard-for-in': 'error',
            'id-blacklist': 'error',
            'id-match': 'error',
            'linebreak-style': ['error', 'unix'],
            'max-classes-per-file': ['off', 1],
            'max-lines': ['off', MAX_LINES],
            'new-parens': 'error',
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-cond-assign': 'error',
            'no-console': 'off',
            'no-constant-condition': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-empty': 'error',
            'no-eval': 'error',
            'no-fallthrough': 'error',
            'no-invalid-regexp': 'error',
            'no-invalid-this': 'off',
            'no-magic-numbers': 'off',

            '@typescript-eslint/no-magic-numbers': [
                'error',
                {
                    ignore: [0, 1, -1, 2],
                    ignoreEnums: true,
                },
            ],

            'no-multiple-empty-lines': [
                'error',
                {
                    max: 2,
                },
            ],

            'no-new-wrappers': 'error',
            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': ['error'],
            'no-regex-spaces': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-underscore-dangle': 'off',
            'no-unsafe-finally': 'error',
            'no-unused-labels': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',

            '@typescript-eslint/consistent-type-assertions': [
                'error',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'never',
                },
            ],

            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            'prefer-const': [
                'error',
                {
                    destructuring: 'any',
                },
            ],

            'quote-props': ['error', 'as-needed'],
            radix: 'error',

            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/'],
                },
            ],

            'use-isnan': 'error',
        },
    },
    {
        files: ['**/test/**/*.ts', '**/*.js'],

        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/consistent-type-assertions': 'off',
            'no-magic-numbers': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
        },
    },
];
