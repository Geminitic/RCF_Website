# Rhizome Community Foundation Website

This repository contains the source code for the Rhizome Community Foundation website. The project is based on the Bolt Vite React TypeScript template.

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

- The repository does not include Netlify-specific configuration files. To deploy on Netlify, create a new site pointing to this repository and enable SSL in the Netlify dashboard. If Netlify refuses to provision SSL, verify that your domain DNS records point to Netlify and that no conflicting certificates exist.
- The codebase does not currently integrate with Supabase or Neon. Any references to those services are likely from previous experiments or external configurations not present in this repository.

