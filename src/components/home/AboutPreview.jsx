import { motion } from "framer-motion";
import Button from "../shared/Button";
import { servicesData } from "../../data/servicesData";
import PbxOffice from "/images/pbx-digital-office-desktop-posadas-misiones.png";
import { trackViewContent, trackContact } from "../../utils/metaPixelTracker"; // Importar funciones

const AboutPreview = () => {
  // Contar servicios
  const marketingCount = servicesData.filter((s) =>
    s.title.includes("Marketing")
  ).length;
  const devCount = servicesData.filter((s) =>
    s.title.includes("Programación")
  ).length;
  const designCount = servicesData.filter((s) =>
    s.title.includes("Diseño")
  ).length;
  const merchCount = servicesData.filter((s) =>
    s.title.includes("Merchandising")
  ).length;

  // Función para trackear click en el CTA
  const handleCTAClick = () => {
    trackViewContent("CTA Trabajemos juntos - About Preview");
  };

  // Función para trackear click en Marketing & Ads (si se hiciera clickeable)
  const handleMarketingClick = () => {
    trackViewContent("Marketing & Ads - About Preview");
  };

  // Función para trackear click en Desarrollo & Tecnología (si se hiciera clickeable)
  const handleDevClick = () => {
    trackViewContent("Desarrollo & Tecnología - About Preview");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: 30, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Fondo con efecto */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#a0ff00]/5 via-transparent to-transparent"></div>

        {/* Líneas diagonales */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #a0ff00 0px, #a0ff00 1px, transparent 1px, transparent 20px)`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Imagen */}
          <motion.div
            variants={imageVariants}
            className="relative order-2 md:order-1"
          >
            <div className="relative">
              <img
                src={PbxOffice}
                alt="Oficina PBX DIGITAL en Posadas - Equipo de marketing y desarrollo"
                className="rounded-2xl shadow-2xl shadow-[#a0ff00]/10"
              />

              {/* Overlay con gradiente */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/50 via-transparent to-[#a0ff00]/20"></div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            {/* Badge local */}
            <div className="inline-flex items-center bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#a0ff00] rounded-full mr-2 animate-pulse"></span>
              <span className="text-[#a0ff00] text-sm font-medium">
                AGENCIA DE MARKETING DIGITAL EN POSADAS
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Soluciones digitales estratégicas en{" "}
              <span className="text-[#a0ff00]">Posadas</span>
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              En <strong className="text-white">PBX DIGITAL</strong> integramos{" "}
              <strong className="text-[#a0ff00]">marketing digital</strong>,{" "}
              <strong className="text-[#a0ff00]">desarrollo web</strong> y{" "}
              <strong className="text-[#a0ff00]">publicidad online</strong> para
              ayudar a empresas de{" "}
              <strong className="text-white">Posadas</strong> a crecer,
              posicionarse en Google y generar más ventas.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Además, producimos{" "}
              <strong className="text-white">
                merchandising personalizado
              </strong>{" "}
              con sublimación e impresión 3D propia, ofreciendo soluciones
              integrales que combinan presencia digital y productos físicos para
              potenciar marcas locales.
            </p>

            {/* Grid de autoridad */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div 
                className="bg-black/40 border border-[#a0ff00]/10 rounded-xl p-4 hover:border-[#a0ff00]/30 transition-all duration-300 cursor-pointer"
                onClick={handleMarketingClick} // Trackear click (opcional)
              >
                <div className="text-2xl font-bold text-[#a0ff00] mb-1">
                  Marketing & Ads
                </div>
                <div className="text-sm text-gray-400">
                  Estrategias digitales en Posadas
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  SEO · Meta Ads · Google Ads
                </div>
              </div>

              <div 
                className="bg-black/40 border border-[#a0ff00]/10 rounded-xl p-4 hover:border-[#a0ff00]/30 transition-all duration-300 cursor-pointer"
                onClick={handleDevClick} // Trackear click (opcional)
              >
                <div className="text-2xl font-bold text-[#a0ff00] mb-1">
                  Desarrollo & Tecnología
                </div>
                <div className="text-sm text-gray-400">
                  Soluciones web a medida
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Webs · Apps · Sistemas
                </div>
              </div>
            </div>

            {/* CTA y ubicación */}
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                to="/contacto" 
                variant="primary" 
                size="lg"
                onClick={handleCTAClick} // Trackear click
              >
                Trabajemos juntos
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;