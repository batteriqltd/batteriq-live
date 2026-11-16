#!/bin/sh
# Run by .cpanel.yml from the clean clone (~/batteriq-build) when
# "Deploy HEAD Commit" is clicked in cPanel > Git Version Control.
#
# The site runs from ~/batteriq-live, not from the clone: the running app
# rewrites cached pages on disk, which would leave a clone too dirty to update.
#
# cp -Ru only copies files that are newer than what is already there, so after
# the first run a deploy touches just the files that changed. The app is
# restarted as soon as its own files are in place; the static copies for the
# web server follow and do not block the site coming back.
LIVE=/home1/batteriq/batteriq-live
WEB=/home1/batteriq/public_html
LOG="$LIVE/deploy.log"

mkdir -p "$LIVE/tmp" "$WEB/_next"
{
  echo "=== deploy started $(date)"
  cp -Ru site app.js cron.sh package.json "$LIVE/" && echo "app files copied $(date)"
  touch "$LIVE/tmp/restart.txt" && echo "restart requested $(date)"
  cp -Ru site/.next/static "$WEB/_next/" && echo "static chunks copied $(date)"
  cp -Ru site/public/. "$WEB/" && echo "public files copied $(date)"
  echo "=== deploy finished $(date)"
} >> "$LOG" 2>&1
