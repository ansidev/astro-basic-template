# astro-starter-template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a starter template for the new [Astro](https://astro.build) project which is created by [ansidev](https://github.com/ansidev).

## Features

- [Astro](https://astro.build) v2, disabled Astro Telemetry.
- [Astro Compress](https://github.com/astro-community/astro-compress) - Compress output HTML, CSS, JS, image.
- [Astro PurgeCSS](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss) - Remove unused CSS from build output.
- Automate releasing new versions using [GitHub Actions](https://github.com/features/actions) and following the [`git-flow`](https://nvie.com/posts/a-successful-git-branching-model/) branching model.
- Automate [Netlify](https://netlify.com/) deployment, support GitHub deploy environment. [Go to section](#github-deploy-environment).

## Development features

- Node package manager: [PNPM](https://pnpm.io/).
- [Conventional commit](https://conventionalcommits.org/).
- [ESLint](https://eslint.org) - Static code analyzer.
- [Prettier](https://prettier.io) - Code formatter.
- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - Automate dependency updates.
- [changie](https://changie.dev), [git-chglog](https://github.com/git-chglog/git-chglog) - Generate changelog from conventional commits.
- [taskfile](https://github.com/ansidev/taskfile) - Task files for common tasks.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── .changes
│   └── unreleased
│       └── .gitkeep
├── .changie.yaml
├── .chglog
│   ├── CHANGELOG.tpl.md
│   ├── CHANGELOG_HEADER.tpl.md
│   └── config.yml
├── .commitlintrc.json
├── .czrc
├── .editorconfig
├── .env.local
├── .eslintrc.cjs
├── .github
│   ├── FUNDING.yaml
│   └── workflows
│       └── deploy_to_netlify.yaml
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── .taskfiles
│   ├── task_dep.yaml
│   ├── task_git.yaml
│   ├── task_github.yaml
│   ├── task_release.yaml
│   └── task_site.yaml
├── .vscode
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── LICENSE
├── README.md
├── Taskfile.yaml
├── astro.config.mjs
├── dotenv.config.ts
├── eslint.config.cjs
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── renovate.json
├── src
│   ├── components
│   │   └── Card.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| ----------------------- | -------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

## Task commands

| Command                   | Action                                                            |
| ------------------------- | ----------------------------------------------------------------- |
| `dep:commit`              | Commit changes after updating package version                     |
| `dep:init-dep-branch`     | Init git branch deps/*                                            |
| `dep:update`              | Check whether the new version of the npm package broke the build. |
| `git:push_current`        | Push current branch                                               |
| `release:batch_changelog` | Generate changelog for existing git tags                          |
| `release:changelog`       | Generate changelog for an existing version                        |
| `release:changelog_next`  | Generate changelog for a new version                              |
| `release:commit_release`  | Create release commit                                             |
| `release:create`          | Generate release commit                                           |
| `release:prepare`         | Install tools                                                     |
| `site:build`              | Build site                                                        |
| `site:clean`              | Clean the build output                                            |
| `site:install`            | Install dependencies                                              |

## GitHub Deploy Environment

| Branch    | Event          | Event Type    | Is Merged | GitHub Environment     | Note                                         |
| --------- | -------------- | ------------- | --------- | ---------------------- | -------------------------------------------- |
| `main`    | `pull_request` | `closed`      | `true`    | `production`           |                                              |
| `main`    | `pull_request` | `open`        | `false`   | `staging`              |                                              |
| `main`    | `pull_request` | `synchronize` | `false`   | `staging`              |                                              |
| `develop` | `pull_request` | `closed`      | `true`    | `preview`              | The head branch will be deleted after merged |
| `main`    | `pull_request` | `closed`      | `false`   | skip running workflows |                                              |
| `develop` | `pull_request` | `closed`      | `false`   | skip running workflows |                                              |
| `develop` | `pull_request` | `open`        | `false`   | `pr-{number}-preview`  |                                              |
| `develop` | `pull_request` | `synchronize` | `false`   | `pr-{number}-preview`  |                                              |

## Want to learn more?

Feel free to check the [official documentation](https://docs.astro.build) or jump into the [official Discord server](https://astro.build/chat).

## Author

Le Minh Tri [@ansidev](https://ansidev.xyz/about).

## License

This source code is released under the [MIT License](/LICENSE).
