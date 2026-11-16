# Pezza - Phase 7: Testing and Code Quality

Requires Node.js 24 LTS and npm. **Estimated time:** 4–6 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 6 or equivalent working customer and admin flows.

## Goal

Make the storefront and administration workflows dependable through focused unit, component, HTTP, browser, and accessibility checks.

## Learning outcomes

- Test components and services using the project's Vitest runner.
- Test HTTP behavior with Angular's HTTP testing utilities.
- Choose behavior-oriented assertions and stable test seams.
- Automate important browser journeys with Playwright.
- Include keyboard and accessibility checks in quality validation.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — working Pezza features with limited coverage.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — tested customer and admin workflows.

## Tasks and acceptance criteria

Add focused coverage for catalogue, basket, checkout, API behavior, and a critical browser flow. Tests verify user-observable behavior, run repeatably, and are included in the documented quality commands.

## Learning resources

- [Angular testing](https://angular.dev/guide/testing)
- [Angular University course catalog](https://angular-university.io/) — search for Angular Testing.
- [Playwright](https://playwright.dev/docs/intro)

Run `npm install`, `npm run build`, `npm test`, and the documented Playwright command in either project directory.
