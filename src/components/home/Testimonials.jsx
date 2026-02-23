import { motion } from 'framer-motion'
import { testimonialsData } from '../../data/testimonialsData'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Fondo con efecto de testimonial */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#a0ff00]/5 via-transparent to-transparent"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#a0ff00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#a0ff00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="CLIENTES FELICES EN POSADAS"
          title="Lo que dicen nuestros clientes en "
          highlight="Misiones"
          textWhite={true}
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 hover:border-[#a0ff00]/30 transition-all duration-300">
                {/* Comillas decorativas */}
                <div className="text-6xl text-[#a0ff00]/20 leading-none mb-2">"</div>

                {/* Contenido del testimonio */}
                <p className="text-gray-300 italic flex-grow mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex mb-4 text-[#a0ff00]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Información del cliente */}
                <div className="flex items-center border-t border-[#a0ff00]/10 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a0ff00]/20 to-[#a0ff00]/5 rounded-full overflow-hidden mr-4 border border-[#a0ff00]/20">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#a0ff00] text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                    <span className="text-[10px] text-[#a0ff00]/60">Cliente en Posadas</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge de reputación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-full px-6 py-3">
            <span className="text-[#a0ff00] text-sm font-medium">⭐ 5 ESTRELLAS EN GOOGLE - EMPRESA CONFIABLE EN POSADAS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials