#!/bin/sh
# Replaces Vercel Cron on cPanel. Usage: sh cron.sh <job-name>
# e.g. sh cron.sh books-sync  ->  GET https://batteriq.com/api/cron/books-sync
# Reads CRON_SECRET from ~/batteriq-settings.env so the secret never appears
# in the cPanel cron command.
DIR="$(cd "$(dirname "$0")" && pwd)"
SECRET="$(grep '^CRON_SECRET=' "$DIR/../batteriq-settings.env" | head -1 | cut -d= -f2- | tr -d '"\r')"
curl -fsS -m 120 -H "Authorization: Bearer $SECRET" "https://batteriq.com/api/cron/$1" >/dev/null 2>&1
