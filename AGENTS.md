# RAIC Macroeconomics Course Prototype

## Project Scope

This folder contains a lightweight AP Macroeconomics MVP for an interactive economics course site. It is intentionally built as a local, static prototype because the workspace did not contain an existing application repository or dependency manifest.

## Current Course Structure

- Build toward a full AP Macroeconomics course map with 6 units:
  - Unit 1: Basic Economic Concepts
  - Unit 2: Economic Indicators and the Business Cycle
  - Unit 3: National Income and Price Determination
  - Unit 4: Financial Sector
  - Unit 5: Long-Run Consequences of Stabilization Policies
  - Unit 6: Open Economy: International Trade and Finance
- Keep each unit organized as a small set of interactive labs, not many tiny topic pages.
- Unit 4 uses five integrated labs. Bank Balance Sheet and Money Multiplier are steps inside Banking and Money Expansion; Reserve Market is a step inside Monetary Policy.
- Unit 6 uses two integrated labs. Real Interest Rates and International Capital Flows is taught inside Foreign Exchange Market rather than through a separate entry.

## Implementation Progress

- Feedback integration: Phases 1-5 complete on `codex/feedback-integration`. Global navigation/formula rules, Unit 1/2 revisions, Unit 6 causal interactions, Unit 3-5 formula structure, and the integrated Reserve Market step are implemented.
- Course shell: complete. The app uses a 6-unit course map, unit pages, and lab pages.
- Full lab data: complete. All planned placeholders have been replaced with first-version interactive labs.
- Interactions: complete. Cards support whole-card keyboard entry; lab pages include same-unit navigation; sliders update locally; PPC drag is continuous; matching supports single and explicit multiple answers.
- Content alignment: complete. The app covers all 42 Fall 2026 CED Topics exactly once at the Lab mapping layer. Formulae appear once in the central workspace and use structured lines where needed.
- Visual QA: static responsive rules are implemented. This feedback pass intentionally uses code and structure checks without launching a local browser.
- Verification: run `npm run check`, `git diff --check`, and the runtime CED coverage check before release.

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
