// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, metaForPath } from './siteMeta'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

// Keeps <title>, description, canonical and Open Graph tags in sync during
// client-side navigation. The initial values come pre-rendered in the HTML.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { path, title, description } = metaForPath(pathname)
    const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [pathname])

  return null
}
