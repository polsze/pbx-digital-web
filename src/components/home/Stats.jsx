import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trackViewContent } from "../../utils/metaPixelTracker"; // Importar función

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "30+",
      label: "Clientes en Posadas y todo el país",
      icon: "🤝",
      description: "Empresas que confían en nosotros",
    },
    {
      number: "3+",
      label: "Años en Posadas",
      icon: "📅",
      description: "Experiencia en el mercado local",
    },
    {
      number: "100+",
      label: "Proyectos realizados",
      icon: "🚀",
      description: "En marketing, desarrollo y diseño",
    },
    {
      number: "24/7",
      label: "Soporte local",
      icon: "⚡",
      description: "Atención personalizada en Posadas",
    },
  ];

  // Trackear cuando la sección es visible (opcional)
  // useEffect(() => {
  //   if (isInView) {
  //     trackViewContent("Sección Stats - Home");
  //   }
  // }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Fondo con gradiente dinámico */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a0ff00]/5 via-transparent to-transparent"></div>

        {/* Líneas de grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(160, 255, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-2xl p-6 text-center hover:border-[#a0ff00]/30 transition-all duration-300">
                {/* Icono con animación */}
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">{stat.icon}</span>
                  <div className="absolute inset-0 bg-[#a0ff00]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Número animado */}
                <motion.div
                  className="text-3xl md:text-4xl font-black text-[#a0ff00] mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-white font-semibold mb-2">{stat.label}</h3>

                {/* Descripción */}
                <p className="text-gray-500 text-xs">{stat.description}</p>

                {/* Barra decorativa */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#a0ff00] group-hover:w-12 transition-all duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto adicional SEO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto"
        >
          <span className="text-[#a0ff00] font-semibold">PBX DIGITAL</span> es
          una
          <span className="text-white">
            {" "}
            agencia de marketing digital en Posadas &nbsp;
          </span>
           especializada en desarrollo web, posicionamiento SEO y campañas
          publicitarias para empresas que buscan crecer en el entorno digital.
        </motion.p>
      </div>
    </section>
  );
};

export default Stats;