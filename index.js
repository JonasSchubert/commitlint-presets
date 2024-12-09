const SEVERITY = {
  Warning: 1,
  Error: 2,
};

export default {
  extends: [
    '@commitlint/config-conventional'
  ],
  plugins: [
    {
      rules: {
        'skip-ci': ({ subject }) => {
          return [
            subject.includes('[skip ci]'),
            'Your pipeline is not being triggered with this commit. Are you sure?',
          ];
        }
      }
    }
  ],
  rules: {
    'body-leading-blank': [SEVERITY.Error, 'always'],
    'footer-leading-blank': [SEVERITY.Error, 'always'],
    'scope-case': [SEVERITY.Error, 'always', 'lower-case'],
    'scope-empty': [SEVERITY.Error, 'never'],
    'scope-min-length': [SEVERITY.Error, 'always', 2],
    'subject-case': [SEVERITY.Warning, 'always', 'lower-case'],
    'subject-min-length': [SEVERITY.Error, 'always', 8],

    'skip-ci': [SEVERITY.Warning, 'always']
  }
};
