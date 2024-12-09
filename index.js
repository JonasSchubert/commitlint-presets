const SEVERITY = {
  Warning: 1,
  Error: 2,
};

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'body-leading-blank': [SEVERITY.Error, 'always'],
    'footer-leading-blank': [SEVERITY.Error, 'always'],
    'scope-case': [SEVERITY.Error, 'always', 'lower-case'],
    'scope-empty': [SEVERITY.Error, 'never'],
    'scope-min-length': [SEVERITY.Error, 'always', 2],
    'subject-case': [SEVERITY.Warning, 'always', 'lower-case'],
    'subject-min-length': [SEVERITY.Error, 'always', 8]
  }
};
