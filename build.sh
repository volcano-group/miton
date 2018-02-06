#!/bin/bash

mv ./build/404/index.html ./build/404.html

mv ./build/apartments/* ./build

rm -rf ./build/404/ ./build/apartments ./build/certs ./build/workbox-config.js
