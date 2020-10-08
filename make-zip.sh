#!/bin/sh -ex

# Ensure that eslint passes.
./eslint.sh

rm -f squarespace-escape-suppressor.zip
cd src
zip ../squarespace-escape-suppressor.zip *.js *.json *.png *.html
cd ../
