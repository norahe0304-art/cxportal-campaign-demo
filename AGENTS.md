# CxPortal Demo Library

Static HTML + bundled Vite assets + self-hosted H.264 video

<directory>
assets/ - Compiled interactive-demo application assets.
demo/ - Standalone interactive product-demo routes.
fonts/ - Self-hosted Mona Sans family.
images/ - Shared brand imagery.
watch-party/ - Curated six-film video experience for live group viewing.
</directory>

<config>
index.html - Interactive-demo library entry and watch-party launch point.
404.html - GitHub Pages route fallback.
.nojekyll - Serves compiled assets without Jekyll processing.
caylent-logo-light.svg - Canonical Caylent wordmark used by the private watch-party shell and demo-library wrapper.
</config>

Architecture decision: preserve the compiled interactive library and add the watch party as an isolated static route with relative assets.

Development rule: company product source remains read-only; this repository contains only sanitized demo artifacts.

Change log: 2026-07-23 - Added the three-module watch-party video library.
Change log: 2026-07-23 - Aligned the private library shell and six curated films with Caylent corporate branding while preserving CxPortal/CxCentral product naming.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
