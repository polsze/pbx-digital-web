import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ServicesGrid from "../components/servicios/ServicesGrid";
import { seoData, siteConfig } from "../data/seoData";
import Button from "../components/shared/Button";
import { trackViewContent, trackContact } from "../utils/metaPixelTracker"; // Importar funciones

const ServiciosPage = () => {
  // Trackear ViewContent cuando se carga la página de servicios
  useEffect(() => {
    trackViewContent("Página de Servicios - PBX DIGITAL");
  }, []);

  // Función para trackear click en WhatsApp
  const handleWhatsAppClick = () => {
    trackContact("whatsapp");
  };

  // Función para trackear click en cada servicio (opcional - si tenés links a detalles)
  const handleServiceClick = (serviceName) => {
    trackViewContent(serviceName);
  };

  return (
    <>
      <Helmet>
        <title>{seoData.servicios.title}</title>
        <meta name="description" content={seoData.servicios.description} />
        <meta name="keywords" content={seoData.servicios.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/servicios/`} />
        <meta property="og:title" content={seoData.servicios.title} />
        <meta
          property="og:description"
          content={seoData.servicios.description}
        />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.defaultImage}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.servicios.title} />
        <meta
          name="twitter:description"
          content={seoData.servicios.description}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="AR-N" />
        <meta name="geo.placename" content="Posadas" />
        <meta name="geo.position" content="-27.3621;-55.9009" />
      </Helmet>

      {/* Hero de servicios */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a0ff00]/10 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#a0ff00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Agencia de{" "}
              <span className="text-[#a0ff00]">Marketing Digital</span>
              <br />y <span className="text-[#a0ff00]">Merchandising</span> en
              Posadas
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              En PBX DIGITAL ayudamos a empresas de todo el país con
              desarrollo web, campañas en Meta Ads, gestión de redes sociales y
              productos personalizados con sublimación e impresión 3D.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contacto" variant="primary" size="lg">
                Solicitar presupuesto
              </Button>
              <Button
                href="https://wa.me/5493765252582"
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick} // Trackear click
              >
                Hablar por WhatsApp
              </Button>
            </div>

            {/* Tags de servicios rápidos */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[
                "Marketing Digital en Posadas",
                "Desarrollo Web & App En Posadas",
                "Diseño Gráfico en Posadas",
                "Gestión de Redes Sociales en Posadas",
                "Sublimación e impresión en Posadas",
                "Impresión 3D en Posadas",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesGrid />

      {/* Sección de CTA final */}
      <section className="relative py-20 bg-black border-t border-[#a0ff00]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿Necesitas un servicio personalizado?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contanos tu idea y te asesoramos sin compromiso. Tenemos la
              solución que tu negocio necesita.
            </p>
            <Button 
              to="/contacto" 
              variant="secondary" 
              size="lg"
              // Opcional: trackear click en CTA
              onClick={() => trackViewContent("CTA Final - Servicios")}
            >
              Solicitar presupuesto
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiciosPage;