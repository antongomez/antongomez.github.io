// SPDX-FileCopyrightText: 2026 Antón Gómez López
//
// SPDX-License-Identifier: MIT

import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'

export default function Other() {
  const { t } = useTranslation()
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <SideNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block mb-4">{t('other.label')}</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              {t('other.titleMain')} <br /><span className="text-primary-dim">{t('other.titleHighlight')}</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              {t('other.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-8 py-2">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <p className="font-label text-xs text-secondary uppercase tracking-widest">{t('other.locationLabel')}</p>
              <p className="font-headline font-bold text-on-background">{t('other.location')}</p>
            </div>
          </div>
        </header>

        {/* Volunteering */}
        <section className="mb-24">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="font-headline text-3xl font-bold text-on-background">{t('other.volunteering.title')}</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ gridAutoRows: '200px' }}>
            {/* HackUDC Main Card */}
            <div className="md:col-span-8 md:row-span-2 bg-surface-container rounded-xl overflow-hidden group border border-outline-variant/10 relative transition-all hover:border-secondary/30" style={{ gridRow: 'span 2' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-full w-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/900x400/031d4b/21bedc?text=HackUDC+Hackathon"
                    alt="Hackathon setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-on-background">{t('other.volunteering.hackudcTitle')}</h3>
                      <p className="text-secondary font-label tracking-widest text-xs uppercase mt-1">{t('other.volunteering.hackudcRole')}</p>
                    </div>
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">{t('other.volunteering.hackudcBadge')}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {t('other.volunteering.hackudcDesc')}
                  </p>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                    <span className="material-symbols-outlined text-secondary">terminal</span>
                    <span className="material-symbols-outlined text-secondary">handshake</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Mentor */}
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-bright/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary-dim p-2 bg-primary/10 rounded-lg">volunteer_activism</span>
                <span className="text-[10px] text-on-surface-variant/60 font-mono tracking-tighter">01_EXP</span>
              </div>
              <h4 className="font-headline font-bold text-on-background mb-2">{t('other.volunteering.mentorTitle')}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t('other.volunteering.mentorDesc')}</p>
            </div>

            {/* Open Source Contributor */}
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-6 border border-outline-variant/5 hover:bg-surface-bright/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary-dim p-2 bg-primary/10 rounded-lg">code_blocks</span>
                <span className="text-[10px] text-on-surface-variant/60 font-mono tracking-tighter">02_EXP</span>
              </div>
              <h4 className="font-headline font-bold text-on-background mb-2">{t('other.volunteering.ossTitle')}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{t('other.volunteering.ossDesc')}</p>
            </div>
          </div>
        </section>

        {/* Music & Sports */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          {/* Music */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary">music_note</span>
              <h2 className="font-headline text-3xl font-bold">{t('other.music.title')}</h2>
            </div>
            <div className="relative group mb-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-xl" />
              <div className="relative bg-surface-container-low rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <img
                    src="https://placehold.co/700x400/031d4b/21bedc?text=Clarinet+Performance"
                    alt="Musical performance"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-on-background">{t('other.music.instrument')}</h3>
                      <p className="text-primary text-sm font-medium">Sementeira Band</p>
                    </div>
                    <span className="font-mono text-xs text-outline-variant">EST. 2018</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {t('other.music.desc')}
                  </p>
                  <div className="flex gap-2">
                    {t('other.music.tags', { returnObjects: true }).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-surface-variant/40 rounded text-[10px] text-primary uppercase font-bold tracking-tighter">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://placehold.co/300x300/000000/5b74b1?text=Sheet+Music"
                  alt="Sheet music"
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://placehold.co/300x300/031d4b/c0c1ff?text=Clarinet+Detail"
                  alt="Instrument detail"
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Sports */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary">sports_basketball</span>
              <h2 className="font-headline text-3xl font-bold">{t('other.sports.title')}</h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="h-16 w-16 bg-surface-container rounded-full flex items-center justify-center shrink-0 border border-outline-variant/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">sports_score</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl mb-1">{t('other.sports.basketballTitle')}</h3>
                  <p className="text-xs text-primary font-bold tracking-widest uppercase mb-3">{t('other.sports.basketballLeague')}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {t('other.sports.basketballDesc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="h-16 w-16 bg-surface-container rounded-full flex items-center justify-center shrink-0 border border-outline-variant/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">directions_run</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl mb-1">{t('other.sports.athleticsTitle')}</h3>
                  <p className="text-xs text-primary font-bold tracking-widest uppercase mb-3">{t('other.sports.athleticsDiscipline')}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {t('other.sports.athleticsDesc')}
                  </p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8 shadow-2xl">
                <img
                  src="https://placehold.co/700x300/000000/21bedc?text=Athletics+Track"
                  alt="Running track"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-label text-white/50 text-[10px] tracking-[0.4em] uppercase">Mens sana in corpore sano</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <section className="py-20 bg-surface-container-low rounded-3xl px-12 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">format_quote</span>
          </div>
          <div className="max-w-3xl">
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-6 leading-tight">
              &quot;{t('other.quote1')}{' '}
              <span className="text-secondary">{t('other.quoteMusic')}</span> {t('other.quote2')}{' '}
              <span className="text-primary">{t('other.quoteSports')}</span>&quot;
            </h3>
            <p className="font-body text-on-surface-variant italic">
              {t('other.quoteAuthor')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
