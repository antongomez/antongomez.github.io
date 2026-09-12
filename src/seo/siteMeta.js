// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

// Single source of truth for per-route SEO metadata.
// Consumed at build time by scripts/prerender.js (static HTML + sitemap)
// and at runtime by src/seo/Seo.jsx (client-side navigation).

export const SITE_URL = 'https://antongomez.github.io/portfolio'
export const SITE_NAME = 'Antón Gómez López'
export const OG_IMAGE = `${SITE_URL}/hero-portrait.webp`
export const OG_IMAGE_WIDTH = '1797'
export const OG_IMAGE_HEIGHT = '1200'

export const ROUTES = [
  {
    path: '/',
    priority: '1.0',
    title: 'Antón Gómez López — AI Engineer & Software Engineer',
    description:
      'Antón Gómez López, AI Engineer from Galicia, Spain. Deep learning for robot perception, MSc in Artificial Intelligence and a dual degree in Computer Engineering & Mathematics.',
  },
  {
    path: '/about',
    priority: '0.9',
    title: 'About — Antón Gómez López',
    description:
      'The path of Antón Gómez López: from a double degree in Mathematics and Computer Engineering at USC to deep learning research and AI engineering.',
  },
  {
    path: '/experience',
    priority: '0.8',
    title: 'Experience — Antón Gómez López',
    description:
      'Professional experience of Antón Gómez López: AI Engineer at Theker Robotics, and researcher at CiTIUS, CITMAGA and Gradiant.',
  },
  {
    path: '/education',
    priority: '0.8',
    title: 'Education — Antón Gómez López',
    description:
      'Education of Antón Gómez López: MSc in Artificial Intelligence and a dual degree in Computer Engineering and Mathematics (USC), theses, awards and languages.',
  },
  {
    path: '/projects',
    priority: '0.8',
    title: 'Projects — Antón Gómez López',
    description:
      'Projects by Antón Gómez López: master thesis on generative AI, open-source contributions and hackathon-winning prototypes.',
  },
  {
    path: '/other',
    priority: '0.6',
    title: 'Personal — Antón Gómez López',
    description:
      'Beyond code: volunteering, music and sports in the personal life of Antón Gómez López.',
  },
]

export function metaForPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  return ROUTES.find((r) => r.path === clean) ?? ROUTES[0]
}
