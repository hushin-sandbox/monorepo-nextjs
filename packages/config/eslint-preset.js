module.exports = {
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
