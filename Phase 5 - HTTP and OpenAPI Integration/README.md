# Pezza - Phase 5: HTTP and OpenAPI Integration

Requires Node.js 24 LTS, npm, and Docker Desktop. **Estimated time:** 5–8 hours — **Difficulty:** ★★★★☆  
**Prerequisites:** Phase 4 or equivalent Angular, routing, and form experience.

## Goal

Replace local sample data with verified Pezza and mock-delivery API contracts and generated Angular clients.

## Learning outcomes

- Configure `HttpClient`, interceptors, and request error handling.
- Read and validate an OpenAPI contract before generating a client.
- Generate, configure, and consume `typescript-angular` clients.
- Keep API transport concerns outside UI components.
- Represent loading, error, retry, and empty states.

## Start and end projects

- **Start:** [`src/01. StartProject`](./src/01.%20StartProject/) — locally backed Pezza application.
- **End:** [`src/02. EndProject`](./src/02.%20EndProject/) — API-backed catalogue and order submission.

## Tasks and acceptance criteria

Use the existing [Pezzza Mock Delivery Service](https://github.com/entelect-incubator/Pezzza-Mock-Delivery-Service) as the external delivery provider. Its checked-in OpenAPI 3 contract is `openapi/delivery-api.yaml`; copy a reviewed snapshot into this phase's `openapi/` folder and record the upstream revision so this Angular repo remains independently cloneable. Generate the `typescript-angular` delivery client from that checked-in contract; do not hand-maintain delivery DTOs. Run the existing published container image for local integration and health-check it at `http://localhost:8081/health`. Configure the local Angular proxy for the service's `/api/v1` routes.

Before integrating the main Pezza API, verify its current OpenAPI contract and published image separately. Document unavailable APIs rather than guessing endpoints. Add reproducible generation scripts and tests for HTTP success/error behavior.

The mock service already targets .NET 10 and publishes a .NET 10 runtime image. The Angular client generator consumes its OpenAPI document; it does not require the Angular repository to build or upgrade the service's .NET source.

## Learning resources

- [Making HTTP requests](https://angular.dev/guide/http)
- [HTTP interceptors](https://angular.dev/guide/http/interceptors)
- [OpenAPI Generator: TypeScript Angular](https://openapi-generator.tech/docs/generators/typescript-angular/)
- [Pezza Mock Delivery Service](https://github.com/entelect-incubator/Pezzza-Mock-Delivery-Service)
- [Angular University course catalog](https://angular-university.io/) — search for Angular HTTP/RxJS.

Run `npm ci` from the repository root, then `npm start`, `npm run build:all`, and `npm run test:all`. The generator and its scripts will be added to this phase's end project when the API integration is implemented.
