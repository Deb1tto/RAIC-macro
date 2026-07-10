# RAIC Macroeconomics Course Prototype

## Project Scope

This folder contains a lightweight AP Macroeconomics MVP for an interactive economics course site. It is intentionally built as a local, static prototype because the workspace did not contain an existing application repository or dependency manifest.

## Current Planning Direction

- Build toward a full AP Macroeconomics course map with 6 units:
  - Unit 1: Basic Economic Concepts
  - Unit 2: Economic Indicators and the Business Cycle
  - Unit 3: National Income and Price Determination
  - Unit 4: Financial Sector
  - Unit 5: Long-Run Consequences of Stabilization Policies
  - Unit 6: Open Economy: International Trade and Finance
- Keep each unit organized as a small set of interactive labs, not many tiny topic pages.
- Unit 4 includes these labs:
  - Bank Balance Sheet
  - Money Multiplier
  - Reserve Market
  - Money Market
  - Loanable Funds
  - Monetary Policy

## Implementation Progress

- Course shell: complete. The app uses a 6-unit course map, unit pages, and lab pages.
- Full lab data: complete. All planned placeholders have been replaced with first-version interactive labs.
- Interactions: complete. Unit and lab cards are whole-card clickable with keyboard entry; homepage units remember accordion state; lab pages include a same-unit lab sidebar for direct switching; sliders update locally; PPC point drag remains smooth; formula and policy sections can be toggled.
- Content alignment: complete. Unit 1 scarcity/economic systems use colored classification and drag-to-connect interactions; Unit 2 GDP now uses the same concept matching format; PPC, comparative advantage, CPI, labor, business cycle, BOP, and forex have been adjusted against teacher feedback; forex determinants link to the market shift; multiplier uses a comparison format.
- Visual QA: limited. CSS and responsive states are implemented; automated browser screenshot QA is blocked because the local Playwright browser binary is not installed.
- Verification: complete. `npm run check` passes, and the static server returns HTTP 200 on the local port.

## Development Rules

- Do not add backend, login, database, or quiz systems.
- Keep the interaction model aligned with the referenced microeconomics site:
  - left-side controls
  - central SVG visual
  - bottom feedback cards
  - concept explanation panel
  - config-driven lesson data
- Prefer reusable lesson components over one-off pages.
- Keep charts as hand-authored SVG rather than adding chart libraries.
- Keep the UI calm, classroom-oriented, and close to the existing microeconomics visual style.
- Sliders should drag smoothly and update the visual continuously. Avoid re-rendering the control being dragged on every `input` event.

## Runtime

Open `index.html` directly in a browser, or serve the folder with any static server.

No package install is required for the current prototype.
