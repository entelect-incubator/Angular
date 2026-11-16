# Agent Instructions

## Before changing code

1. Read the root README, the relevant phase README, and the affected start/end project.
2. Keep the requested work within that phase and preserve its learning objective.
3. Check installed package versions and current project patterns before adding a dependency or using an API.

## Angular conventions

- Use Angular 22 and TypeScript 6 with strict compiler settings.
- Prefer standalone components and explicit imports.
- Keep HTML templates and SCSS styles in separate files.
- Use signals for local synchronous state; use RxJS for streams and interop when it is a better fit.
- Put reusable behavior in focused services, not in templates or oversized components.
- Keep features cohesive; introduce abstractions only when they solve a demonstrated problem.
- Validate data at external boundaries and use generated OpenAPI clients for API contracts.
- Preserve accessible semantic HTML and responsive behavior.
- Do not use `any`, unnecessary effects, duplicate generated DTOs, or UI route guards as backend security.

## Learning and validation

- Explain the relevant Angular concept and meaningful trade-offs in phase documentation.
- Prefer exercises that the learner can complete; do not replace the start project with the end solution.
- Run the smallest relevant build and test commands after changes; report any checks that could not be run.
- Do not assume Optimus UI APIs: consult its current docs/package metadata and match its Angular peer dependencies.
