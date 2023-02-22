# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org).

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
