#!/bin/sh

echo "Building ashleyndavid.com"
yarn build && yarn global add serve
wait
echo
echo "Run ashleyndavid.com and take snapshots"
serve -s build -l 3000 &
PID=$!

yarn percy &&
  kill -INT $PID

exit 0
