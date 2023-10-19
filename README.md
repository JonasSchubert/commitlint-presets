# commitlint-presets

🔧 Commitlint presets.

> This is not in any way connected or related to the official [conventional-changelog](https://github.com/conventional-changelog) group and only maintained by [me](https://github.com/JonasSchubert) and optimized for my usage with Gitlab.

## Usage

Register the package in your package.json as followed:

```json
  ...

  "dependencies": {
    "commitlint-presets": "{VERSION}",
    ...
```

### Usage

Update your commitlint config, e.g. commitlint.config.js:
```js
module.exports = {
  extends: [
    'commitlint-presets'
  ]
};

```

## Support

| [<img alt="jonas.schubert" src="https://avatars.githubusercontent.com/u/21952813?v=4" style="width: 90px;"/>](https://github.com/JonasSchubert) |
| :---: |
| [Jonas Schubert](mailto:jonas.schubert.projects@web.de) |
