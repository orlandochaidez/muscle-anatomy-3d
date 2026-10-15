# Muscle Anatomy 3D — build

Phase 1 of the iMuscle-style web app: spinnable/zoomable 3D body, tap a muscle for stretches + workouts (text).

## Files
- `index.html` — the viewer (Three.js via CDN import map)
- `muscles-data.js` — per-muscle info: function, stretches, workouts (text only, phase 1)
- `muscles.glb` — 22 named surface-muscle meshes (~1.35 MB)

## Run locally
`python3 -m http.server` in this dir, then open http://localhost:8000/

## Attribution (required — keep in app footer)
3D anatomy: Z-Anatomy (CC BY-SA 4.0), derived from BodyParts3D © The Database Center for Life Science.
The `muscles.glb` model asset stays under CC BY-SA 4.0 (share-alike applies to the model file).

## GitHub notes
Whole app is ~1.4 MB — far under GitHub's limits (100 MB per file hard cap, ~1 GB repo soft cap, ~1 GB GitHub Pages cap). Safe to push as-is.

## Phase 2 (later)
Short animations of stretches/exercises per muscle.
