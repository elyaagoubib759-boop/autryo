import ar from './ar.js'
import en from './en.js'
import es from './es.js'
import fr from './fr.js'

export const translations = { fr, ar, en, es }

export const localeOptions = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦', dir: 'rtl' },
  { code: 'en', label: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
]

export const supportedLocales = localeOptions.map((item) => item.code)

export const defaultLocale = 'fr'

export const cityCatalog = [
  { id: 'tanger', name: 'Tanger', country: 'Morocco', region: 'Nord' },
  { id: 'casablanca', name: 'Casablanca', country: 'Morocco', region: 'Centre' },
  { id: 'rabat', name: 'Rabat', country: 'Morocco', region: 'Centre' },
  { id: 'marrakech', name: 'Marrakech', country: 'Morocco', region: 'Sud' },
  { id: 'fes', name: 'Fès', country: 'Morocco', region: 'Nord' },
  { id: 'paris', name: 'Paris', country: 'France', region: 'Europe' },
  { id: 'dubai', name: 'Dubai', country: 'UAE', region: 'Middle East' },
]

export const defaultCityId = 'tanger'

export const getTranslator = (locale = defaultLocale) => {
  const dictionary = translations[locale] ?? translations[defaultLocale]

  return (path, fallback = '') => {
    const keys = path.split('.')
    let value = dictionary

    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) {
        return fallback
      }
    }

    return value
  }
}
