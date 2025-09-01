import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,

      // --- Strictness against bad habits ---
      'no-alert': 'error',
      'no-console': 'warn', // keep warn, but could be "error" for prod
      'no-debugger': 'error',
      'no-implicit-coercion': 'error', // forbid ""+x, !!x etc.
      'no-return-assign': 'error',
      'no-else-return': 'error',
      'no-unneeded-ternary': 'error',

      // --- Variables ---
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-shadow': 'error',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-use-before-define': ['error', { functions: true, classes: true }],
      'prefer-const': 'error',
      'prefer-destructuring': ['error', { object: true, array: true }],

      // --- Functions / Classes ---
      'consistent-return': 'error', // all paths must return something
      'default-param-last': 'error',
      'func-style': ['error', 'expression'], // force const fn = () => {}
      'prefer-arrow-callback': 'error',
      'class-methods-use-this': 'error',

      // --- Style (Prettier covers most, but add logic-based rules) ---
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'dot-notation': 'error',
      'object-shorthand': 'error',

      // --- Safety ---
      'no-fallthrough': 'error',
      'no-invalid-this': 'error',
      'no-magic-numbers': [
        'warn',
        { ignore: [0, 1, -1], ignoreArrayIndexes: true },
      ],
      radix: 'error', // parseInt requires radix
      'no-throw-literal': 'error',
    },
  },
  prettier,
];
