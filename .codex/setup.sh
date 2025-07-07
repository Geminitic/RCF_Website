#!/usr/bin/env bash
set -euo pipefail

# Install Node dependencies using npm.
# Prefer reproducible installs with npm ci if a lockfile is present.

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi
