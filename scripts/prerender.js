// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

// Post-build step: turns the single-page build into one static HTML file per
// route, each with its own <title>, description, canonical and Open Graph
// tags. Without this, GitHub Pages answers every deep link with a 404 status
// and search engines refuse to index them.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTES, SITE_URL } from '../src/seo/siteMeta.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = readFileSync(join(dist, 'index.html'), 'utf8')

function render({ title, description, url }) {
  const t = escape(title)
  const d = escape(description)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[\s\S]*?(")/, `$1${d}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[\s\S]*?(")/, `$1${t}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[\s\S]*?(")/, `$1${d}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[\s\S]*?(")/, `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[\s\S]*?(")/, `$1${t}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[\s\S]*?(")/, `$1${d}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[\s\S]*?(")/, `$1${url}$2`)
}

// GitHub Pages redirects /about to /about/, so canonicals point at the final URL
const urlFor = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`)

for (const route of ROUTES) {
  const html = render({ ...route, url: urlFor(route.path) })
  const outDir = route.path === '/' ? dist : join(dist, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`prerendered ${route.path}`)
}

// GitHub Pages serves 404.html for anything unmatched; keep the SPA shell there
// so unknown deep links still boot the router instead of showing a bare error.
writeFileSync(join(dist, '404.html'), render({ ...ROUTES[0], url: urlFor('/') }))

const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${urlFor(r.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${r.priority}</priority>
  </url>`,
).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written with ${ROUTES.length} urls`)
