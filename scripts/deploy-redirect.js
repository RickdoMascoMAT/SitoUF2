// Creates simple redirect pages in the dist folder so
// https://<user>.github.io/SitoUF2/ forwards to the user site root.
// Usage: node scripts/deploy-redirect.js

import fs from 'fs'
import path from 'path'

const DIST = path.resolve(process.cwd(), 'dist')
const TARGET = process.env.REDIRECT_TARGET || 'https://rickdomascomat.github.io/'

const content = (url) => `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0;url=${url}">
  <meta name="robots" content="noindex">
  <title>Redirecting…</title>
  <script>location.replace('${url}');</script>
</head>
<body>
  Redirecting to <a href="${url}">${url}</a>
</body>
</html>`

try {
  if (!fs.existsSync(DIST)) {
    console.error('dist folder not found. Run the build first (npm run build).')
    process.exit(1)
  }

  // Write index.html
  fs.writeFileSync(path.join(DIST, 'index.html'), content(TARGET), 'utf8')
  console.log('Wrote dist/index.html -> redirect to', TARGET)

  // Write 404.html as fallback for GitHub Pages SPA 404 behavior
  fs.writeFileSync(path.join(DIST, '404.html'), content(TARGET), 'utf8')
  console.log('Wrote dist/404.html -> redirect to', TARGET)

  process.exit(0)
} catch (err) {
  console.error('Error creating redirect files:', err)
  process.exit(2)
}

