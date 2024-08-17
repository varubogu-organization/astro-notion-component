#!/bin/bash
mkdir -p dist

cp -r src/* dist/
cp -r config/ dist/
cp -r doc/ dist/
cp .env.example dist/
cp package.json dist/
cp README.md dist/
cp README.ja.md dist/
cp LICENSE dist/

cd dist
npm publish --access=public