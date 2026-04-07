import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'

function SectionTitle({ children }) {
  return (
    <h2 className="font-label text-sm text-secondary tracking-[0.25em] uppercase flex items-center gap-3 mt-14 mb-5">
      <span className="w-4 h-px bg-secondary/50 shrink-0" />
      {children}
    </h2>
  )
}

export default function About() {
  const { t } = useTranslation()

  useEffect(() => {
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
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <SideNav />

      <main className="pt-32 pb-32 px-8 max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Photo */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 group flex flex-col gap-8 anim-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-surface-container shadow-2xl relative z-10 border border-outline-variant/20">
                <img
                  src={import.meta.env.BASE_URL + 'foto_citius_web.JPG'}
                  alt="Professional portrait"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-background/80 backdrop-blur-md rounded-xl px-5 py-3 z-20 flex items-center gap-3 border border-outline-variant/20 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
                <div>
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-0.5">{t('other.locationLabel')}</p>
                  <p className="font-headline text-sm font-bold text-on-background">Santiago de Compostela, ES</p>
                </div>
              </div>
            </div>
            <a
              href={import.meta.env.BASE_URL + "CV_AI_Engineer.pdf"}
              download
              className="glass-card group/btn flex items-center justify-center gap-3 w-full px-6 py-3 mt-4 rounded-xl border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 font-label text-sm uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/btn:translate-y-0.5">download</span>
              {t('footer.downloadCV')}
            </a>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 pt-8 lg:pt-0">
            <header className="mb-2">
              <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block mb-6 anim-fade-up" style={{ animationDelay: '0ms' }}>{t('about.label')}</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4 anim-fade-up" style={{ animationDelay: '90ms' }}>
                {t('about.titleMain')} <br /><span className="text-primary-dim">{t('about.titleHighlight')}</span>
              </h1>
            </header>

            <div className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">

              {/* Section 1 */}
              <div data-animate>
                <SectionTitle>{t('about.s1_title')}</SectionTitle>
                <p className="mb-5">
                  {t('about.s1_p1_before')}{' '}
                  <span className="text-primary-dim font-medium italic">{t('about.s1_p1_degree')}</span>
                  {t('about.s1_p1_after')}
                </p>
                <p>{t('about.s1_p2')}</p>
              </div>

              {/* Section 2 */}
              <div data-animate>
                <SectionTitle>{t('about.s2_title')}</SectionTitle>
                <p>
                  {t('about.s2_p1_before')}{' '}
                  <span className="text-on-surface font-medium">CiTIUS</span>
                  {t('about.s2_p1_mid')}{' '}
                  <span className="text-secondary font-medium">{t('about.s2_p1_ai')}</span>{' '}
                  {t('about.s2_p1_mid2')}{' '}
                  <span className="text-on-surface font-medium">{t('about.s2_p1_dl')}</span>{' '}
                  {t('about.s2_p1_after')}
                </p>
              </div>

              {/* Section 3 */}
              <div data-animate>
                <SectionTitle>{t('about.s3_title')}</SectionTitle>
                <p className="mb-5">
                  {t('about.s3_p1_before')}{' '}
                  <span className="text-primary-dim font-medium">HackUDC</span>
                  {t('about.s3_p1_mid')}{' '}
                  <span className="text-primary-dim font-medium">HackUPC</span>{' '}
                  {t('about.s3_p1_after')}
                </p>
                <p className="mb-5">
                  {t('about.s3_p2_before')}{' '}
                  <span className="text-on-surface font-medium">Ada Byron</span>{' '}
                  {t('about.s3_p2_after')}
                </p>
                <p className="mb-4">{t('about.s3_intro')}</p>
                <ul className="space-y-3 mb-5 border-l-2 border-outline-variant/20 pl-5">
                  <li>
                    <span className="text-on-surface font-semibold">{t('about.s3_b1_label')}</span>
                    {' — '}{t('about.s3_b1')}
                  </li>
                  <li>
                    <span className="text-primary-dim font-semibold">{t('about.s3_b2_label')}</span>
                    {' — '}{t('about.s3_b2')}
                  </li>
                </ul>
                <p>{t('about.s3_closing')}</p>
              </div>

              {/* Section 4 */}
              <div data-animate>
                <SectionTitle>{t('about.s4_title')}</SectionTitle>
                <p className="mb-5">
                  {t('about.s4_p1_before')}{' '}
                  <span className="text-secondary font-medium">{t('about.s4_p1_master')}</span>{' '}
                  {t('about.s4_p1_mid')}{' '}
                  <span className="text-on-surface font-medium">{t('about.s4_p1_cv')}</span>
                  {t('about.s4_p1_mid2')}{' '}
                  <span className="text-on-surface font-medium">{t('about.s4_p1_rs')}</span>
                  {t('about.s4_p1_after')}
                </p>
                <p className="mb-5">{t('about.s4_p2')}</p>
                <p>{t('about.s4_p3')}</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
