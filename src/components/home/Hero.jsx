import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { contactInfo } from "../../data/navigationData";
import Logo from '/images/pbx-digital-logo.png'
import { trackContact } from "../../utils/metaPixelTracker"; // Importar función

const Hero = () => {
  // Función para trackear click en WhatsApp
  const handleWhatsAppClick = () => {
    trackContact("whatsapp_hero");
  };

  // Función para trackear click en Contacto
  const handleContactClick = () => {
    // Podemos usar trackContact o crear un evento específico
    trackContact("contacto_hero");
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        {/* Gradiente radial */}
        <div className="absolute inset-0 bg-linear-to-br from-[#a0ff00]/5 via-transparent to-transparent"></div>

        {/* Líneas de grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(160, 255, 0, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(160, 255, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Partículas flotantes */}
        <motion.div
          className="absolute top-20 left-[10%] w-2 h-2 bg-[#a0ff00] rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-[15%] w-3 h-3 bg-[#a0ff00] rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-60 right-[25%] w-1 h-1 bg-[#a0ff00] rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenido izquierdo */}
          <div>
            {/* Título principal */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            >
              {" "}
              <span className="text-[#a0ff00]">Agencia de</span>
              <br />
              Marketing Digital y{" "}
              <span className="text-[#a0ff00]">Desarrollo Web</span>
              <br />
              en Posadas, Misiones
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mt-6 mb-8 leading-relaxed"
            >
              Somos una{" "}
              <span className="text-white font-semibold">
                agencia de marketing digital en Posadas Misiones
              </span>{" "}
              especializada en{" "}
              <span className="text-white font-semibold">desarrollo web</span>,{" "}
              <span className="text-white font-semibold">
                programación a medida
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                diseño gráfico profesional
              </span>{" "}
              y{" "}
              <span className="text-white font-semibold">
                campañas publicitarias
              </span>
              . Impulsamos empresas locales con estrategias digitales y
              soluciones de alto impacto.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contacto"
                  onClick={handleContactClick} // Trackear click
                  className="inline-flex items-center px-8 py-4 bg-[#a0ff00] text-black font-bold rounded-lg hover:bg-[#8cdf00] transition-all duration-300 shadow-lg shadow-[#a0ff00]/20"
                >
                  Contactese!
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/5493765252582?text=Hola%20PBX%20DIGITAL%2C%20visité%20su%20página%20web%20y%20quiero%20consultar%20por%20sus%20servicios%20digitales"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#a0ff00] text-[#a0ff00] font-bold rounded-lg hover:bg-[#a0ff00] hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Imagen derecha */}
          <motion.div
            variants={imageVariants}
            className="hidden md:block relative"
          >
            {/* Círculo decorativo */}
            <motion.div
              className="absolute -top-10 -right-10 w-64 h-64 bg-[#a0ff00]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Imagen principal */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10"
            >
              <div className="relative">
                <img
                  src={Logo}
                  alt="Logo PBX DIGITAL marketing digital en Posadas Misiones"
                  className="rounded-2xl shadow-2xl shadow-[#a0ff00]/10 h-40"
                />

                {/* Overlay con gradiente */}
                <div className="absolute xl:right-40 xl:-top-4 inset-0 rounded-2xl bg-gradient-to-tr from-black/30 via-transparent to-[#a0ff00]/20"></div>

               
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;