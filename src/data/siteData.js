import {
  CarFront,
  CheckCircle2,
  Droplets,
  Gauge,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  PaintBucket,
  Phone,
  ShieldCheck,
  Star,
  Wind,
  Wrench,
} from 'lucide-react'

export const services = [
  { id: 'maintenance', icon: Wrench },
  { id: 'diagnostic', icon: Gauge },
  { id: 'tires', icon: CarFront },
  { id: 'brakes', icon: ShieldCheck },
  { id: 'ac', icon: Wind },
  { id: 'body', icon: PaintBucket },
  { id: 'oil', icon: Droplets },
  { id: 'assistance', icon: LifeBuoy },
]

export const garages = [
  { name: 'Garage Atlas', city: 'Tanger', services: ['Diagnostic', 'Freinage', 'Entretien'], rating: 4.9, eta: '30 min' },
  { name: 'Auto Prime', city: 'Casablanca', services: ['Pneus', 'Climatisation', 'Vidange'], rating: 4.8, eta: '25 min' },
  { name: 'Moteur Elite', city: 'Rabat', services: ['Carrosserie', 'Diagnostic', 'Assistance'], rating: 5.0, eta: '40 min' },
  { name: 'Nour Auto', city: 'Marrakech', services: ['Entretien', 'Pneus', 'Freinage'], rating: 4.7, eta: '35 min' },
]

export const steps = [
  { titleKey: 'booking.step1', descriptionKey: 'booking.step1' },
  { titleKey: 'booking.step2', descriptionKey: 'booking.step2' },
  { titleKey: 'booking.step3', descriptionKey: 'booking.step3' },
]

export const reasons = [
  'Garages vérifiés et fiables',
  'Réservation rapide et transparente',
  'Tarification claire avant intervention',
  'Disponibilité dans toutes les villes du Maroc',
  'Support client en français et en arabe',
  'Expérience premium pensée pour les conducteurs',
]

export const testimonials = [
  {
    name: 'Yassine B.',
    city: 'Tanger',
    quote: 'AUTRYO a rapidement mis en relation mon véhicule avec un garage fiable et très pro.',
    rating: 5,
  },
  {
    name: 'Salma A.',
    city: 'Casablanca',
    quote: 'Le parcours de réservation est clair, rapide et on se sent bien accompagné.',
    rating: 5,
  },
  {
    name: 'Omar L.',
    city: 'Rabat',
    quote: 'La plateforme inspire confiance et la qualité des garages est très nette.',
    rating: 5,
  },
]

export const stats = [
  { value: '1 200+', label: 'prestations réalisées' },
  { value: '96%', label: 'clients satisfaits' },
  { value: '120', label: 'garages partenaires' },
]

export const contactDetails = [
  { icon: Phone, label: '+212 5 22 00 00 00', href: 'tel:+212522000000' },
  { icon: Mail, label: 'contact@autryo.ma', href: 'mailto:contact@autryo.ma' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/212600000000' },
]

export const featureIcons = {
  check: CheckCircle2,
  star: Star,
  map: MapPin,
}
