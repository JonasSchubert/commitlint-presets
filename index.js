module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-min-length': [2, 'always', 2],
    'subject-case': [1, 'always', 'lower-case'],
    'subject-min-length': [2, 'always', 8]
  }
};
