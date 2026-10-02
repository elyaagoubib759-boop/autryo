import { MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { useLocale } from '../context/LocaleContext'
import { contactDetails } from '../data/siteData'

export default function ContactPage() {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <main className="page-content container contact-page">
      <SectionHeader
        eyebrow={t('nav.contact')}
        title={t('contact.title')}
        text={t('contact.subtitle')}
      />

      <div className="contact-layout">
        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              {t('contact.name')}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.name')}
                required
              />
            </label>
          </div>

          <div className="field-row two-columns">
            <label>
              {t('contact.phone')}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.phone')}
                required
              />
            </label>
            <label>
              {t('contact.email')}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.email')}
                required
              />
            </label>
          </div>

          <label>
            {t('contact.message')}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.message')}
              rows="5"
              required
            />
          </label>

          <button type="submit" className="primary-button submit-button">
            {t('contact.send')}
            <Send size={16} />
          </button>

          {submitted ? <p className="form-success">{t('contact.success')}</p> : null}
        </form>

        <aside className="contact-sidebar">
          <div className="feature-panel glass-card">
            <h3>{t('footer.contact')}</h3>
            <ul>
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <Icon size={18} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="https://wa.me/212600000000" className="secondary-button whatsapp-button large-whatsapp" target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            {t('contact.whatsapp')}
          </a>
        </aside>
      </div>
    </main>
  )
}
