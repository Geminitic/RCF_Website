@echo off
echo Cleaning node_modules cache...
npm cache clean --force

echo Rebuilding project...
npm run build

echo Done!
