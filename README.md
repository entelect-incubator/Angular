# Angular Incubator

Learn modern Angular by evolving one practical application: **Pezza Pizza Store**. Each phase has a starting project to work from and an end project to compare against, following the hands-on progression of the [Entelect .NET Incubator](https://github.com/entelect-incubator/.NET).

## What is Angular?

Angular is a TypeScript-based web framework for building applications with an integrated component model, dependency injection, routing, forms, and HTTP tooling. This incubator focuses on current Angular APIs rather than legacy module-first patterns.

## Why learn Angular?

Angular's integrated tools and conventions support maintainable applications at team scale. Learning its templates, dependency injection, signals, and routing gives developers a coherent toolkit for building real browser applications—not just isolated components.

## Pezza Pizza Store

The Pezza application grows with the learner: it begins as a local pizza catalogue, then gains a basket, customer checkout, API-backed orders, delivery tracking, and restaurant administration. Phase 1 needs only Node.js; backend containers and external contracts arrive when the relevant phase introduces integration.

## Learning path

| Phase | Topic | Estimated time |
|---|---|---:|
| [1](./Phase%201%20-%20Angular%20Fundamentals/README.md) | Angular Fundamentals | 3–5 hours |
| [2](./Phase%202%20-%20Signals%20and%20Component%20Architecture/README.md) | Signals and Component Architecture | 3–5 hours |
| [3](./Phase%203%20-%20Routing%20and%20Application%20Structure/README.md) | Routing and Application Structure | 3–5 hours |
| [4](./Phase%204%20-%20Forms%20and%20Validation/README.md) | Forms and Validation | 4–6 hours |
| [5](./Phase%205%20-%20HTTP%20and%20OpenAPI%20Integration/README.md) | HTTP and OpenAPI Integration | 5–8 hours |
| [6](./Phase%206%20-%20State%20Management%20and%20Reactive%20Design/README.md) | State Management and Reactive Design | 4–6 hours |
| [7](./Phase%207%20-%20Testing%20and%20Code%20Quality/README.md) | Testing and Code Quality | 4–6 hours |
| [8](./Phase%208%20-%20Security%20and%20Authentication/README.md) | Security and Authentication | 4–6 hours |
| [9](./Phase%209%20-%20Optimus%20UI%20and%20Advanced%20UX/README.md) | Optimus UI and Advanced UX | 4–6 hours |
| [10](./Phase%2010%20-%20Progressive%20Web%20Applications/README.md) | Progressive Web Applications | 3–5 hours |
| [11](./Phase%2011%20-%20Performance%20and%20Deployment/README.md) | Performance and Deployment | 4–6 hours |
| [12](./Phase%2012%20-%20AI-Assisted%20Angular%20Development/README.md) | AI-Assisted Angular Development | 3–5 hours |

Phase 1 is the first working slice. The remaining phases are scaffolded as learning guides and start/end project locations; their implementations will be added progressively rather than generated all at once.

## Technology baseline

- Angular 22 with standalone components and strict TypeScript
- TypeScript 6
- Node.js 24 LTS (Angular 22 requires Node `^24.15.0` or a supported 22.x/26.x release)
- Signals and zoneless change detection
- Angular Router, HttpClient, Signal Forms, and RxJS where they fit
- Tailwind CSS and [Optimus UI](https://optimus.openng.org/), introduced as the application grows
- Vitest and Playwright

See [Getting Started](./GETTING_STARTED.md) for prerequisites and [Architecture](./ARCHITECTURE.md) for the application boundaries and progression.

## Build, test, and lint

The repository is an npm workspace orchestrated by Nx. Run `npm ci` once from the root, then `npm run ci` to build and test each registered app and lint TypeScript with Oxlint. GitHub Actions runs the same command on pushes and pull requests. New runnable phase apps must be registered as npm workspaces and Nx projects to join CI.

## Recommended libraries and tools

- Angular Signals and built-in Router, Forms, and HttpClient
- [Optimus UI](https://optimus.openng.org/) and Tailwind CSS for the later design-system phase
- Zod for runtime validation at selected external-data boundaries
- OpenAPI Generator for API client generation
- Vitest and Playwright for automated testing

Dependencies are introduced in the phase where their purpose is taught; they are not all added to the Phase 1 app.

## Develop with AI

- [AI development guide](./DEVELOP_WITH_AI.md)
- [Quick reference](./AI_QUICK_REFERENCE.md)
- [Prompt examples](./AI_PROMPTING_EXAMPLES.md)
- [Repository agent instructions](./AGENTS.md)

AI should explain the concepts and trade-offs while you implement the exercises; compare your work with the end project after attempting each task.

## Learning resources

- [Angular documentation](https://angular.dev/)
- [Angular version compatibility](https://angular.dev/reference/versions)
- [Angular University course catalog](https://angular-university.io/)
- [Optimus UI documentation](https://optimus.openng.org/)
- [Entelect Incubator .NET](https://github.com/entelect-incubator/.NET)
- [Pezza Mock Delivery Service](https://github.com/entelect-incubator/Pezzza-Mock-Delivery-Service)

## Contributing

Keep the learning sequence practical and incremental. A phase should explain the goal, prerequisites, estimated effort, learning outcomes, tasks, validation commands, and its start/end projects. Avoid adding framework patterns or dependencies before the phase that teaches why they are useful.
