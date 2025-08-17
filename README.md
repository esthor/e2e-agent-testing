# E2E Agent Testing Baseline

This repository contains a minimal, opinionated end‑to‑end (E2E) testing setup using Playwright + TypeScript, managed with pnpm.

## Getting Started

- Prerequisites: Node 22+ and pnpm 10+
- Install dependencies and Playwright browsers:

```
pnpm install
pnpm run browsers:install
```

- Run tests headless:

```
pnpm test:e2e
```

- Run in headed mode (Chromium):

```
pnpm test:headed
```

- Open the HTML report (after a run):

```
pnpm test:report
```

## CI

- GitHub Actions workflow runs `pnpm run test:ci` with a GitHub reporter

## Project Structure

- `tests/`: Playwright test specs
- `playwright.config.ts`: Playwright configuration
- `.github/workflows/playwright.yml`: CI workflow to run E2E tests on pushes/PRs

## Notes

- This project uses Prettier and ESLint with TypeScript rules
- Artifacts (reports, videos, traces, screenshots) are ignored by git per `.gitignore`

## Troubleshooting

- If browsers are missing, run `pnpm run browsers:install`
- If `--with-deps` fails on your local OS, use `pnpm run browsers:install:local`
- On Linux, Playwright may need system packages; the `--with-deps` flag installs them automatically in CI
