# CxPortal public demo artifact

This personal repository contains sanitized production artifacts only.

- index.html and demo/*/index.html: Existing route metadata with a shared module-entry loader.
- 404.html: Deep-link fallback; selects the correct application from the requested pathname.
- assets/: Immutable application bundles, fonts and styles; the hashed module-entry loader selects the reviewed KM or Flow Analyzer application, the accepted Campaign application, or the legacy general application.
- Root image assets: Existing module artwork, preserved by the KM publication.
- .nojekyll: Enables static GitHub Pages delivery.

Knowledge Management uses the September 14 Caylent reskin. Campaign routes retain their separate accepted application. Flow Analyzer retains its existing product UI with reviewed guide headings and restart-only completion. Other routes retain the previously published general application. Existing asset bytes are unchanged. Cross-boundary navigation reloads the document so the appropriate application and stylesheet are selected. Full copied source, private media, account data and credentials are excluded.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md

- 2026-09-14: KM guide positioning protects complete product dialogs at every step, including Add New Article selectors and Continue. Short viewports reserve a separate guide region. FA, Campaign and general application entries remain unchanged.

- 2026-09-14: KM guided input prevents unintended picker dismissal, supports direct highlighted-target activation, clears missing targets, and reconstructs the picker on Back. Contours respect table clipping; short-window lists remain scrollable. FA, Campaign and general entry mappings are byte-identical to the previous release.
