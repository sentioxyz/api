#!/bin/bash

set -e

VERSION=$1

pnpm json -I -f package.json -e "this.version=\"${VERSION}\""
