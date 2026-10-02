import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { useLocale } from '../context/LocaleContext'
import { services } from '../data/siteData'

export default function ServicesPage() {
  const { t } = useLocale()

  const serviceCards = services.map((service) => ({
    ...service,
    title: t(`services.${service.id}.title`),
    description: t(`services.${service.id}.description`),
  }))

  return (
    <main className="page-content container">
      <SectionHeader
        eyebrow={t('nav.services')}
        title={t('services.title')}
        text={t('services.subtitle')}
      />

      <div className="cards-grid services-grid">
        {serviceCards.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  )
}
