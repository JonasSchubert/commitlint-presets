# [2.2.0](https://github.com/JonasSchubert/commitlint-presets/compare/v2.1.1...v2.2.0) (2025-09-26)


### Bug Fixes

* **deps:** :arrow_up: bump @commitlint/* ([8d4e082](https://github.com/JonasSchubert/commitlint-presets/commit/8d4e0820a98a15178eb706c551e4b97e36062d7a))


### Features

* **rules:** :sparkles: provide warning if deployment is being skipped ([c50a6d3](https://github.com/JonasSchubert/commitlint-presets/commit/c50a6d3275b29c6b8375093f88d1d8d3767bcf04))

## [2.1.1](https://github.com/JonasSchubert/commitlint-presets/compare/v2.1.0...v2.1.1) (2025-08-19)


### Bug Fixes

* **deps:** :arrow_up: bump dev dependencies, allow additional node engine ([260e4a6](https://github.com/JonasSchubert/commitlint-presets/commit/260e4a6b76449cffe4a0a349c7a93052b4ae9837))

# [2.1.0](https://github.com/JonasSchubert/commitlint-presets/compare/v2.0.1...v2.1.0) (2025-03-26)


### Bug Fixes

* **dependencies:** use local file ([aaeb563](https://github.com/JonasSchubert/commitlint-presets/commit/aaeb563860712091b49e44a5a437ac51e4f4fd03))
* **npm:** bump dependency and engine versions ([56d365f](https://github.com/JonasSchubert/commitlint-presets/commit/56d365f848706f48949a2cccad1fd79c34ec23b0))


### Features

* **rules:** add checks for skip-quality and skip-security ([2ce174f](https://github.com/JonasSchubert/commitlint-presets/commit/2ce174f707ca388ce0ed14c441cb1a4fac42594f))

## [2.0.1](https://github.com/JonasSchubert/commitlint-presets/compare/v2.0.0...v2.0.1) (2024-12-10)


### Bug Fixes

* **rules:** fix logic of skip ci ([943cd45](https://github.com/JonasSchubert/commitlint-presets/commit/943cd45c4d8862824ddc35e533953da81d237748))

# [2.0.0](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.5...v2.0.0) (2024-12-09)


### chore

* **engines:** require node 22 and up and npm 10 and up ([8df5ced](https://github.com/JonasSchubert/commitlint-presets/commit/8df5ced3461b9ba84f3ed9c1d2798369cd021226))


### Features

* **plugins:** add a rule to detect commits which would skip the ci ([d4d9a1d](https://github.com/JonasSchubert/commitlint-presets/commit/d4d9a1d0f13a127a29022c2d2f02713e116c8f00))
* **rules:** add error for body- and footer-leading-blank ([65b14e2](https://github.com/JonasSchubert/commitlint-presets/commit/65b14e2677b3a900449101ef710d323bdb565e69))


### BREAKING CHANGES

* **rules:** error is being thrown for rule body- and footer-leading-blank
* **engines:** require at least node 22 and npm 10

## [1.0.5](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.4...v1.0.5) (2024-03-17)


### Bug Fixes

* **dependencies:** bump commitlint and husky ([0aa26e6](https://github.com/JonasSchubert/commitlint-presets/commit/0aa26e6d05555c71f05b66ad503f7a5b48db7df1))

## [1.0.4](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.3...v1.0.4) (2024-02-01)


### Bug Fixes

* **rules:** set length of scope-min-length to 2 ([8e93492](https://github.com/JonasSchubert/commitlint-presets/commit/8e93492d6463c4f37548e8c15abd46ff2bc2ae87))

## [1.0.3](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.2...v1.0.3) (2023-11-16)


### Bug Fixes

* **engines:** allow additional versions ([8f87b45](https://github.com/JonasSchubert/commitlint-presets/commit/8f87b45934829a9833839868aae7ba2d5b6d2075))

## [1.0.2](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.1...v1.0.2) (2023-10-19)


### Bug Fixes

* **npm:** remove semantic release dependencies ([1d55a0e](https://github.com/JonasSchubert/commitlint-presets/commit/1d55a0e15c2a0e9744abd159f8eb4c59422b3770))

## [1.0.1](https://github.com/JonasSchubert/commitlint-presets/compare/v1.0.0...v1.0.1) (2023-10-19)


### Bug Fixes

* **packages:** remove obsolet dependencies, add project itself to validate commits ([e789233](https://github.com/JonasSchubert/commitlint-presets/commit/e789233b54c9e88bbe441e8a25cb16b5aa75f7db))
* **rules:** add scope-empty ([fa984b8](https://github.com/JonasSchubert/commitlint-presets/commit/fa984b81f398fd27be5923ed79f3098eb892a027))

# 1.0.0 (2023-10-19)


### Features

* **project:** initial setup ([fb7ab1d](https://github.com/JonasSchubert/commitlint-presets/commit/fb7ab1db708cb451cd804f7b14a17bef2ee8f156))
