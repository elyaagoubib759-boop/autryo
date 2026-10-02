import { useMemo, useState } from 'react'
import { CalendarCheck2, Clock3, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import { useLocation } from '../context/LocationContext'
import { services, garages } from '../data/siteData'

const stepLabels = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8']

export default function ReservationPage() {
  const { t, locale } = useLocale()
  const { city, cities } = useLocation()
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState({
    service: 'maintenance',
    location: city.id,
    date: '2026-10-12',
    time: '10:30',
    provider: 'Garage Atlas',
  })
  const [confirmed, setConfirmed] = useState(false)

  const serviceOptions = useMemo(
    () =>
      services.map((service) => ({
        value: service.id,
        label: t(`services.${service.id}.title`),
      })),
    [t],
  )

  const providerOptions = useMemo(
    () =>
      garages.filter((garage) => garage.city === city.name || garage.city === 'Tanger').map((garage) => ({
        value: garage.name,
        label: `${garage.name} · ${garage.city}`,
      })),
    [city.name],
  )

  const selectedServiceLabel =
    serviceOptions.find((option) => option.value === form.service)?.label ?? form.service

  const selectedProviderLabel =
    providerOptions.find((option) => option.value === form.provider)?.label ?? form.provider

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < stepLabels.length - 1) {
      setCurrentStep((step) => step + 1)
    }
  }

  const submitReservation = () => {
    setConfirmed(true)
    setCurrentStep(stepLabels.length - 1)
  }

  return (
    <main className="page-content container reservation-page">
      <div className="section-header">
        <p className="eyebrow">{t('app.launchCity')}</p>
        <h2>{t('booking.title')}</h2>
        <p className="section-text">{t('booking.subtitle')}</p>
      </div>

      <div className="reservation-layout">
        <div className="reservation-panel card">
          <div className="step-indicator">
            {stepLabels.map((step, index) => (
              <span key={step} className={index <= currentStep ? 'step-dot active' : 'step-dot'}>
                {index + 1}
              </span>
            ))}
          </div>

          <div className="booking-fields">
            <div className="field-row two-columns">
              <label>
                {t('booking.serviceLabel')}
                <select name="service" value={form.service} onChange={handleChange}>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                {t('booking.locationLabel')}
                <select name="location" value={form.location} onChange={handleChange}>
                  {cities.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="field-row two-columns">
              <label>
                {t('booking.dateLabel')}
                <input type="date" name="date" value={form.date} onChange={handleChange} />
              </label>

              <label>
                {t('booking.timeLabel')}
                <input type="time" name="time" value={form.time} onChange={handleChange} />
              </label>
            </div>

            <label>
              {t('booking.providerLabel')}
              <select name="provider" value={form.provider} onChange={handleChange}>
                {providerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="reservation-actions">
            {!confirmed ? (
              <button type="button" className="primary-button" onClick={nextStep}>
                {currentStep === stepLabels.length - 1 ? t('booking.confirmButton') : t('common.continue')}
              </button>
            ) : (
              <button type="button" className="primary-button" onClick={() => setConfirmed(false)}>
                {t('booking.trackButton')}
              </button>
            )}
          </div>
        </div>

        <aside className="reservation-summary feature-panel glass-card">
          <div className="feature-panel-header">
            <Sparkles size={18} />
            <span>{t('booking.title')}</span>
          </div>

          <ul>
            <li>
              <MapPin size={18} />
              <span>{cities.find((entry) => entry.id === form.location)?.name ?? city.name}</span>
            </li>
            <li>
              <CalendarCheck2 size={18} />
              <span>{form.date}</span>
            </li>
            <li>
              <Clock3 size={18} />
              <span>{form.time}</span>
            </li>
            <li>
              <ShieldCheck size={18} />
              <span>{selectedServiceLabel}</span>
            </li>
          </ul>

          {confirmed ? (
            <div className="success-box">
              <p>{t('booking.success')}</p>
              <strong>{selectedProviderLabel}</strong>
            </div>
          ) : (
            <button type="button" className="secondary-button" onClick={submitReservation}>
              {t('booking.confirmButton')}
            </button>
          )}
        </aside>
      </div>

      <div className="reservation-steps">
        {stepLabels.map((step, index) => (
          <div key={step} className={index === currentStep ? 'reservation-step active' : 'reservation-step'}>
            <span>{index + 1}</span>
            <strong>{t(`booking.${step}`)}</strong>
          </div>
        ))}
      </div>
    </main>
  )
}
