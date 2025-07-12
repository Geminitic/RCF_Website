# Rhizome Community Foundation Website

This repository contains the source code for the Rhizome Community Foundation website. The project is based on the Bolt Vite React TypeScript template.

**Note:** This website is an experimental release and content may change frequently.

Static resources for the Knowledge Hub now live in `src/knowledge-hub` and are copied into the final build using `vite-plugin-static-copy`.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
   Ensure you run this command in an environment with internet access so that packages like `@eslint/js` can be installed.

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Lint the project**
   ```bash
   npm run lint
   ```
   If linting fails with a `Cannot find package '@eslint/js'` error, make sure the dependencies have been installed correctly.

## Deployment Notes

- This repository now includes a `_headers` file that sets basic security headers processed by Netlify during deployment.
- To deploy on Netlify, create a new site pointing to this repository and enable SSL in the Netlify dashboard. If Netlify refuses to provision SSL, verify that your domain DNS records point to Netlify and that no conflicting certificates exist.
- The codebase does not currently integrate with Supabase or Neon. Any references to those services are likely from previous experiments or external configurations not present in this repository.


## Server API

The `server/` folder contains an Express based scraping API that powers the calendar. To run it locally:

```bash
cp .env.example .env   # adjust values if needed
npm run start:server
```

The server exposes the following endpoints:

- `GET /api/events` – scrape or return cached events
- `GET /api/events/featured` – high priority events
- `GET /api/events/deadlines` – events with deadlines
- `GET /api/health` – basic health check

### Environment Variables

- `PORT` – port to run the API on (default: 3001)
- `CACHE_FILE` – path to the events cache file
- `CACHE_DURATION` – how long to keep the cache in milliseconds
- `CONCURRENCY` – number of pages to scrape in parallel
- `ORG_CONCURRENCY` – number of organization sites to scrape concurrently

## Tests

Basic tests for the API can be run with:

```bash
npm test
```

## Docker

A `Dockerfile` is provided to build a production image:

```bash
docker build -t rcf-website .
docker run -p 3001:3001 rcf-website
```

## Continuous Integration

GitHub Actions runs linting, tests and the scraper on a daily schedule. See `.github/workflows/node-ci.yml` for details.

