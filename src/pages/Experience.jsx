import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'

export default function Experience() {
  const { t } = useTranslation()

  useEffect(() => {
    // Experience card rows: wait until 15% is visible + 80px inside viewport
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

    // Other elements (tech stack heading, category rows)
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

    return () => {
      cardObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <SideNav />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block mb-4 anim-fade-up" style={{ animationDelay: '0ms' }}>{t('experience.label')}</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] anim-fade-up" style={{ animationDelay: '90ms' }}>
                {t('experience.title1')} <br /><span className="text-primary-dim">{t('experience.title2')}</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="space-y-16 md:space-y-32">

          {/* CiTIUS — AI Research Scholar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative" data-animate-card>
            <div className="hidden lg:block lg:col-span-2 py-4">
              <div className="sticky top-40 flex flex-col items-end">
                {(() => {
                  const [start, end] = t('experience.citius.dates').split(' – ')
                  const [sm, sy] = start.split(' ')
                  const [em, ey] = (end || start).split(' ')
                  return (
                    <>
                      <div className="text-right">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary/70 block mb-0.5">{sm}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant leading-none">{sy}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 my-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                        <div className="w-px h-10 bg-gradient-to-b from-secondary/30 to-outline-variant/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
                      </div>
                      <div className="text-right mb-4">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/75 block mb-0.5">{em}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant/75 leading-none">{ey}</span>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
            <div className="lg:col-span-10">
              <div className="glass-card rounded-xl p-8 md:p-12 border border-outline-variant/20 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/20 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="h-12 w-24 md:h-14 md:w-28 shrink-0 flex items-center justify-center dark:bg-white/90 rounded-lg px-3 self-center md:self-auto">
                      <img src={import.meta.env.BASE_URL + 'positivo_logotipo_citius.png'} alt="CiTIUS" className="max-h-11 w-full object-contain" />
                    </div>
                    <div>
                      <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-background">{t('experience.citius.role')}</h2>
                      <p className="font-body text-primary font-medium">{t('experience.citius.org')}</p>
                      <p className="font-label text-xs text-on-surface-variant/60 mt-1">{t('experience.citius.dates')}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed text-lg max-w-3xl">
                    {t('experience.citius.desc')}
                  </p>
                  <div className="bg-surface-container-highest/30 p-6 rounded-lg border border-outline-variant/20">
                    <h4 className="text-xs font-label uppercase tracking-widest text-primary-dim mb-4">{t('experience.citius.achievementsLabel')}</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-secondary material-symbols-outlined text-lg shrink-0">trending_up</span>
                        <span className="text-sm">{t('experience.citius.achievement1')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="https://github.com/antongomez/Conditional-StyleGAN3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all font-label text-xs uppercase tracking-widest"
                    >
                      <span className="material-symbols-outlined text-sm">code</span>
                      {t('experience.citius.githubBtn')}
                    </a>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">PyTorch</span>
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">StyleGAN3</span>
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">Remote Sensing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CITMAGA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-animate-card>
            <div className="hidden lg:block lg:col-span-2 py-4">
              <div className="sticky top-40 flex flex-col items-end">
                {(() => {
                  const [start, end] = t('experience.citmaga.dates').split(' – ')
                  const [sm, sy] = start.split(' ')
                  const [em, ey] = (end || start).split(' ')
                  return (
                    <>
                      <div className="text-right">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary/70 block mb-0.5">{sm}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant leading-none">{sy}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 my-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                        <div className="w-px h-10 bg-gradient-to-b from-secondary/30 to-outline-variant/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
                      </div>
                      <div className="text-right mb-4">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/75 block mb-0.5">{em}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant/75 leading-none">{ey}</span>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
            <div className="lg:col-span-10">
              <div className="glass-card rounded-xl p-8 md:p-12 border border-outline-variant/20 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/20 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="h-12 w-24 md:h-14 md:w-28 shrink-0 flex items-center justify-center dark:bg-white/90 rounded-lg px-3 self-center md:self-auto">
                      <img src={import.meta.env.BASE_URL + 'citcolor.png'} alt="CITMAGA" className="max-h-11 w-full object-contain" />
                    </div>
                    <div>
                      <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-background">{t('experience.citmaga.role')}</h2>
                      <p className="font-body text-primary font-medium">{t('experience.citmaga.org')}</p>
                      <p className="font-label text-xs text-on-surface-variant/60 mt-1">{t('experience.citmaga.dates')}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                    {t('experience.citmaga.desc')}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="https://github.com/zachmayer/caretEnsemble"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all font-label text-xs uppercase tracking-widest"
                    >
                      <span className="material-symbols-outlined text-sm">code</span>
                      {t('experience.citmaga.githubBtn')}
                    </a>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">R</span>
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">Open Source</span>
                      <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">Statistics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradiant */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-animate-card>
            <div className="hidden lg:block lg:col-span-2 py-4">
              <div className="sticky top-40 flex flex-col items-end">
                {(() => {
                  const [start, end] = t('experience.gradiant.dates').split(' – ')
                  const [sm, sy] = start.split(' ')
                  const [em, ey] = (end || start).split(' ')
                  return (
                    <>
                      <div className="text-right">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary/70 block mb-0.5">{sm}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant leading-none">{sy}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 my-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                        <div className="w-px h-10 bg-gradient-to-b from-secondary/30 to-outline-variant/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
                      </div>
                      <div className="text-right mb-4">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/75 block mb-0.5">{em}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant/75 leading-none">{ey}</span>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
            <div className="lg:col-span-10">
              <div className="glass-card rounded-xl p-8 md:p-12 border border-outline-variant/20 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/20 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="h-12 w-24 md:h-14 md:w-28 shrink-0 flex items-center justify-center dark:bg-white/90 rounded-lg px-3 self-center md:self-auto">
                      <img src={import.meta.env.BASE_URL + 'Logotipo-Gradiant_V3.png'} alt="Gradiant" className="max-h-11 w-full object-contain" />
                    </div>
                    <div>
                      <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-background">{t('experience.gradiant.role')}</h2>
                      <p className="font-body text-primary font-medium">{t('experience.gradiant.org')}</p>
                      <p className="font-label text-xs text-on-surface-variant/60 mt-1">{t('experience.gradiant.dates')}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                    {t('experience.gradiant.desc')}
                  </p>
                  <div className="bg-surface-container-highest/30 p-6 rounded-lg border border-outline-variant/20">
                    <h4 className="text-xs font-label uppercase tracking-widest text-primary-dim mb-4">{t('experience.gradiant.achievementsLabel')}</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-secondary material-symbols-outlined text-lg shrink-0">speed</span>
                        <span className="text-sm">{t('experience.gradiant.achievement1')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-secondary material-symbols-outlined text-lg shrink-0">hub</span>
                        <span className="text-sm">{t('experience.gradiant.achievement2')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">NLP</span>
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">PyTorch</span>
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">Distributed Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CiTIUS — NLP Intern */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-animate-card>
            <div className="hidden lg:block lg:col-span-2 py-4">
              <div className="sticky top-40 flex flex-col items-end">
                {(() => {
                  const [start, end] = t('experience.citiusNLP.dates').split(' – ')
                  const [sm, sy] = start.split(' ')
                  const [em, ey] = (end || start).split(' ')
                  return (
                    <>
                      <div className="text-right">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary/70 block mb-0.5">{sm}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant leading-none">{sy}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 my-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                        <div className="w-px h-10 bg-gradient-to-b from-secondary/30 to-outline-variant/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/40" />
                      </div>
                      <div className="text-right mb-4">
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/75 block mb-0.5">{em}</span>
                        <span className="font-headline text-4xl font-bold text-on-surface-variant/75 leading-none">{ey}</span>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
            <div className="lg:col-span-10">
              <div className="glass-card rounded-xl p-8 md:p-12 border border-outline-variant/20 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/20 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="h-12 w-24 md:h-14 md:w-28 shrink-0 flex items-center justify-center dark:bg-white/90 rounded-lg px-3 self-center md:self-auto">
                      <img src={import.meta.env.BASE_URL + 'positivo_logotipo_citius.png'} alt="CiTIUS" className="max-h-11 w-full object-contain" />
                    </div>
                    <div>
                      <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-background">{t('experience.citiusNLP.role')}</h2>
                      <p className="font-body text-primary font-medium">{t('experience.citiusNLP.org')}</p>
                      <p className="font-label text-xs text-on-surface-variant/60 mt-1">{t('experience.citiusNLP.dates')}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed max-w-3xl">
                    {t('experience.citiusNLP.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">NLP</span>
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">OpenNMT</span>
                    <span className="px-3 py-1 rounded-md bg-surface-variant text-on-surface-variant text-[10px] font-label uppercase tracking-wider">Low-resource NLP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Technical Stack */}
        <section className="mt-20 pt-10 md:mt-40 md:pt-20 border-t border-outline-variant/10">
          <h3 className="font-headline text-2xl font-bold mb-16" data-animate>{t('experience.stack.title')}</h3>
          <div className="space-y-10">
            {[
              {
                label: t('experience.stack.cat1'),
                items: [
                  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                  { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg' },
                  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
                  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
                  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                ],
              },
              {
                label: t('experience.stack.cat2'),
                items: [
                  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
                  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
                  { name: 'Data Parallel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
                ],
              },
              {
                label: t('experience.stack.cat3'),
                items: [
                  { name: 'PySpark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg' },
                  { name: 'Ray', icon: 'https://cdn.simpleicons.org/ray' },
                  { name: 'Dask', icon: 'https://cdn.simpleicons.org/dask' },
                ],
              },
              {
                label: t('experience.stack.cat4'),
                items: [
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
                  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', whiteBg: true },
                ],
              },
              {
                label: t('experience.stack.cat5'),
                items: [
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', whiteBg: true },
                  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
                  { name: 'LaTeX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', whiteBg: true },
                ],
              },
            ].map(({ label, items }, index) => (
              <div key={label} data-animate style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary shrink-0">{label}</span>
                  <div className="flex-1 h-px bg-outline-variant/20" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map(({ name, icon, whiteBg }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center justify-center gap-2.5 w-24 py-5 px-2 glass-card rounded-2xl border border-outline-variant/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 cursor-default group"
                    >
                      {icon ? (
                        <img
                          src={icon}
                          alt={name}
                          className={`w-9 h-9 object-contain transition-all duration-500${whiteBg ? ' icon-white-bg' : ''}`}
                        />
                      ) : (
                        <span className="material-symbols-outlined text-on-surface-variant/30" style={{ fontSize: '36px' }}>terminal</span>
                      )}
                      <span className="font-label text-[10px] text-center text-on-surface-variant/70 leading-tight">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
