# watch-party/
> L2 | Parent: ../AGENTS.md

Member list

index.html: Semantic watch-party markup, Caylent/CxPortal identity, and the single active video element.
styles.css: Responsive cinematic layout, Caylent-aligned brand tokens, typography, and motion.
app.js: Six-item playlist state, media switching, auto-advance, fullscreen, and keyboard controls.
posters/: Three optimized module title frames used as player and card artwork.
videos/: Three business-scenario and three training MP4 masters, H.264/AAC at 1080p.

Architecture: one active `<video>` element prevents six large masters from loading simultaneously; JavaScript swaps relative sources and posters while preserving native media controls.

Validation: every path must resolve over HTTP, all videos must retain exact stream duration, and the page must remain usable at 1440×900 and 390×844.

Change log:
- 2026-07-23: Created the curated watch-party module and separated markup, presentation, and behavior.
- 2026-07-23: Replaced legacy corporate attribution with Caylent while preserving CxPortal product naming.
- 2026-07-23: Replaced all six media files with accepted Caylent masters and rebuilt the three posters from those masters.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
