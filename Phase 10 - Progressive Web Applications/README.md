# Pezza - Phase 10: Progressive Web Applications

Requires Node.js 24 LTS and npm. **Estimated time:** 3–5 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 9 or equivalent production-ready responsive experience.

## Goal

Make Pezza installable and useful during temporary connectivity loss without implying that unavailable server actions succeeded.

## Learning outcomes

- Configure an Angular service worker and web app manifest.
- Choose cache strategies by resource type and freshness needs.
- Provide offline fallbacks and update notifications.
- Decide what basket data is safe and useful to persist offline.
- Test installability, updates, and offline navigation.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — responsive production-style app without PWA support.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — installable, offline-aware Pezza app.

## Tasks and acceptance criteria

Configure manifest and service worker caching, show an update/offline state, and document which customer actions require connectivity. Never display an offline order as successfully submitted; production build and tests pass.

## Learning resources

- [Angular service worker](https://angular.dev/ecosystem/service-workers)
- [Angular University course catalog](https://angular-university.io/) — search for Angular PWA.

Run `npm install`, `npm run build`, and `npm test` in either project directory.
