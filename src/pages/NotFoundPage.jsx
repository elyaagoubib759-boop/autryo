import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export default function NotFoundPage() {
  const { t } = useLocale()

  return (
    <main className="page-content container not-found">
      <div className="not-found-box">
        <h1>404</h1>
        <p>{t('notFound.message')}</p>
        <Link to="/" className="primary-button">
          {t('notFound.back')}
        </Link>
      </div>
    </main>
  )
}
