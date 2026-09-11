// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

const HERO_LQIP = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQELuAu4AAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAANABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABwQAAICAgMAAAAAAAAAAAAAAAECABEhQRMxcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwAUIuxIpq4IFnddQEauBlQ5EWCnIbHskhqhbMo//9k='

export default function Home() {
  const canvasRef = useRef(null)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    const COUNT = 100

    class Particle {
      constructor(w, h) {
        this.w = w; this.h = h
        this.reset()
      }
      reset() {
        this.x = Math.random() * this.w
        this.y = Math.random() * this.h
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.radius = Math.random() * 1.5
        this.alpha = Math.random() * 0.5 + 0.1
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > this.w || this.y < 0 || this.y > this.h) this.reset()
      }
      draw() {
        const isDark = document.documentElement.classList.contains('dark')
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? `rgba(192, 193, 255, ${this.alpha})`
          : `rgba(79, 70, 229, ${this.alpha * 0.35})`
        ctx.fill()
      }
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: COUNT }, () => new Particle(canvas.width, canvas.height))
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ background: 'var(--p-background)' }}
      />

      <Navbar />
      <SideNav />

      <main className="flex-grow flex items-center justify-center px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block anim-fade-up" style={{ animationDelay: '100ms' }}>{t('home.subtitle')}</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-on-background anim-fade-up" style={{ animationDelay: '190ms' }}>
                Antón <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gómez López.</span>
              </h1>
            </div>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed anim-fade-up" style={{ animationDelay: '310ms' }}>
              {t('home.bio')}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 anim-fade-up" style={{ animationDelay: '420ms' }}>
              <Link
                to="/about"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-headline font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {t('home.aboutBtn')}
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border border-outline-variant/30 text-primary font-headline font-bold rounded-full hover:bg-surface-variant/20 hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                {t('home.projectsBtn')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 anim-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60" style={{ borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%' }} />
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[550px] overflow-hidden bg-surface-container-high shadow-2xl transition-all duration-700 ease-in-out"
                style={{ borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%' }}
                onMouseEnter={e => e.currentTarget.style.borderRadius = '38% 62% 54% 46% / 44% 60% 40% 56%'}
                onMouseLeave={e => e.currentTarget.style.borderRadius = '62% 38% 46% 54% / 60% 44% 56% 40%'}
              >
                <img
                  src={HERO_LQIP}
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
                  style={{ opacity: heroLoaded ? 0 : 1, transition: 'opacity 600ms ease' }}
                />
                <img
                  src={import.meta.env.BASE_URL + 'hero-portrait.webp'}
                  alt="Professional Profile"
                  className="relative w-full h-full object-cover transition-all duration-700"
                  style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 600ms ease' }}
                  onLoad={() => setHeroLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
