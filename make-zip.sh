#!/bin/sh -ex

# Ensure that eslint passes.
./eslint.sh
# Ensure that addons-linter passes.
addons-linter src/

rm -f squarespace-escape-suppressor.zip
cd src
zip ../squarespace-escape-suppressor.zip *.js *.json *.png *.html
cd ../
