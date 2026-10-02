import GarageCard from '../components/GarageCard'
import SectionHeader from '../components/SectionHeader'
import { useLocale } from '../context/LocaleContext'
import { garages } from '../data/siteData'

export default function GaragesPage() {
  const { t } = useLocale()

  return (
    <main className="page-content container">
      <SectionHeader
        eyebrow={t('nav.garages')}
        title={t('garage.title')}
        text={t('garage.subtitle')}
      />

      <div className="cards-grid garage-grid">
        {garages.map((garage) => (
          <GarageCard key={garage.name} garage={garage} />
        ))}
      </div>
    </main>
  )
}
