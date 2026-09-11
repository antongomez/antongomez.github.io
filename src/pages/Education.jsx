// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'

export default function Education() {
  const { t } = useTranslation()
  const [barsVisible, setBarsVisible] = useState(false)
  const barsRef = useRef(null)

  useEffect(() => {
    // Scroll-triggered: degree articles
    const cards = document.querySelectorAll('[data-animate-card]')
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            cardObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    cards.forEach((el) => cardObserver.observe(el))

    // Scroll-triggered: section headings + award cards
    const elements = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => observer.observe(el))

    // Bar chart: animate widths when the bars section enters the viewport
    const barsEl = barsRef.current
    const barsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true)
          barsObserver.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (barsEl) barsObserver.observe(barsEl)

    return () => {
      cardObserver.disconnect()
      observer.disconnect()
      barsObserver.disconnect()
    }
  }, [])

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <SideNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-24 text-left">
          <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block mb-4 anim-fade-up" style={{ animationDelay: '0ms' }}>{t('education.label')}</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 anim-fade-up" style={{ animationDelay: '90ms' }}>
            {t('education.title1')} <br /><span className="text-primary-dim">{t('education.title2')}</span>
          </h1>
          <p className="font-body text-on-surface-variant max-w-xl text-lg leading-relaxed anim-fade-up" style={{ animationDelay: '190ms' }}>
            {t('education.subtitle')}
          </p>
        </header>

        <section className="space-y-32">
          {/* Master's Degree */}
          <article className="relative" data-animate-card>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-24 rounded-xl dark:bg-white/90 flex items-center justify-center dark:border dark:border-outline-variant/20 dark:shadow-lg shrink-0 p-2">
                    <img src={import.meta.env.BASE_URL + 'usc.webp'} alt="USC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-on-background">{t('education.master.degree')}</h3>
                    <p className="font-body text-primary tracking-wide text-sm">{t('education.master.university')}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 font-label text-[11px] text-on-surface-variant/80 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> 2024 — 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">grade</span> {t('education.master.grade')}
                  </span>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.master.coursesLabel')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t('education.master.courses', { returnObjects: true }).map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm text-on-surface-variant font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.master.toolsLabel')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t('education.master.tools', { returnObjects: true }).map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thesis book stack */}
              <div className="lg:col-span-5 flex flex-col items-center gap-8">
                <a href={import.meta.env.BASE_URL + "tfm.pdf"} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-full transition-transform duration-300 hover:scale-105" style={{ height: '280px' }}>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(-14deg) translateX(-55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfm_page2.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(14deg) translateX(55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfm_page3.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                    style={{ width: '170px', zIndex: 2, transform: 'translateY(20px)' }}
                  >
                    <img src={import.meta.env.BASE_URL + 'first_page_tfm.webp'} alt="Master's Thesis Cover Page" className="w-full" />
                  </div>
                </a>
                <div className="w-full space-y-3 px-2 text-center flex flex-col items-center">
                  <div>
                    <span className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest block mb-1">{t('education.master.thesisLabel')}</span>
                    <p className="font-headline text-sm font-semibold text-secondary italic leading-snug">
                      {t('education.master.thesisTitle')}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://github.com/antongomez/Conditional-StyleGAN3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all duration-300 font-label text-xs uppercase tracking-tight">
                      <span className="material-symbols-outlined text-sm">code</span> {t('education.master.githubBtn')}
                    </a>
                    <a
                      href={import.meta.env.BASE_URL + "tfm.pdf"}
                      download
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all duration-300 font-label text-xs uppercase tracking-tight"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      {t('education.master.pdfBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Bachelor's Degree in Computer Engineering */}
          <article className="relative" data-animate-card>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-24 rounded-xl dark:bg-white/90 flex items-center justify-center dark:border dark:border-outline-variant/20 dark:shadow-lg shrink-0 p-2">
                    <img src={import.meta.env.BASE_URL + 'usc.webp'} alt="USC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-on-background">{t('education.cs.degree')}</h3>
                    <p className="font-body text-secondary tracking-wide text-sm">{t('education.cs.university')}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 font-label text-[11px] text-on-surface-variant/80 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> 2018 — 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">grade</span> {t('education.cs.grade')}
                  </span>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.cs.coursesLabel')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t('education.cs.courses', { returnObjects: true }).map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm text-on-surface-variant font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.cs.toolsLabel')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t('education.cs.tools', { returnObjects: true }).map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-center gap-8">
                <a href={import.meta.env.BASE_URL + "tfg_computer_engineering.pdf"} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-full transition-transform duration-300 hover:scale-105" style={{ height: '280px' }}>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(-14deg) translateX(-55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-informatica-2.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(14deg) translateX(55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-informatica-3.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                    style={{ width: '170px', zIndex: 2, transform: 'translateY(20px)' }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-informatica-1.webp'} alt="Computer Engineering Bachelor's Thesis Cover Page" className="w-full" />
                  </div>
                </a>
                <div className="w-full space-y-3 px-2 text-center flex flex-col items-center">
                  <div>
                    <span className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest block mb-1">{t('education.cs.thesisLabel')}</span>
                    <p className="font-headline text-sm font-semibold text-secondary italic leading-snug">
                      {t('education.cs.thesisTitle')}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://github.com/antongomez/Conditional-StyleGAN2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary hover:text-on-secondary transition-all duration-300 font-label text-xs uppercase tracking-tight">
                      <span className="material-symbols-outlined text-sm">code</span> {t('education.cs.githubBtn')}
                    </a>
                    <a href={import.meta.env.BASE_URL + "tfg_computer_engineering.pdf"} download className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary hover:text-on-secondary transition-all duration-300 font-label text-xs uppercase tracking-tight">
                      <span className="material-symbols-outlined text-sm">download</span> {t('education.cs.thesisBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Bachelor's Degree in Mathematics */}
          <article className="relative" data-animate-card>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-24 rounded-xl dark:bg-white/90 flex items-center justify-center dark:border dark:border-outline-variant/20 dark:shadow-lg shrink-0 p-2">
                    <img src={import.meta.env.BASE_URL + 'usc.webp'} alt="USC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-on-background">{t('education.math.degree')}</h3>
                    <p className="font-body text-primary tracking-wide text-sm">{t('education.math.university')}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 font-label text-[11px] text-on-surface-variant/80 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span> 2018 — 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">grade</span> {t('education.math.grade')}
                  </span>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.math.coursesLabel')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t('education.math.courses', { returnObjects: true }).map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm text-on-surface-variant font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t('education.math.toolsLabel')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t('education.math.tools', { returnObjects: true }).map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-center gap-8">
                <a href={import.meta.env.BASE_URL + "tfg_mathematics.pdf"} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-full transition-transform duration-300 hover:scale-105" style={{ height: '280px' }}>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(-14deg) translateX(-55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-matematicas-2.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="absolute rounded-xl overflow-hidden shadow-lg"
                    style={{ width: '130px', transform: 'rotate(14deg) translateX(55px) translateY(10px)', zIndex: 1 }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-matematicas-3.webp'} alt="" aria-hidden="true" className="w-full opacity-55" />
                  </div>
                  <div
                    className="relative rounded-xl overflow-hidden shadow-2xl"
                    style={{ width: '170px', zIndex: 2, transform: 'translateY(20px)' }}
                  >
                    <img src={import.meta.env.BASE_URL + 'tfg-matematicas-1.webp'} alt="Mathematics Bachelor's Thesis Cover Page" className="w-full" />
                  </div>
                </a>
                <div className="w-full space-y-3 px-2 text-center flex flex-col items-center">
                  <div>
                    <span className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest block mb-1">{t('education.math.thesisLabel')}</span>
                    <p className="font-headline text-sm font-semibold text-primary italic leading-snug">
                      {t('education.math.thesisTitle')}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a href={import.meta.env.BASE_URL + "tfg_mathematics.pdf"} download className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all duration-300 font-label text-xs uppercase tracking-tight">
                      <span className="material-symbols-outlined text-sm">download</span> {t('education.math.thesisBtn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Awards & Certifications */}
        <section className="mt-40 space-y-8">
          <div className="flex items-center gap-4 mb-8" data-animate>
            <span className="material-symbols-outlined text-primary text-4xl">trophy</span>
            <h2 className="font-headline text-3xl font-bold text-on-background">{t('education.awards.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Award 1 — End-of-Degree */}
            <div className="p-8 rounded-2xl glass-card border border-outline-variant/20 shadow-xl overflow-hidden relative group" data-animate style={{ transitionDelay: '0ms' }}>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">emoji_events</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">{t('education.awards.award1.date')}</span>
                </div>
                <p className="font-label text-[10px] text-primary/70 uppercase tracking-widest mb-2">{t('education.awards.award1.issuer')}</p>
                <h4 className="font-headline text-lg font-bold text-on-background mb-3 leading-snug">{t('education.awards.award1.title')}</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t('education.awards.award1.desc')}</p>
              </div>
            </div>

            {/* Award 2 — Linguistic Quality */}
            <div className="p-8 rounded-2xl glass-card border border-outline-variant/20 shadow-xl overflow-hidden relative group" data-animate style={{ transitionDelay: '60ms' }}>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="material-symbols-outlined text-secondary text-3xl">translate</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">{t('education.awards.award2.date')}</span>
                </div>
                <p className="font-label text-[10px] text-secondary/70 uppercase tracking-widest mb-2">{t('education.awards.award2.issuer')}</p>
                <h4 className="font-headline text-lg font-bold text-on-background mb-3 leading-snug">{t('education.awards.award2.title')}</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t('education.awards.award2.desc')}</p>
              </div>
            </div>

            {/* Award 3 — Free Software */}
            <div className="p-8 rounded-2xl glass-card border border-outline-variant/20 shadow-xl overflow-hidden relative group" data-animate style={{ transitionDelay: '120ms' }}>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="material-symbols-outlined text-primary text-3xl">code</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">{t('education.awards.award3.date')}</span>
                </div>
                <p className="font-label text-[10px] text-primary/70 uppercase tracking-widest mb-2">{t('education.awards.award3.issuer')}</p>
                <h4 className="font-headline text-lg font-bold text-on-background mb-3 leading-snug">{t('education.awards.award3.title')}</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t('education.awards.award3.desc')}</p>
              </div>
            </div>
          </div>

        </section>

        {/* Languages */}
        <section className="mt-32 space-y-8">
          <div className="flex items-center gap-4 mb-8" data-animate>
            <span className="material-symbols-outlined text-secondary text-4xl">language</span>
            <h2 className="font-headline text-3xl font-bold text-on-background">{t('education.languages.title')}</h2>
          </div>

          <div className="p-8 md:p-10 rounded-[2rem] glass-card border border-secondary/20 shadow-xl" data-animate-card>
            {/* Certificate header — mobile */}
            <div className="md:hidden mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-background leading-tight">{t('education.cert.name')}</h3>
                  <p className="font-body text-on-surface-variant/70 text-xs mt-0.5">
                    {t('education.cert.issuer')} · Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 text-center py-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                  <span className="font-headline text-2xl font-bold text-secondary">181</span>
                  <p className="font-label text-[10px] text-secondary/70 uppercase tracking-widest mt-1">{t('education.cert.overallLabel')}</p>
                </div>
                <div className="flex-1 text-center py-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                  <span className="font-headline text-2xl font-bold text-secondary">C1</span>
                  <p className="font-label text-[10px] text-secondary/70 uppercase tracking-widest mt-1">{t('education.cert.levelLabel')}</p>
                </div>
              </div>
            </div>

            {/* Certificate header — desktop */}
            <div className="hidden md:flex md:flex-row md:items-start gap-6 mb-8">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-4xl">verified</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-background leading-tight">{t('education.cert.name')}</h3>
                  <p className="font-body text-on-surface-variant/70 text-sm mt-0.5">
                    {t('education.cert.issuer')} · Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <div className="text-center px-5 py-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                  <span className="font-headline text-2xl font-bold text-secondary">181</span>
                  <p className="font-label text-[10px] text-secondary/70 uppercase tracking-widest mt-1">{t('education.cert.overallLabel')}</p>
                </div>
                <div className="text-center px-5 py-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                  <span className="font-headline text-2xl font-bold text-secondary">C1</span>
                  <p className="font-label text-[10px] text-secondary/70 uppercase tracking-widest mt-1">{t('education.cert.levelLabel')}</p>
                </div>
              </div>
            </div>

            {/* Skill bars — scale: 50–200 */}
            <div ref={barsRef}>
              <h4 className="font-label text-xs font-bold text-on-background/60 uppercase tracking-widest border-b border-outline-variant/10 pb-2 mb-5">
                {t('education.cert.skillsLabel')}
              </h4>
              <div className="space-y-4">
                {[
                  { key: 'reading',       score: 180 },
                  { key: 'useOfEnglish',  score: 179 },
                  { key: 'writing',       score: 186 },
                  { key: 'listening',     score: 178 },
                  { key: 'speaking',      score: 180 },
                ].map(({ key, score }, index) => {
                  const MIN = 50, MAX = 200
                  const C1_THRESHOLD = 180
                  const pct = ((score - MIN) / (MAX - MIN)) * 100
                  const thresholdPct = ((C1_THRESHOLD - MIN) / (MAX - MIN)) * 100
                  return (
                    <div key={key} className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                      {/* Mobile: label + score on one line */}
                      <div className="flex items-baseline justify-between md:contents">
                        <span className="font-label text-xs text-on-surface-variant md:w-36 md:shrink-0">
                          {t(`education.cert.skills.${key}`)}
                        </span>
                        <span className="font-label text-xs font-bold text-secondary md:hidden">
                          {score}
                        </span>
                      </div>
                      {/* Bar */}
                      <div className="flex-1 relative py-1">
                        <div className="h-2.5 rounded-full bg-outline-variant/20 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-secondary"
                            style={{
                              width: barsVisible ? `${pct}%` : '0%',
                              transition: `width 700ms cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
                            }}
                          />
                        </div>
                        {/* C1 threshold marker */}
                        <div
                          className="absolute inset-y-0 w-[2px] bg-outline-variant/60 rounded-full z-10"
                          style={{ left: `${thresholdPct}%` }}
                        />
                      </div>
                      {/* Desktop score */}
                      <span className="hidden md:block font-label text-xs font-bold text-secondary shrink-0 w-8 text-right">
                        {score}
                      </span>
                    </div>
                  )
                })}
              </div>
              {/* Scale legend — desktop: aligned with bars; mobile: centred below */}
              <div className="mt-3 md:flex md:items-center md:gap-4">
                <span className="hidden md:block w-36 shrink-0" />
                <div className="flex-1 relative h-5">
                  <span
                    className="md:absolute md:-translate-x-1/2 flex justify-center md:block font-label text-[9px] text-on-surface-variant/35 uppercase tracking-widest whitespace-nowrap"
                    style={{ left: `${((180 - 50) / (200 - 50)) * 100}%` }}
                  >
                    {t('education.cert.passThreshold')} · 180
                  </span>
                </div>
                <span className="hidden md:block w-20 shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
