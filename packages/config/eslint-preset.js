module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:import/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
      ],
    },
  ],
};
