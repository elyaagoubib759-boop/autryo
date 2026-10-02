import { ArrowUpRight, BriefcaseBusiness, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export default function Footer() {
  const { t } = useLocale()

  const footerLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.reservation'), path: '/reservation' },
    { name: t('nav.garages'), path: '/garages' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  const serviceLinks = [
    t('services.maintenance.title'),
    t('services.diagnostic.title'),
    t('services.tires.title'),
    t('services.brakes.title'),
    t('services.ac.title'),
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">
              <ArrowUpRight size={18} />
            </span>
            <span className="brand-text">AUTRYO</span>
          </Link>
          <p className="footer-description">{t('footer.description')}</p>
        </div>

        <div>
          <h3>{t('footer.navigation')}</h3>
          <ul className="footer-list">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t('footer.services')}</h3>
          <ul className="footer-list">
            {serviceLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t('footer.contact')}</h3>
          <ul className="footer-list">
            <li>contact@autryo.ma</li>
            <li>+212 5 22 00 00 00</li>
            <li>Tanger, Maroc</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="social-links" aria-label="Réseaux sociaux">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Globe size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <MessageCircle size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <BriefcaseBusiness size={16} />
          </a>
        </div>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
