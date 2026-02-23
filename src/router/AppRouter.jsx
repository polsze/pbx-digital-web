import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import ServiciosPage from '../pages/ServiciosPage'
import ContactoPage from '../pages/ContactoPage'
import NotFoundPage from '../pages/NotFoundPage'
import ServiceDetailPage from '../pages/ServiceDetailPage' // Nuevo

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="servicios/:slug" element={<ServiceDetailPage />} /> {/* Nueva ruta dinámica */}
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter