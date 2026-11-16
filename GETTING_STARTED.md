# Getting Started

## Prerequisites

- Node.js 24 LTS, version 24.15.0 or later
- npm (included with Node.js)
- Git
- A code editor such as Visual Studio Code

Angular 22 supports Node.js `^24.15.0`, `^22.22.3`, or `^26.0.0` and TypeScript `>=6.0.0 <6.1.0`. This incubator standardizes on Node 24 LTS and TypeScript 6.

Check your installation:

```shell
node --version
npm --version
```

## Start Phase 1

From the repository root, install the workspace once and start the exercise app:

```shell
npm start
```

Open <http://localhost:4200>. The start project is a small Angular shell with the catalogue exercise left for you to build.

To run the completed reference implementation instead:

```shell
npm run start:end
```

Build and test every registered Nx project and run Oxlint:

```shell
npm run ci
```

To install dependencies from a clean checkout, run `npm ci` once at the repository root. The Phase 1 catalogue uses local sample data and does not require Docker, a database, credentials, or network access to a backend. Later phases will introduce the Pezza API and mock delivery service when the application is ready to consume them.

## Nx and linting

- `npm run build:all` builds every registered app.
- `npm run test:all` runs every registered test suite.
- `npm run lint` checks JavaScript/TypeScript with Oxlint.
- `npm run ci` runs all registered Nx build, test, and lint targets.
- `npx nx show projects` lists projects; for example, `npx nx run pezza-phase-1-end:build` builds the Phase 1 reference app.

The GitHub Actions workflow runs `npm ci` and `npm run ci` on pushes and pull requests. As new phases gain runnable projects, add them to the npm workspace and Nx project graph so CI validates them too.

Dependabot checks npm workspace dependencies and GitHub Actions weekly. Security update pull requests are grouped separately from routine version updates; repository Dependabot alerts/security updates must be enabled in GitHub settings for security alerts to generate automatic PRs.

## Stop the development server

Press `Ctrl+C` in the terminal running `npm start`.

## Version references

- [Angular version compatibility](https://angular.dev/reference/versions)
- [Angular CLI](https://angular.dev/tools/cli)
- [Optimus UI](https://optimus.openng.org/)
