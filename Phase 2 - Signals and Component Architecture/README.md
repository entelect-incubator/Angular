# Pezza - Phase 2: Signals and Component Architecture

Requires Node.js 24 LTS and npm. **Estimated time:** 3–5 hours — **Difficulty:** ★★★☆☆  
**Prerequisites:** Phase 1 or equivalent Angular fundamentals.

## Goal

Turn the catalogue's add action into a reactive basket using Angular Signals and focused feature components.

## Learning outcomes

- Model writable and derived state with `signal` and `computed`.
- Use signal-based component inputs and outputs.
- Share basket behavior through a focused feature service.
- Explain when `linkedSignal` or `effect` is appropriate and when it is not.
- Keep presentation components small and state ownership explicit.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — Phase 1 catalogue.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — reactive basket with add, remove, quantity, and total behavior.

## Tasks and acceptance criteria

Add a basket feature with typed line items, quantity updates, removal, and a derived total. The count and total update immediately, empty state is accessible, and component templates do not own business rules. Build and tests pass.

## Learning resources

- [Angular Signals](https://angular.dev/guide/signals)
- [Linked signals](https://angular.dev/guide/signals/linked-signal)
- [Angular University course catalog](https://angular-university.io/) — search for Angular Signals.

Run `npm install`, `npm start`, `npm run build`, and `npm test` in either project directory.
