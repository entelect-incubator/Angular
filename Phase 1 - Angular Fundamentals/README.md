# Pezza - Phase 1: Angular Fundamentals

Requires Node.js 24 LTS (24.15.0 or later), npm, and TypeScript 6 (installed with the project).

**Estimated time:** 3–5 hours — **Difficulty:** ★★☆☆☆  
**Prerequisites:** basic HTML/CSS and programming fundamentals; see [Getting Started](../GETTING_STARTED.md).

## Goal

Build the first useful Pezza experience: a responsive pizza catalogue. Learn the Angular application shell, standalone components, TypeScript models, dependency injection, component communication, and template control flow without a backend.

## Learning outcomes

- Run and navigate an Angular CLI application.
- Define a typed pizza model and provide local catalogue data through a service.
- Compose standalone components using required inputs and outputs.
- Render repeated content with `@for` and conditional content with `@if`.
- Keep component TypeScript, HTML, and SCSS separate.
- Verify the catalogue with component and service tests.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — clean standalone app shell; implement the catalogue tasks here.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — working reference catalogue using local sample data.

## Tasks

1. Inspect the app bootstrap, root component, and route configuration.
2. Add a typed `Pizza` model and a catalogue service containing sample pizzas.
3. Build a reusable pizza card with an input for its pizza and an output for an add action.
4. Render the catalogue with Angular control flow and add responsive styles.
5. Write tests for rendering and the add action.

## Acceptance criteria

- The application starts at `http://localhost:4200` without backend services.
- At least three pizzas render with a name, description, and price.
- Each card exposes a working add action.
- Templates do not contain business logic or inline styles.
- `npm run build` and `npm test` pass.

## Learning resources

- [Angular Essentials](https://angular.dev/essentials)
- [Components](https://angular.dev/guide/components)
- [Template control flow](https://angular.dev/guide/templates/control-flow)
- [Dependency injection](https://angular.dev/guide/di)
- [Angular University course catalog](https://angular-university.io/) — search for Angular fundamentals/core material.

## Run and validate

From the repository root:

```shell
npm ci
npm start
npm run ci
```

`npm start` serves the exercise project. Use `npm run start:end` to serve the completed reference instead. `npm run ci` validates all currently registered projects. Continue with [Phase 2: Signals and Component Architecture](../Phase%202%20-%20Signals%20and%20Component%20Architecture/README.md).
