# AI Quick Reference

## Good implementation prompts include

- The phase goal and its acceptance criteria
- Relevant source files and existing conventions
- A narrow, observable change
- Tests and documentation expected
- A request to explain choices and identify assumptions

## Angular reminders

- Standalone components; explicit imports
- External template and stylesheet files
- Strict types; avoid `any`
- `signal` for writable local state; `computed` for derived state
- Feature services for shared behavior; no HTTP calls directly in components
- Use generated API types rather than hand-written duplicates
- Effects only for genuine side effects
- Semantic HTML, keyboard access, and visible focus
- Route guards are not authorization

## Before accepting generated code

1. Does it solve only the requested phase task?
2. Does it follow this project's installed Angular APIs and package versions?
3. Are error, loading, empty, and accessibility states considered?
4. Are tests meaningful and passing?
5. Did it add dependencies, abstractions, or unrelated files without need?
