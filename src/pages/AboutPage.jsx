import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { useLocale } from '../context/LocaleContext'

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <main className="page-content container about-page">
      <SectionHeader
        eyebrow={t('nav.about')}
        title={t('about.title')}
        text={t('about.intro')}
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>{t('about.text1')}</p>
          <p>{t('about.text2')}</p>
        </div>

        <div className="feature-panel glass-card">
          <h3>{t('about.promise')}</h3>
          <ul>
            <li>
              <CheckCircle2 size={18} />
              <span>{t('about.item1')}</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>{t('about.item2')}</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>{t('about.item3')}</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>{t('about.item4')}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
