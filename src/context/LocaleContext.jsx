import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, getTranslator, localeOptions, supportedLocales, translations } from '../i18n'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const saved = window.localStorage.getItem('autryo-locale')
    return supportedLocales.includes(saved) ? saved : defaultLocale
  })

  const localeMeta = useMemo(
    () => localeOptions.find((option) => option.code === locale) ?? localeOptions[0],
    [locale],
  )

  const t = useMemo(() => getTranslator(locale), [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = localeMeta.dir
    window.localStorage.setItem('autryo-locale', locale)
  }, [locale, localeMeta.dir])

  const setLocale = (nextLocale) => {
    if (supportedLocales.includes(nextLocale)) {
      setLocaleState(nextLocale)
    }
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      localeOptions,
      localeMeta,
      translations,
    }),
    [locale, localeMeta, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
