import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData";
import ServiceCard from "../shared/ServiceCard";
import SectionTitle from "../shared/SectionTitle";
import Button from "../shared/Button";
import { trackViewContent } from "../../utils/metaPixelTracker"; // Importar función

const ServicesHighlight = () => {
  // Mostrar los primeros 3 servicios destacados
  const highlightedServices = servicesData.slice(0, 3);

  // Función para trackear click en "Ver todos los servicios"
  const handleViewAllClick = () => {
    trackViewContent("Ver todos los servicios - Home");
  };

  // Función para trackear click en cada servicio (opcional - si querés trackear desde acá)
  const handleServiceClick = (serviceName) => {
    trackViewContent(serviceName);
  };

  // Animaciones
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#a0ff00]/5 via-transparent to-transparent"></div>

        {/* Patrón de líneas */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #a0ff00 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a0ff00] to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de ubicación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-[#a0ff00] rounded-full mr-2 animate-pulse"></span>
            <span className="text-[#a0ff00] text-sm font-medium">
              SERVICIOS EN POSADAS Y EN TODO EL PAÍS
            </span>
          </div>
        </motion.div>

        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionTitle
            subtitle="LO QUE OFRECEMOS"
            title="Soluciones digitales y físicas para tu"
            highlight="Negocio"
            align="center"
            textWhite={true}
          />
        </motion.div>

        {/* Descripción SEO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          En <strong className="text-white">PBX DIGITAL</strong> impulsamos
          empresas con
          <strong className="text-white"> marketing digital</strong>,
          <strong className="text-white">
            {" "}
            desarrollo web y de aplicaciones
          </strong>
          , diseño gráfico profesional, gestión estratégica de redes sociales y campañas publicitarias profesionales, 
          producción de merchandising con sublimación e impresión 3D.
        </motion.p>

        {/* Grid de servicios */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {highlightedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleServiceClick(service.title)} // Trackear click en el servicio (opcional)
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA y estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button 
            to="/servicios" 
            variant="secondary" 
            size="lg"
            onClick={handleViewAllClick} // Trackear click
          >
            Ver todos los servicios
          </Button>

          {/* Mini stats de servicios */}
          <div className="flex justify-center items-center space-x-8 mt-8 text-sm">
            <div className="flex items-center text-gray-400">
              <span className="w-1 h-1 bg-[#a0ff00] rounded-full mr-2"></span>
              <span>Marketing Digital</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="w-1 h-1 bg-[#a0ff00] rounded-full mr-2"></span>
              <span>Desarrollo Web & App</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="w-1 h-1 bg-[#a0ff00] rounded-full mr-2"></span>
              <span>Diseño Gráfico</span>
            </div>
            <div className="flex items-center text-gray-400">
              <span className="w-1 h-1 bg-[#a0ff00] rounded-full mr-2"></span>
              <span>Merchandising</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHighlight;