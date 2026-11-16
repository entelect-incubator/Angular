# Pezza - Phase 3: Routing and Application Structure

Requires Node.js 24 LTS and npm. **Estimated time:** 3–5 hours — **Difficulty:** ★★★☆☆  
**Prerequisites:** Phase 2 or equivalent experience with standalone components and signals.

## Goal

Organize the growing app into lazy-loaded customer and admin experiences with route-level layouts and clear navigation.

## Learning outcomes

- Configure Angular Router with lazy-loaded feature routes.
- Work with route and query parameters.
- Use functional guards and resolvers when appropriate.
- Scope providers to routes and features.
- Add loading, error, and not-found experiences.
- Understand that client-side guards do not authorize backend requests.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — catalogue and basket.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — customer/admin navigation and feature layouts.

## Tasks and acceptance criteria

Create lazy customer and admin route trees with separate layout shells, a not-found page, and one parameterized detail route. Navigation is keyboard accessible, and guard behavior is documented as UX rather than security.

## Learning resources

- [Angular Router](https://angular.dev/guide/routing)
- [Route guards](https://angular.dev/guide/routing/route-guards)
- [Angular University course catalog](https://angular-university.io/) — search for Angular Router.

Run `npm install`, `npm start`, `npm run build`, and `npm test` in either project directory.
