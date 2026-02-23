import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { contactInfo, footerServices, socialLinks } from '../../data/navigationData'
import Logo from '/images/pbx-digital-logo.png'
import { trackContact } from '../../utils/metaPixelTracker' // Importar función

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Funciones para trackear clicks
  const handleWhatsAppClick = () => {
    trackContact("whatsapp")
  }

  const handlePhoneClick = () => {
    trackContact("phone")
  }

  const handleEmailClick = () => {
    trackContact("email")
  }

  const handleInstagramClick = () => {
    trackContact("instagram")
  }

  const handleFacebookClick = () => {
    trackContact("facebook")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="relative bg-black border-t border-[#a0ff00]/10 overflow-hidden">
      {/* Fondo con efecto */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#a0ff00]/5 via-transparent to-transparent"></div>
        
        {/* Líneas de grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(160, 255, 0, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(160, 255, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Columna 1 - Marca y ubicación */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Logo con imagen */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="PBX DIGITAL - Agencia en Posadas, Misiones"
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Agencia de marketing digital, desarrollo de apps, diseño gráfico y merchandising físico.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-3 pt-2">
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={handleInstagramClick} // Trackear click
                className="w-8 h-8 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] hover:bg-[#a0ff00] hover:text-black transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </motion.a>
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={handleFacebookClick} // Trackear click
                className="w-8 h-8 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] hover:bg-[#a0ff00] hover:text-black transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#a0ff00] text-sm transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#a0ff00] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-[#a0ff00] text-sm transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#a0ff00] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-[#a0ff00] text-sm transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#a0ff00] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3 - Servicios */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-[#a0ff00] rounded-full mr-2 group-hover:mr-3 transition-all"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4 - Contacto local */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#a0ff00] mr-3 text-lg">📍</span>
                <span className="text-gray-400 text-sm">Posadas, Misiones<br />Argentina</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#a0ff00] mr-3">📞</span>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  onClick={handlePhoneClick} // Trackear click
                  className="text-gray-400 hover:text-[#a0ff00] text-sm transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-[#a0ff00] mr-3">✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  onClick={handleEmailClick} // Trackear click
                  className="text-gray-400 hover:text-[#a0ff00] text-sm transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-[#a0ff00] mr-3">💬</span>
                <a 
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick} // Trackear click
                  className="inline-flex items-center px-3 py-1 bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-lg text-[#a0ff00] text-xs hover:bg-[#a0ff00] hover:text-black transition-all duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Barra inferior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-[#a0ff00]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-xs">
              © {currentYear} <span className="text-[#a0ff00]">PBX DIGITAL</span>. Todos los derechos reservados.
            </p>
          </div>

          {/* Línea decorativa inferior */}
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#a0ff00]/20 to-transparent"></div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer