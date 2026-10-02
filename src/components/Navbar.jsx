import { useState } from 'react'
import { ArrowRight, CarFront, ChevronDown, MapPin, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { useLocation } from '../context/LocationContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale, localeOptions } = useLocale()
  const { city, cities, setCityId } = useLocation()

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/reservation', label: t('nav.reservation') },
    { path: '/garages', label: t('nav.garages') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="AUTRYO home">
          <span className="brand-mark">
            <CarFront size={18} />
          </span>
          <span className="brand-text">AUTRYO</span>
        </Link>

        <div className="toolbar-group">
          <label className="toolbar-field">
            <MapPin size={14} />
            <select value={city.id} onChange={(event) => setCityId(event.target.value)}>
              {cities.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="toolbar-field">
            <span>{t('nav.language')}</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              {localeOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.flag} {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} />
          </label>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/reservation" className="primary-button compact-button" onClick={() => setMenuOpen(false)}>
            {t('nav.serviceCta')}
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
