#!/bin/sh
# Run by .cpanel.yml from the clean clone (~/batteriq-build) when
# "Deploy HEAD Commit" is clicked in cPanel > Git Version Control.
#
# The site runs from ~/batteriq-live, not from the clone: the running app
# rewrites cached pages on disk, which would leave a clone too dirty to update.
#
# Order matters. The running app shows up as a "next-server" process and
# cPanel's Restart button does not reliably replace it. While it is alive it
# also keeps rewriting cached pages with the OLD build's HTML. So: sync the
# bulky parts first, stop the old process, then copy the compiled app, then
# stop once more in case a request started the app mid-copy. The web server
# starts a fresh process on the next request.
LIVE=/home1/batteriq/batteriq-live
WEB=/home1/batteriq/public_html
LOG="$LIVE/deploy.log"
ME="$(id -u)"

stop_app() {
  if pkill -u "$ME" -f "next-server"; then echo "stopped running app ($1)"; else echo "no running app found ($1)"; fi
}

mkdir -p "$LIVE/tmp" "$LIVE/site" "$WEB/_next"
{
  echo "=== deploy started $(date)"
  echo "build in clone: $(cat site/.next/BUILD_ID 2>/dev/null)"
  echo "build live before: $(cat "$LIVE/site/.next/BUILD_ID" 2>/dev/null)"

  # cp -u only copies files newer than what is already there.
  cp -Ru site/node_modules "$LIVE/site/" && echo "dependencies synced"
  cp -Ru site/public "$LIVE/site/" && echo "app public files synced"

  stop_app "before copy"
  cp -R app.js cron.sh package.json "$LIVE/" && echo "startup files copied"
  cp -R site/.next site/server.js site/package.json "$LIVE/site/" && echo "compiled app copied $(date)"
  touch "$LIVE/tmp/restart.txt"
  stop_app "after copy"
  echo "build live after: $(cat "$LIVE/site/.next/BUILD_ID" 2>/dev/null)"

  # Static files for the web server. Old folders can carry odd permissions.
  chmod -R u+rwX "$WEB/_next" 2>/dev/null
  cp -Ru site/.next/static "$WEB/_next/" && echo "static chunks copied"
  cp -Ru site/public/. "$WEB/" && echo "public files copied"

  # Wake the app so the first visitor does not pay for the cold start.
  curl -s -o /dev/null -m 60 https://batteriq.com/ && echo "site warmed"
  echo "=== deploy finished $(date)"
} >> "$LOG" 2>&1
