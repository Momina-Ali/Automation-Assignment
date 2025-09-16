# Copilot Instructions for AI Agents

## Project Overview
- This repository contains automated UI and API tests using Playwright and Node.js.
- UI tests target the SauceDemo web application; API tests target the Reqres API.
- Test code is organized by type: `tests/ui` for UI, `tests/api` for API.
- Page Object Model is used for UI: see `pages/` for reusable page abstractions.

## Key Workflows
- **Install dependencies:**
  ```bash
  npm install
  ```
- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **Run only UI tests:**
  ```bash
  npx playwright test tests/ui
  ```
- **Run only API tests:**
  - Requires `REQRES_API_KEY` environment variable.
  - Example (PowerShell):
    ```powershell
    $env:REQRES_API_KEY="reqres-free-v1"; npx playwright test tests/api
    ```

## Project Structure
- `pages/`: Page Object classes for UI automation (e.g., `LoginPage.js`, `ProductsPage.js`).
- `tests/ui/`: UI test specs (e.g., `login.spec.js`, `purchase.spec.js`).
- `tests/api/`: API test specs (e.g., `reqres.spec.js`).
- `playwright.config.js`: Playwright configuration (test runner, browser settings, etc).
- `playwright-report/`, `test-results/`: Output directories for test reports and results.

## Patterns & Conventions
- **UI tests** use Playwright's test runner and Page Object Model. Each test imports relevant page objects from `pages/`.
- **API tests** use Playwright's APIRequestContext and require an API key via environment variable.
- Test case documentation and scenario breakdowns are maintained in the `README.md`.
- Use clear, descriptive test names and group related scenarios in a single spec file.

## Integration & Reporting
- Test results and HTML reports are generated in `playwright-report/` after each run.
- No custom build steps; all workflows are npm-based.
- No persistent test data or database integration; all tests are stateless.

## Examples
- To add a new UI test: create a new spec in `tests/ui/`, use page objects from `pages/`.
- To add a new API test: add to `tests/api/`, ensure API key is set in environment.

## Additional Notes
- All dependencies are managed via `package.json`.
- For troubleshooting, consult Playwright documentation or review the `README.md` for scenario details.
