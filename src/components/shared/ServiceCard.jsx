import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from './Card'

const ServiceCard = ({ service }) => {
  const { id, title, shortDescription, icon, slug, features, localFocus } = service

  return (
    <Card hover={false} className="h-full flex flex-col bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 group">
      {/* Icono con animación */}
      <motion.div 
        className="text-5xl mb-4 relative"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span className="relative z-10">{icon}</span>
        <div className="absolute inset-0 bg-[#a0ff00]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      {/* Título con badge local si aplica */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-[#a0ff00] transition-colors duration-300">
          {title}
        </h3>
       
      </div>

      {/* Descripción */}
      <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
        {shortDescription}
      </p>

      {/* Features */}
      {features && (
        <ul className="mb-4 space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <motion.li 
              key={index} 
              className="text-sm text-gray-300 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <svg className="w-4 h-4 text-[#a0ff00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>
      )}

      {/* Link con animación */}
      <Link 
        to={`/servicios/${slug}`}
        className="inline-flex items-center text-[#a0ff00] font-semibold hover:text-white mt-2 group/link"
      >
        <span>Conocer más</span>
        <motion.svg 
          className="w-4 h-4 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </motion.svg>
      </Link>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 border border-[#a0ff00] opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
    </Card>
  )
}

export default ServiceCard