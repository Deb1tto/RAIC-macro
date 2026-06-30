# RAIC Macro Unit 1

Interactive AP Macroeconomics Unit 1 prototype.

## Run Locally

Open `index.html` directly, or run:

```bash
npm run start
```

Then visit:

```text
http://localhost:5173/
```

## Structure

- `index.html` is the static app entry.
- `src/app.js` renders the interactive Unit 1 labs and steps.
- `src/styles.css` contains the visual system.
- `src/data/macro-unit1.ts` keeps the typed config reference for future migration.
- `src/types.ts` defines the intended config types.

## Content Model

Unit 1 is organized as four labs:

- Lab 1: Measuring Output
- Lab 2: Measuring Prices
- Lab 3: Measuring Labor Market
- Lab 4: Business Cycle

Each lab contains step-based interactions using reusable composition, formula, and cycle chart patterns.

