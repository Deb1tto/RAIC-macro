# RAIC AP Macroeconomics

Interactive AP Macroeconomics course prototype aligned to the College Board
**AP Macroeconomics Course and Exam Description, Effective Fall 2026**.

## Run Locally

Open `index.html` directly, or run:

```bash
npm run start
```

Then visit:

```text
http://localhost:5173/
```

## Course Architecture

- 6 official units
- 42 official CED topics
- Topic-to-lab coverage shown directly on the course map and unit pages
- A small number of integrated labs per unit rather than one page per topic
- Official exam weighting and suggested class periods from the 2026 CED

See `AP_MACRO_KNOWLEDGE_ARCHITECTURE.md` for the complete topic-to-lab map.

## Structure

- `index.html`: static app entry
- `src/app.js`: course map, CED topic catalog, lab configuration, and interactions
- `src/styles.css`: visual system and responsive states
- `src/types.ts`: intended typed configuration model
- `src/data/macro-unit1.ts`: typed reference configuration retained for migration
