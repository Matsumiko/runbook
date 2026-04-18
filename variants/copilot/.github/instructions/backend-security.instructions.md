---
applyTo: "**/api/**,**/server/**,**/auth/**,**/admin/**,**/billing/**,**/payments/**,**/webhooks/**"
---

- Read `BACKEND-SECURITY-CHECKLIST.md` before shipping sensitive backend work.
- Consider auth boundaries, validation, idempotency, retries, logging, and rollback.
- Do not ship happy-path-only implementations for security-sensitive surfaces.
- State residual risk and verification performed.
