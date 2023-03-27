# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org).

## [v1.0.4](https://github.com/ansidev/astro-basic-template/compare/v1.0.3...v1.0.4) (2023-03-28)

### Bug Fixes

- **changelog:** correct changelog v1.0.3

- **taskfile:** use snake_case for task name

### Dependencies

| Package                            | Version                     |
| ---------------------------------- | --------------------------- |
| `astro`                            | `^2.1.5` `->` `^2.1.7`      |
| `@types/node`                      | `^18.15.5` `->` `^18.15.10` |
| `@typescript-eslint/eslint-plugin` | `^5.56.0` `->` `^5.57.0`    |
| `@typescript-eslint/parser`        | `^5.56.0` `->` `^5.57.0`    |

Full Changelog: [v1.0.3...v1.0.4](https://github.com/ansidev/astro-basic-template/compare/v1.0.3...v1.0.4)

## [v1.0.3](https://github.com/ansidev/astro-basic-template/compare/v1.0.2...v1.0.3) (2023-03-23)

### Bug Fixes

- **taskfile:** check if branch exists before deleting

- **taskfile:** disable silent mode

### Features

- **renovate:** change renovate update dependency strategy

### Dependencies

| Package                            | Version                    |
| ---------------------------------- | -------------------------- |
| `astro`                            | `^2.1.2` `->` `^2.1.5`     |
| `@commitlint/cli`                  | `^17.4.4` `->` `^17.5.0`   |
| `@types/node`                      | `^18.15.0` `->` `^18.15.5` |
| `@typescript-eslint/eslint-plugin` | `^5.54.1` `->` `^5.56.0`   |
| `@typescript-eslint/parser`        | `^5.54.1` `->` `^5.56.0`   |
| `eslint`                           | `^8.35.0` `->` `^8.36.0`   |
| `eslint-plugin-astro`              | `^0.24.0` `->` `^0.26.1`   |
| `typescript`                       | `^4.9.5` `->` `^5.0.2`     |

Full Changelog: [v1.0.2...v1.0.3](https://github.com/ansidev/astro-basic-template/compare/v1.0.2...v1.0.3)

## [v1.0.2](https://github.com/ansidev/astro-basic-template/compare/v1.0.1...v1.0.2) (2023-03-10)

### Bug Fixes

- delete existing branch before initializing

- set dir for internal task to avoid wrong working

- use personal GitHub token instead of the default GITHUB_TOKEN

- task:clean command

- **dep:** remove unused packages

### Features

- **config:** update Renovate base branch config

### Dependencies

| Package                            | Version                    |
| ---------------------------------- | -------------------------- |
| `astro`                            | `^2.0.14` `->` `^2.1.2`    |
| `astro-compress`                   | `^1.1.33` `->` `^1.1.35`   |
| `astro-purgecss`                   | `^2.0.0` `->` `^2.0.1`     |
| `@types/node`                      | `^18.14.0` `->` `^18.15.0` |
| `astro`                            | `^2.0.14` `->` `^2.1.2`    |
| `astro`                            | `^2.0.14` `->` `^2.1.2`    |
| `@typescript-eslint/eslint-plugin` | `^5.53.0` `->` `^5.54.1`   |
| `@typescript-eslint/parser`        | `^5.53.0` `->` `^5.54.1`   |
| `eslint`                           | `^8.34.0` `->` `^8.35.0`   |
| `eslint-plugin-astro`              | `^0.23.0` `->` `^0.24.0`   |

Full Changelog: [v1.0.1...v1.0.2](https://github.com/ansidev/astro-basic-template/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/ansidev/astro-basic-template/compare/v1.0.1-rc.0...v1.0.1) (2023-02-22)

### Bug Fixes

- Wrong production URL.
- Ignore deleting PR branch if it does not exist to avoid failed jobs.

### Dependencies

| Package                          | Version                |
| -------------------------------- | ---------------------- |
| @typescript-eslint/eslint-plugin | `5.52.0` `->` `5.53.0` |
| @typescript-eslint/parser        | `5.52.0` `->` `5.53.0` |

### Documentations

- **readme:** add features and update the project structure

Full Changelog: [v1.0.0...v1.0.1](https://github.com/ansidev/astro-basic-template/compare/v1.0.0...v1.0.1)

## [v1.0.1-rc.0](https://github.com/ansidev/astro-basic-template/compare/v1.0.0...v1.0.1-rc.0) (2023-02-22)

### Bug Fixes

- **workflow-deploy:** run two different commands for production and preview deployment

- **workflow-deploy:** ignore deleting PR branch if it does not exist to avoid failed jobs

Full Changelog: [v1.0.0...v1.0.1-rc.0](https://github.com/ansidev/astro-basic-template/compare/v1.0.0...v1.0.1-rc.0)

## v1.0.0 (2023-02-18)

## Features

- [Astro](https://astro.build) v2, disabled Astro Telemetry.
- [Astro Compress](https://github.com/astro-community/astro-compress) - Compress output HTML, CSS, JS, image.
- [Astro PurgeCSS](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss) - Remove unused CSS from build output.
- Automate releasing new versions using [GitHub Actions](https://github.com/features/actions) and following the [`git-flow`](https://nvie.com/posts/a-successful-git-branching-model/) branching model.
- Automate [Netlify](https://netlify.com/) deployment, support GitHub deploy environment. [Go to section](#github-deploy-environment).

**Development features**

- Node package manager: [PNPM](https://pnpm.io/).
- [Conventional commit](https://conventionalcommits.org/).
- [ESLint](https://eslint.org) - Static code analyzer.
- [Prettier](https://prettier.io) - Code formatter.
- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - Automate dependency updates.
- [changie](https://changie.dev), [git-chglog](https://github.com/git-chglog/git-chglog) - Generate changelog from conventional commits.
- [taskfile](https://github.com/ansidev/taskfile) - Task files for common tasks.

Full Changelog: [v1.0.0](https://github.com/ansidev/astro-basic-template/commits/v1.0.0)
