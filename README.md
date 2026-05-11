# Playwright-framework-2025

A test project for Playwright test framework skeleton.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in the required values in `.env`.

## Running Tests

- Run all tests: `npm test`
- Run UI tests: `npm run test:ui`
- Run API tests: `npm run test:api`
- Run tests in headed mode: `npm run test:headed`
- View test report: `npm run report`

## Project Structure

- `pages/`: Page Object Model classes
- `fixtures/`: Test fixtures and extensions
- `tests/UI/`: UI tests
- `tests/API/`: API tests
- `playwright.config.ts`: Playwright configuration

## CI/CD

Tests are configured to run in parallel locally and serially on CI with retries.
