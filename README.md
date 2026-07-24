# RAIC AP Macroeconomics

An interactive AP Macroeconomics course covering the six units and 42 topics
in the College Board Course and Exam Description effective Fall 2026.

**Live app:** [raic-macro.vercel.app](https://raic-macro.vercel.app)

## What It Includes

- Integrated labs for all six AP Macroeconomics units
- Interactive PPC, AD-AS, financial-market, Phillips Curve, and foreign-exchange diagrams
- Continuous sliders and draggable SVG points
- Single-answer and multiple-answer concept matching
- Direct navigation between labs in the same unit
- Topic coverage, exam weighting, and suggested class periods

The course groups related topics into larger labs instead of creating one page
for every topic. See [docs/course-architecture.md](docs/course-architecture.md)
for the complete topic-to-lab map.

## Technology

The app is a dependency-free static site built with HTML, CSS, and JavaScript.
Charts are hand-authored SVG components, and lesson content is configuration
driven. Vercel deploys the production site from `main`.

## Local Development

```bash
npm run start
```

Open `http://localhost:5173`.

## Verification

```bash
npm run check
git diff --check
```

The runtime also validates that all 42 official topics are mapped exactly once.

## Repository Structure

- `index.html`: application entry point
- `src/app.js`: course data, components, and interactions
- `src/styles.css`: visual system and responsive layouts
- `src/types.ts`: configuration type definitions
- `docs/course-architecture.md`: public curriculum map
- `vercel.json`: production routing configuration
