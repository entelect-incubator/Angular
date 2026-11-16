# Pezza - Phase 11: Performance and Deployment

Requires Node.js 24 LTS, npm, and Docker. **Estimated time:** 4–6 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 10 or equivalent production build and PWA experience.

## Goal

Measure, optimize, containerize, and continuously validate the Angular application for production.

## Learning outcomes

- Analyze bundle output and lazy-loading boundaries.
- Optimize images and rendering based on measurement.
- Configure production builds and runtime environment boundaries.
- Serve static assets from a multi-stage Docker/Nginx image.
- Add CI checks for formatting, tests, and production build.
- Use Lighthouse and performance budgets as feedback.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — working PWA without production delivery automation.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — optimized, containerized application with CI validation.

## Tasks and acceptance criteria

Record a baseline, make at least one evidence-based improvement, and provide reproducible container build/run instructions. CI installs deterministically and runs unit tests and a production build; runtime configuration does not expose secrets.

## Learning resources

- [Angular build](https://angular.dev/tools/cli/build)
- [Angular performance](https://angular.dev/best-practices/performance)
- [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
- [GitHub Actions](https://docs.github.com/actions)

Run the documented `npm ci`, `npm test`, and production build commands in either project directory.
