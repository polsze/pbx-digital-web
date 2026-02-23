import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import { trackViewContent } from '../../utils/metaPixelTracker' // Importar función

const Clients = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Función para trackear cuando se ve la sección (opcional)
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         trackViewContent("Sección Clientes - Home");
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );
  //   
  //   const section = document.getElementById('clientes-section');
  //   if (section) observer.observe(section);
  //   
  //   return () => observer.disconnect();
  // }, []);

  // Función para trackear click en algún cliente específico (opcional)
  const handleClientClick = (clientName) => {
    trackViewContent(`Cliente: ${clientName}`);
  };

  const clients = [
    { 
      id: 1, 
      name: 'Haush Guitars', 
      logo: '/images/logos/haush-guitars-logo.webp',
      logoColor: '/images/logos/haush-logo-color.webp',
      industry: 'Música'
    },
    { 
      id: 2, 
      name: 'Dibrika Construcciones', 
      logo: '/images/logos/Logo Dibrika Vectorizado-Blanco.webp',
      logoColor: '/images/logos/Logo Dibrika Vectorizado-Blanco.webp',
      industry: 'Construcción'
    },
    { 
      id: 3, 
      name: 'DP Distribuidora', 
      logo: '/images/logos/dp-distribuidora-logo.webp',
      logoColor: '/images/logos/dp-distribuidora-logo.webp',
      industry: 'Comercio'
    },
    { 
      id: 4, 
      name: 'Rufina Catering', 
      logo: '/images/logos/rufina-catering-logo.webp',
      logoColor: '/images/logos/rufina-catering-logo.webp',
      industry: 'Eventos'
    },
    { 
      id: 5, 
      name: 'Info Chaltén', 
      logo: '/images/logos/info-chalten-logo.webp',
      logoColor: '/images/logos/info-chalten-logo.webp',
      industry: 'Turismo'
    },
    { 
      id: 6, 
      name: 'Solo Ofertas Carnes', 
      logo: '/images/logos/solo-ofertas-carnes-logo.webp',
      logoColor: '/images/logos/solo-ofertas-carnes-logo.webp',
      industry: 'Carnicería'
    },
    { 
      id: 7, 
      name: 'Wawiflow', 
      logo: '/images/logos/wawiflow-logo.webp',
      logoColor: '/images/logos/wawiflow-logo.webp',
      industry: 'Mensajería Digital'
    },
    { 
      id: 8, 
      name: 'Angora Indumentaria', 
      logo: '/images/logos/angora-indumentaria-logo.webp',
      logoColor: '/images/logos/angora-indumentaria-logo.webp',
      industry: 'Indumentaria'
    },
    { 
      id: 9, 
      name: 'Service Oficial CABA', 
      logo: '/images/logos/service-oficial-caba.webp',
      logoColor: '/images/logos/service-oficial-caba.webp',
      industry: 'Service y Reparación'
    },
    { 
      id: 10, 
      name: 'Yaguaretés Sóftbol', 
      logo: '/images/logos/yaguaretes-softball-logo.webp',
      logoColor: '/images/logos/yaguaretes-softball-logo.webp',
      industry: 'Deporte'
    },
    { 
      id: 11, 
      name: 'Casa Cesar', 
      logo: '/images/logos/casa-cesar-logo.webp',
      logoColor: '/images/logos/casa-cesar-logo.webp',
      industry: 'Comercio'
    },
    { 
      id: 12, 
      name: 'Aura', 
      logo: '/images/logos/aura-logo.webp',
      logoColor: '/images/logos/aura-logo.webp',
      industry: 'Comercio'
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="clientes-section" className="relative py-24 bg-black overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a0ff00]/5 via-transparent to-transparent"></div>
        
        {/* Patrón de puntos muy sutil */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a0ff00 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="EMPRESAS QUE CONFÍAN EN NOSOTROS"
          title="Clientes en "
          highlight="Posadas y en todo el País"
          textWhite={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Empresas de <strong className="text-white">Posadas y todo el País</strong> ya confían en 
          <strong className="text-[#a0ff00]"> PBX DIGITAL</strong> para potenciar su presencia digital y desarrollar soluciones estratégicas a medida.
        </motion.p>

        {/* Grid de logos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              custom={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleClientClick(client.name)} // Trackear click en cliente (opcional)
              className="relative group cursor-pointer" // Añadido cursor-pointer
            >
              <div className="relative aspect-[3/2] bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-[#a0ff00]/30 transition-all duration-300">
                {/* Logo en blanco/gris (estado normal) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6"
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0 : 1,
                    filter: hoveredIndex === index ? 'grayscale(100%) brightness(2)' : 'grayscale(100%) brightness(1.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      filter: 'brightness(0) invert(1) opacity(0.7)',
                    }}
                  />
                </motion.div>

                {/* Logo a color (estado hover) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={client.logoColor || client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>

                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredIndex === index ? '100%' : '-100%' }}
                  transition={{ duration: 0.5 }}
                />

                {/* Borde animado */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a0ff00]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Nombre de la empresa (aparece en hover) */}
              <motion.p
                className="text-center text-xs text-gray-500 mt-2"
                initial={{ opacity: 0, y: -5 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : -5
                }}
                transition={{ duration: 0.2 }}
              >
                {client.name} • {client.industry}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-full px-6 py-3">
            <span className="text-[#a0ff00] text-sm font-medium text-center">
              Hacé que tu Empresa tenga presencia digital.
            </span>
          </div>
        </motion.div>

        {/* Texto adicional SEO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-600 text-xs mt-8 max-w-3xl mx-auto"
        >
          Brindamos desarrollo web, sistemas, marketing digital y campañas en Meta Ads 
          para negocios de Posadas, Garupá, Candelaria y todo el País.
        </motion.p>
      </div>
    </section>
  )
}

export default Clients