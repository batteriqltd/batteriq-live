#!/bin/sh
# Run by .cpanel.yml from the clean clone (~/batteriq-build) when
# "Deploy HEAD Commit" is clicked in cPanel > Git Version Control.
#
# The site runs from ~/batteriq-live, not from the clone: the running app
# rewrites cached pages on disk, which would leave a clone too dirty to update.
#
# The compiled app (.next, server.js) is always copied in full so a deploy can
# never leave old code behind. The bulky, rarely-changing parts (node_modules,
# public) use cp -u, which only copies files newer than what is already there.
# The app is restarted as soon as its own files are in place; the static copies
# for the web server follow and do not block the site coming back.
LIVE=/home1/batteriq/batteriq-live
WEB=/home1/batteriq/public_html
LOG="$LIVE/deploy.log"

mkdir -p "$LIVE/tmp" "$LIVE/site" "$WEB/_next"
{
  echo "=== deploy started $(date)"
  echo "build in clone: $(cat site/.next/BUILD_ID 2>/dev/null)"
  echo "build live before: $(cat "$LIVE/site/.next/BUILD_ID" 2>/dev/null)"

  cp -R app.js cron.sh package.json "$LIVE/" && echo "startup files copied"
  cp -R site/.next site/server.js site/package.json "$LIVE/site/" && echo "compiled app copied $(date)"
  cp -Ru site/node_modules "$LIVE/site/" && echo "dependencies synced"
  cp -Ru site/public "$LIVE/site/" && echo "app public files synced"
  echo "build live after: $(cat "$LIVE/site/.next/BUILD_ID" 2>/dev/null)"

  # Restart: Passenger watches tmp/restart.txt; also stop the running process
  # so the next request is guaranteed to start the new build.
  touch "$LIVE/tmp/restart.txt"
  pkill -f "Passenger NodeApp: $LIVE" && echo "old app process stopped" || echo "no running app process found (restart.txt will apply)"
  echo "restart requested $(date)"

  # Static files for the web server. Old folders can carry odd permissions.
  chmod -R u+rwX "$WEB/_next" 2>/dev/null
  cp -Ru site/.next/static "$WEB/_next/" && echo "static chunks copied"
  cp -Ru site/public/. "$WEB/" && echo "public files copied"
  echo "=== deploy finished $(date)"
} >> "$LOG" 2>&1
