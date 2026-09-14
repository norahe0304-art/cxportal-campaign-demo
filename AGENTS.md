# CxPortal public demo artifact

This personal repository contains sanitized production artifacts only.

- index.html and demo/*/index.html: Existing route metadata with a shared module-entry loader.
- 404.html: Deep-link fallback; selects the correct application from the requested pathname.
- assets/: Immutable application bundles, fonts and styles; the hashed module-entry loader selects KM or the legacy application.
- Root image assets: Existing module artwork, preserved by the KM publication.
- .nojekyll: Enables static GitHub Pages delivery.

Knowledge Management uses the September 14 Caylent reskin. Campaign routes retain their separate accepted application. All other routes retain the previously published general application. Existing asset bytes are unchanged. Cross-boundary navigation reloads the document so the appropriate application and stylesheet are selected. Full copied source, private media, account data and credentials are excluded.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
