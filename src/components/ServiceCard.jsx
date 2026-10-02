import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export default function ServiceCard({ service }) {
  const { t } = useLocale()
  const Icon = service.icon

  return (
    <article className="card service-card">
      <div className="service-icon">
        <Icon size={22} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to="/reservation" className="inline-link">
        {t('garage.request')}
        <ArrowRight size={16} />
      </Link>
    </article>
  )
}
