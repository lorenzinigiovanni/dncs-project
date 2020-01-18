#!/bin/bash
#
# build.sh
#

echo "*** Build minimal test images."
# docker image rm brokermqtt controller
docker build -t brokermqtt -f ./Dockerfile.brokermqtt .
docker build -t controller -f ./Dockerfile.controller .
docker build -t txrx -f ./Dockerfile.txrx .
docker image prune --force
