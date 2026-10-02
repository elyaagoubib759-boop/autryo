import { ArrowRight, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export default function GarageCard({ garage }) {
  const { t } = useLocale()

  return (
    <article className="card garage-card">
      <div className="garage-header">
        <div>
          <p className="garage-name">{garage.name}</p>
          <div className="garage-location">
            <MapPin size={14} />
            <span>{garage.city}</span>
          </div>
        </div>
        <span className="rating-pill">
          <Star size={14} fill="currentColor" />
          {garage.rating}
        </span>
      </div>

      <div className="garage-tag-list">
        {garage.services.map((service) => (
          <span key={service} className="tag-pill">
            {service}
          </span>
        ))}
      </div>

      <div className="garage-footer">
        <span className="eta">{garage.eta}</span>
        <div className="garage-actions">
          <Link to="/garages" className="ghost-button small-button">
            {t('garage.view')}
          </Link>
          <Link to="/reservation" className="primary-button small-button">
            {t('garage.request')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
