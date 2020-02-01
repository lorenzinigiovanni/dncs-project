#!/bin/bash
#
# build.sh
#

echo "*** Build minimal test images."
# docker image rm brokermqtt controller
docker build -t mynodejs -f ./Dockerfile.mynodejs .
docker build -t brokermqtt -f ./Dockerfile.brokermqtt .
docker build -t valvola -f ./Dockerfile.valvola .
docker image prune --force
