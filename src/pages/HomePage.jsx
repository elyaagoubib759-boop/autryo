import { ArrowRight, BadgeCheck, CheckCircle2, ChevronRight, MessageCircle, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import GarageCard from '../components/GarageCard'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { useLocale } from '../context/LocaleContext'
import { useLocation } from '../context/LocationContext'
import { garages, services, stats, testimonials } from '../data/siteData'

export default function HomePage() {
  const { t } = useLocale()
  const { city } = useLocation()

  const serviceCards = services.map((service) => ({
    ...service,
    title: t(`services.${service.id}.title`),
    description: t(`services.${service.id}.description`),
  }))

  const reasons = [
    'Garages vérifiés et fiables',
    'Réservation rapide et transparente',
    'Tarification claire avant intervention',
    'Disponibilité dans toutes les villes du Maroc',
    'Support client multilingue',
    'Expérience premium pensée pour les conducteurs',
  ]

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t('home.eyebrow')}</p>
            <h1>{t('home.headline')}</h1>
            <p className="lead-text">{t('home.subtitle')}</p>
            <p className="lead-text secondary-lead">{t('home.lead')}</p>
            <div className="hero-actions">
              <Link to="/reservation" className="primary-button">
                {t('home.primary')}
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="secondary-button">
                {t('home.secondary')}
              </Link>
            </div>
            <div className="hero-meta">
              <span>
                <BadgeCheck size={16} />
                {t('home.verified')}
              </span>
              <span>
                <BadgeCheck size={16} />
                {t('home.quick')}
              </span>
            </div>
            <div className="launch-pill">{city.name}, Morocco · {t('app.launchCity')}</div>
          </div>

          <div className="hero-visual" aria-label="Illustration de garage automobile">
            <div className="car-card glass-card">
              <div className="car-card-top">
                <span className="status-pill">Disponible</span>
                <span className="rating-pill hero-rating">
                  <Star size={14} fill="currentColor" />
                  4.9
                </span>
              </div>
              <div className="car-illustration">
                <div className="car-body">
                  <span className="window"></span>
                  <span className="wheel wheel-front"></span>
                  <span className="wheel wheel-back"></span>
                </div>
              </div>
              <div className="service-summary">
                <div>
                  <small>{t('home.nextService')}</small>
                  <strong>{t('services.diagnostic.title')}</strong>
                </div>
                <span>18 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeader
            eyebrow="AUTRYO"
            title={t('services.title')}
            text={t('services.subtitle')}
          />
          <div className="cards-grid services-grid">
            {serviceCards.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-block">
        <div className="container">
          <SectionHeader
            eyebrow="Autryo"
            title="Une expérience simple en 3 étapes"
            text="AUTRYO vous aide à trouver le bon garage, au bon moment, sans stress."
          />
          <div className="steps-grid">
            {[
              { title: t('booking.step1'), description: 'Indiquez le type de service ou le problème de votre voiture.' },
              { title: t('booking.step2'), description: 'Comparez les disponibilités selon votre ville et votre créneau.' },
              { title: t('booking.step7'), description: 'Confirmez votre demande et suivez son avancement.' },
            ].map((step, index) => (
              <div className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
            <SectionHeader
              eyebrow="Pourquoi AUTRYO"
              title="Une plateforme premium pensée pour les conducteurs"
              text="Nous unissons expertise locale, fiabilité et simplicité pour rendre les services automobiles plus accessibles."
            />
            <div className="check-list">
              {reasons.map((reason) => (
                <div key={reason} className="check-item">
                  <CheckCircle2 size={18} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-panel glass-card">
            <div className="feature-panel-header">
              <ShieldCheck size={20} />
              <span>{t('home.trust')}</span>
            </div>
            <ul>
              <li>Garages qualifiés et audités</li>
              <li>Suivi des services en temps réel</li>
              <li>Tarifs transparents et sans surprise</li>
              <li>Support multilingue dès le lancement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block alt-block">
        <div className="container">
          <SectionHeader
            eyebrow="Partenaires"
            title={t('home.partnerTitle')}
            text={t('home.partnerText')}
          />
          <div className="cards-grid garage-grid">
            {garages.slice(0, 3).map((garage) => (
              <GarageCard key={garage.name} garage={garage} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeader
            eyebrow="Avis clients"
            title="Ils nous font confiance"
            text="La satisfaction de nos utilisateurs guide chaque amélioration de l’expérience AUTRYO."
            center
          />
          <div className="cards-grid testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="card testimonial-card" key={testimonial.name}>
                <div className="stars">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow">{t('home.ctaReady')}</p>
            <h2>{t('home.ctaTitle')}</h2>
          </div>
          <div className="final-actions">
            <Link to="/reservation" className="primary-button">
              {t('nav.serviceCta')}
              <ChevronRight size={18} />
            </Link>
            <a href="https://wa.me/212600000000" className="secondary-button whatsapp-button" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {t('home.ctaWhatsapp')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
