# Phase 5 Tasks

Start from [`src/01. StartProject`](./src/01.%20StartProject/) and compare with `src/02. EndProject`.

1. Verify backend image availability, API health endpoints, and OpenAPI documents.
2. Copy the reviewed delivery contract from `Pezzza-Mock-Delivery-Service/openapi/delivery-api.yaml` into this phase and record its upstream revision.
3. Add a deterministic OpenAPI Generator `typescript-angular` script using the checked-in delivery contract; do not hand-copy DTOs.
4. Configure Angular HTTP, local proxy, and environment-specific base URLs.
5. Run the published mock delivery image for integration tests; keep the Angular build independent of its .NET source.
6. Replace local catalogue/order operations with generated clients where verified Pezza contracts exist.
7. Test HTTP success and failure behavior; document unavailable dependencies explicitly.
