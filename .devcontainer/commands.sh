#!/bin/sh
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

npm install -g npm-check-updates
npm install
