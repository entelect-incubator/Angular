# Pezza - Phase 6: State Management and Reactive Design

Requires Node.js 24 LTS, npm, and the Phase 5 API services. **Estimated time:** 4–6 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 5 or equivalent HTTP client experience.

## Goal

Complete the ordering experience with persistent basket state, order history, and delivery status updates.

## Learning outcomes

- Distinguish server state from transient UI state.
- Combine signals, resources, and RxJS where each is a fit.
- Structure feature-level state services and derived state.
- Persist only appropriate client state.
- Apply caching and optimistic updates deliberately.
- Evaluate whether a state library is justified by a demonstrated requirement.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — API-backed Pezza flows.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — basket persistence, order history, delivery tracking.

## Tasks and acceptance criteria

Persist a customer's basket across reloads, fetch order history through the API client, and represent delivery status changes without conflating server and UI state. Storage errors and stale data have explicit behavior; no state library is added without a documented need.

## Learning resources

- [Resource API](https://angular.dev/guide/signals/resource)
- [RxJS interop](https://angular.dev/ecosystem/rxjs-interop)
- [Angular University course catalog](https://angular-university.io/) — search for RxJS and reactive design patterns.

Run `npm install`, `npm start`, `npm run build`, and `npm test` in either project directory.
