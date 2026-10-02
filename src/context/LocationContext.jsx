import { createContext, useContext, useMemo, useState } from 'react'
import { cityCatalog, defaultCityId } from '../i18n'

const LocationContext = createContext(null)

export function LocationProvider({ children }) {
  const [cityId, setCityIdState] = useState(() => {
    const saved = window.localStorage.getItem('autryo-city')
    return cityCatalog.some((city) => city.id === saved) ? saved : defaultCityId
  })

  const city = useMemo(
    () => cityCatalog.find((entry) => entry.id === cityId) ?? cityCatalog[0],
    [cityId],
  )

  const setCityId = (nextCityId) => {
    if (cityCatalog.some((city) => city.id === nextCityId)) {
      setCityIdState(nextCityId)
      window.localStorage.setItem('autryo-city', nextCityId)
    }
  }

  const value = useMemo(
    () => ({
      city,
      cityId,
      cities: cityCatalog,
      setCityId,
    }),
    [city, cityId],
  )

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export function useLocation() {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error('useLocation must be used within LocationProvider')
  }

  return context
}
