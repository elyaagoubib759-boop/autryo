import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { LocaleProvider } from './context/LocaleContext'
import { LocationProvider } from './context/LocationContext'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GaragesPage from './pages/GaragesPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ReservationPage from './pages/ReservationPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <LocaleProvider>
      <LocationProvider>
        <BrowserRouter>
          <div className="app-shell">
            <Navbar />
            <main className="page-shell">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/garages" element={<GaragesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LocationProvider>
    </LocaleProvider>
  )
}

export default App
