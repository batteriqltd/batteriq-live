// Startup file for cPanel "Setup Node.js App" (Phusion Passenger).
//
// Layout on the server:
//   ~/batteriq-live/app.js          <- this file (application startup file)
//   ~/batteriq-live/site/           <- Next.js standalone build (server.js, .next, public)
//   ~/batteriq-settings.env         <- secrets, uploaded by hand, never in git
//   ~/batteriq/.env                 <- settings of the previous deployment (fallback)
//
// Settings are read from the files below, first match wins. Blank and
// placeholder values are skipped so a real value in a later file still applies.
const fs = require('fs')
const path = require('path')

const envFiles = [
  path.join(__dirname, '..', 'batteriq-settings.env'),
  path.join(__dirname, '..', 'batteriq-old.env'),
  path.join(__dirname, '..', 'batteriq', '.env'),
]

for (const file of envFiles) {
  if (!fs.existsSync(file)) continue
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/)
    if (!m) continue
    const value = m[2].replace(/^(["'])(.*)\1$/, '$2')
    if (value === '' || /placeholder|replace_me/i.test(value)) continue
    if (process.env[m[1]] === undefined) process.env[m[1]] = value
  }
}

// The invoice route constructs its email client at load time and throws on a
// missing key; keep the site up even if no real key has been supplied yet.
if (!process.env.RESEND_API_KEY) process.env.RESEND_API_KEY = 're_missing_key'

process.env.NODE_ENV = 'production'
process.env.HOSTNAME = '127.0.0.1'

require('./site/server.js')
