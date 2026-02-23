import { motion } from 'framer-motion'
import { servicesData } from '../../data/servicesData'
import ServiceCard from '../shared/ServiceCard'
import SectionTitle from '../shared/SectionTitle'

const ServicesGrid = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="relative py-20 bg-black">
      {/* Fondo con grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a0ff00]/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a0ff00 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.1
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <SectionTitle 
          subtitle="SOLUCIONES COMPLETAS"
          title="Todos nuestros"
          highlight="servicios"
          textWhite={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-12"
        >
          En PBX DIGITAL ayudamos a empresas de Posadas y todo el país con
              desarrollo web, campañas en Meta Ads, gestión de redes sociales y
              productos personalizados con sublimación e impresión 3D.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants} custom={index}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje de ubicación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-[#a0ff00]/5 border border-[#a0ff00]/10 rounded-2xl"
        >
          <p className="text-gray-300">
            📍 <span className="text-white font-semibold">Todos nuestros servicios están disponibles en Posadas y en todo el país.</span><br />
            Trabajamos con empresas locales para impulsar su crecimiento con estrategias digitales y productos personalizados.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid