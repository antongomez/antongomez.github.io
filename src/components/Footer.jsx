import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="w-full py-20 px-8 bg-background border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline font-medium text-on-background">Antón Gómez López</span>
          <p className="font-body text-sm text-on-background/60">{t('footer.copyright')}</p>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/antongomez" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-on-background/60 hover:text-secondary underline-offset-4 hover:underline transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/anton-gomez-lopez/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-on-background/60 hover:text-secondary underline-offset-4 hover:underline transition-colors duration-300">LinkedIn</a>
          <a href="https://devpost.com/antongomez" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-on-background/60 hover:text-secondary underline-offset-4 hover:underline transition-colors duration-300">Devpost</a>
          <a href="#top" className="font-body text-sm text-primary hover:text-secondary underline-offset-4 hover:underline transition-colors duration-300">{t('footer.backToTop')}</a>
        </div>
      </div>
    </footer>
  )
}
