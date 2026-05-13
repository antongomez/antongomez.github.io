import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function Projects() {
  const { t } = useTranslation();

  useEffect(() => {
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

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20">
          <span className="font-label text-secondary tracking-[0.2em] text-base uppercase block mb-4 anim-fade-up" style={{ animationDelay: '0ms' }}>
            {t("projects.label")}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 anim-fade-up" style={{ animationDelay: '90ms' }}>
            {t("projects.title1")} <br />
            <span className="text-primary-dim">{t("projects.title2")}</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed anim-fade-up" style={{ animationDelay: '190ms' }}>
            {t("projects.subtitle")}
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Master's Thesis - Large Feature Card */}
          <div className="md:col-span-2 lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-500" data-animate-card>
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)" }} />
            <div className="w-full h-96 card-img" style={{ background: '#031d4b' }} />
            <div className="absolute top-0 left-0 p-8 z-20">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase">
                {t("projects.thesis.tag1")}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="text-3xl font-headline font-bold text-white mb-3 card-title">
                {t("projects.thesis.title")}
              </h3>
              <div className="card-desc-wrap">
                <p className="text-white/70 max-w-xl">{t("projects.thesis.desc")}</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://github.com/antongomez/Conditional-StyleGAN3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-sm">code</span>{" "}
                  {t("projects.thesis.githubBtn")}
                </a>
                <a
                  href={import.meta.env.BASE_URL + "tfm.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-sm">article</span>{" "}
                  {t("projects.thesis.pdfBtn")}
                </a>
              </div>
            </div>
          </div>

          {/* caretEnsemble */}
          <div className="md:col-span-1 lg:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[24rem]" data-animate-card>
            <div className="absolute inset-0">
              <img
                src={import.meta.env.BASE_URL + 'code_snippet_careEnsemble.webp'}
                alt="caretEnsemble code snippet"
                className="w-full h-full object-cover card-img"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-white/30 text-white rounded uppercase self-start">
                {t("projects.caret.tag")}
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.caret.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.caret.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://github.com/zachmayer/caretEnsemble"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    {t("projects.caret.viewBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* alvaroleonnutricion */}
          <div className="md:col-span-1 lg:col-span-5 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[22rem]" data-animate-card>
            <div className="absolute inset-0">
              <img
                src={import.meta.env.BASE_URL + 'home_alvaroleonnutricion.webp'}
                alt="alvaroleonnutricion website"
                className="w-full h-full object-cover card-img"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase self-start">
                Web
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.alvaro.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.alvaro.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://alvaroleonnutricion.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {t("projects.alvaro.visitBtn")}
                  </a>
                  <a
                    href="https://github.com/antongomez/nutrition-clinic-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wearvana */}
          <div className="md:col-span-1 lg:col-span-7 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[22rem]" data-animate-card>
            <div className="absolute inset-0">
              <img src={import.meta.env.BASE_URL + 'wearvana_combined.webp'} alt="Wearvana" className="w-full h-full object-cover object-top card-img" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)' }} />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase self-start">{t("projects.hackudc3.label")}</span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.hackudc3.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.hackudc3.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://devpost.com/software/wearvana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {t("projects.hackudc3.devpostBtn")}
                  </a>
                  <a
                    href="https://github.com/DaniPVargas/Wearvana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    {t("projects.hackudc3.githubBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OpenSplit */}
          <div className="md:col-span-1 lg:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[22rem]" data-animate style={{ transitionDelay: '0ms' }}>
            <div className="absolute inset-0">
              <img
                src={import.meta.env.BASE_URL + 'opensplit.webp'}
                alt="OpenSplit"
                className="w-full h-full object-cover card-img"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase self-start">
                {t("projects.hackupc.label")}
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.hackupc.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.hackupc.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://devpost.com/software/opensplitbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {t("projects.hackupc.devpostBtn")}
                  </a>
                  <a
                    href="https://github.com/DaniPVargas/OpenSplitBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    {t("projects.hackupc.githubBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ecoviaggio */}
          <div className="md:col-span-1 lg:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[22rem]" data-animate style={{ transitionDelay: '60ms' }}>
            <div className="absolute inset-0">
              <img
                src={import.meta.env.BASE_URL + 'ecoviaggio.webp'}
                alt="Ecoviaggio"
                className="w-full h-full object-cover card-img"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase self-start">
                {t("projects.hackudc2.label")}
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.hackudc2.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.hackudc2.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://devpost.com/software/ecoviaggio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {t("projects.hackudc2.devpostBtn")}
                  </a>
                  <a
                    href="https://github.com/antongomez/ecoviaggio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    {t("projects.hackudc2.githubBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Costa Compas */}
          <div className="md:col-span-1 lg:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 min-h-[22rem]" data-animate style={{ transitionDelay: '120ms' }}>
            <div className="absolute inset-0">
              <img
                src={import.meta.env.BASE_URL + 'costacompas.webp'}
                alt="Costa Compas"
                className="w-full h-full object-cover card-img"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-card-scrim) 0%, var(--p-card-scrim-mid) 50%, transparent 85%)",
                }}
              />
            </div>
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <span className="px-2 py-1 text-[10px] font-label font-bold tracking-widest bg-black/45 text-white/90 rounded uppercase self-start">
                {t("projects.hackudc1.label")}
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 card-title">
                  {t("projects.hackudc1.title")}
                </h3>
                <div className="card-desc-wrap">
                  <p className="text-white/70 text-sm leading-relaxed">{t("projects.hackudc1.desc")}</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a
                    href="https://devpost.com/software/costacompas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {t("projects.hackudc1.devpostBtn")}
                  </a>
                  <a
                    href="https://github.com/CastilloDel/costaCompas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 font-label text-xs uppercase tracking-widest"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    {t("projects.hackudc1.githubBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ada Byron */}
          <div className="md:col-span-2 lg:col-span-12 p-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 bg-surface-container-low/60 backdrop-blur-sm mt-6 relative overflow-hidden transition-all duration-500" data-animate-card>

            {/* Main row: description + edition cards */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    military_tech
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest text-primary-dim">
                    {t("projects.ada.rankLabel")}
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  {t("projects.ada.title")}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {t("projects.ada.desc")}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-12 lg:flex-col lg:gap-2">
                {t("projects.ada.editions", { returnObjects: true }).map(
                  ({ year, label, team, position, url }) => (
                    <a
                      key={year}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 pl-4 py-3 border-l-2 border-primary/40 hover:border-primary group/edition transition-all duration-300"
                    >
                      <span className="text-xs font-label text-on-surface-variant/50 shrink-0 w-8">{year}</span>
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-on-background block">{team}</span>
                        <span className="text-xs font-label text-primary/70">{label} · {position}</span>
                      </div>
                      <span className="material-symbols-outlined text-primary/50 text-base shrink-0 group-hover/edition:text-primary group-hover/edition:translate-x-1 transition-all duration-300">
                        open_in_new
                      </span>
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Solutions discovery strip */}
            <div className="mt-6 pt-5 border-t border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary/50 text-lg shrink-0">lightbulb</span>
                <p className="text-sm text-on-surface-variant/70 font-body">
                  {t("projects.ada.solutionsNote")}
                </p>
              </div>
              <a
                href="https://github.com/sergio-alv-per/adabyron-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex self-start sm:self-auto items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all duration-300 font-label text-xs uppercase tracking-widest shrink-0"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                {t("projects.ada.solutionsBtn")}
              </a>
            </div>
          </div>
        </div>
        {/* Photo Strip */}
        <div className="mt-20">
          <div className="mb-8" data-animate>
            <span className="font-label text-secondary tracking-[0.2em] text-xs uppercase block mb-2">
              {t("projects.photos.label")}
            </span>
            <h2 className="font-headline text-3xl font-bold">
              {t("projects.photos.title")}
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:grid-rows-[165px_165px] gap-2"
          >
            {[
              { src: "competition-photos/adabyron2023.webp",   alt: "Ada Byron 2023"  },
              { src: "competition-photos/adabyron2024.webp",   alt: "Ada Byron 2024"  },
              { src: "competition-photos/adabyron2024-1.webp", alt: "Ada Byron 2024"  },
              { src: "competition-photos/hackudc2024.webp",    alt: "HackUDC 2024"    },
              { src: "competition-photos/hackudc2024-1.webp",  alt: "HackUDC 2024"    },
              { src: "competition-photos/hackudc2024-2.webp",  alt: "HackUDC 2024"    },
              { src: "competition-photos/hackudc2024-3.webp",  alt: "HackUDC 2024"    },
              { src: "competition-photos/hackudc2025-1.webp",  alt: "HackUDC 2025"    },
              { src: "competition-photos/hackudc2025-2.webp",  alt: "HackUDC 2025"    },
            ].map(({ src, alt }, i) => (
              <div
                key={src}
                data-animate
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`photo-item relative overflow-hidden rounded-xl ${
                  i === 0
                    ? "col-span-2 aspect-video md:col-span-1 md:aspect-[4/3] lg:row-span-2 lg:aspect-auto"
                    : "aspect-[4/3] lg:aspect-auto"
                }`}
              >
                <img
                  src={import.meta.env.BASE_URL + src}
                  alt={alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="photo-scrim absolute inset-0 pointer-events-none" />
                <span className="photo-caption absolute bottom-3 left-3 font-label text-[10px] tracking-[0.18em] text-white uppercase select-none">
                  {t("projects.photos.captions", { returnObjects: true })[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
