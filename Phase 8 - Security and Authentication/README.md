# Pezza - Phase 8: Security and Authentication

Requires Node.js 24 LTS, npm, and the selected identity/API configuration. **Estimated time:** 4–6 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 7 or equivalent tested application flows.

## Goal

Integrate customer and administrator identity while teaching the limits of frontend security controls.

## Learning outcomes

- Understand the chosen OIDC/OAuth flow and browser security trade-offs.
- Configure authentication integration without embedding secrets in the frontend.
- Attach credentials through the appropriate HTTP integration.
- Use functional guards for navigation and role-aware UI.
- Explain why backend authorization remains authoritative.
- Consider XSS, CSRF, redirects, and secure token handling.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — tested Pezza workflows without identity.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — customer/admin identity integration and UI permissions.

## Tasks and acceptance criteria

Document the identity provider and flows actually supported by the backend before implementing. Restrict admin affordances in the UI, handle unauthenticated/error states, and verify authorization is enforced server-side. Do not invent identity endpoints or put credentials in source.

## Learning resources

- [Angular security](https://angular.dev/best-practices/security)
- [Angular route guards](https://angular.dev/guide/routing/route-guards)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

Run `npm install`, `npm run build`, and `npm test` in either project directory.
