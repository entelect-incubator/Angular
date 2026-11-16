# Develop with AI

AI can help explain Angular concepts, suggest implementation options, and review tests. Use it as a learning partner: attempt each task, ask for a focused explanation, inspect the proposed diff, and run the project's checks yourself.

## A safe workflow

1. Give the agent the phase README and ask it to inspect the start project before proposing edits.
2. Ask for one bounded task at a time; require an explanation of the Angular concepts used.
3. Review component boundaries, templates, types, accessibility, and error behavior.
4. Compare the implementation with the phase end project only after attempting the work.
5. Run `npm run build` and `npm test`; review unexpected dependency or configuration changes.

## Angular-specific guidance

- Use the installed Angular version's documentation; do not assume patterns from old tutorials apply.
- Prefer signals for synchronous UI state and avoid effects when a computed value or event handler is sufficient.
- Keep HTTP and business behavior out of components.
- Use generated OpenAPI clients at API boundaries; do not recreate their DTOs by hand.
- Confirm Optimus UI components, theming, and peer compatibility in the current official docs before using them.
- Treat AI-generated code as untrusted until reviewed, tested, and understood.

See [AI Quick Reference](./AI_QUICK_REFERENCE.md) and [Prompting Examples](./AI_PROMPTING_EXAMPLES.md).
