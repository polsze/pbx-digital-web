import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { servicesData } from '../data/servicesData'
import { siteConfig } from '../data/seoData'
import Button from '../components/shared/Button'
import { trackViewContent, trackContact } from '../utils/metaPixelTracker' // Importar funciones

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)

  // Trackear vista del servicio específico
  useEffect(() => {
    if (service) {
      trackViewContent(service.title)
    }
  }, [service])

  if (!service) {
    return <Navigate to="/servicios" replace />
  }

  // Función para trackear click en WhatsApp
  const handleWhatsAppClick = () => {
    trackContact("whatsapp")
  }

  // Función para trackear click en contacto (para cualquier botón de contacto)
  const handleContactClick = (buttonName = "Contacto desde servicio") => {
    trackViewContent(buttonName)
  }

  // Generar título SEO específico para el servicio
  const seoTitle = `${service.title} | PBX DIGITAL - Agencia en Posadas, Misiones`
  const seoDescription = service.fullDescription || service.description
  const seoKeywords = `${service.title.toLowerCase()}, ${service.features?.join(', ')}, Posadas, Misiones, Argentina`

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/servicios/${slug}/`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.defaultImage}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        <meta name="geo.region" content="AR-N" />
        <meta name="geo.placename" content="Posadas, Misiones" />
      </Helmet>

      {/* Hero del servicio */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a0ff00]/10 via-transparent to-transparent"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#a0ff00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#a0ff00]/10 border border-[#a0ff00]/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#a0ff00] rounded-full mr-2 animate-pulse"></span>
                <span className="text-[#a0ff00] text-sm font-medium">SERVICIOS</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {service.fullDescription || service.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  to="/contacto" 
                  variant="primary" 
                  size="lg"
                  onClick={() => handleContactClick(`Contactar - ${service.title}`)}
                >
                  Contactar
                </Button>
                <Button 
                  href="https://wa.me/5493765252582" 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                >
                  Consultar por WhatsApp
                </Button>
              </div>

              {/* Features rápidos */}
              <div className="mt-8 flex flex-wrap gap-3">
                {service.features?.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="text-9xl mb-6 text-center">{service.icon}</div>
              <div className="grid grid-cols-2 gap-4">
                {service.features?.slice(0, 4).map((feature, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-xl p-4 text-center">
                    <div className="text-[#a0ff00] font-bold text-sm">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-20 bg-black border-t border-[#a0ff00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-6">
                ¿Qué incluye nuestro servicio de{' '}
                <span className="text-[#a0ff00]">{service.title}</span> en Posadas?
              </h2>
              <p className="text-gray-400 mb-8">
                En PBX DIGITAL ofrecemos soluciones digitales completas adaptadas a las necesidades de las empresas.
                Todos nuestros servicios incluyen asesoramiento personalizado y soporte local.
              </p>
              <Button 
                to="/contacto" 
                variant="secondary"
                onClick={() => handleContactClick(`Solicitar presupuesto - ${service.title}`)}
              >
                Solicitar presupuesto
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-xl p-5 hover:border-[#a0ff00]/30 transition-all duration-300 group"
                >
                  <div className="text-[#a0ff00] text-2xl mb-2 group-hover:scale-110 transition-transform">✓</div>
                  <h3 className="text-white font-semibold mb-1">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de beneficios */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ¿Por qué elegir{' '}
              <span className="text-[#a0ff00]">PBX DIGITAL</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Somos la agencia de confianza para empresas que buscan resultados reales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📍', title: 'Expertos locales', description: 'Conocemos el mercado' },
              { icon: '🚀', title: 'Resultados reales', description: 'Enfocados en el crecimiento de tu negocio' },
              { icon: '💬', title: 'Soporte cercano', description: 'Atención personalizada en tu ciudad' },
              { icon: '🏆', title: 'Trayectoria', description: '+3 años trabajando con empresas de todo el país' }
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-xl p-6 text-center hover:border-[#a0ff00]/30 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <h3 className="text-white font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              to="/contacto" 
              variant="primary" 
              size="lg"
              onClick={() => handleContactClick(`Trabajar con PBX - ${service.title}`)}
            >
              Trabajar con PBX DIGITAL
            </Button>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#a0ff00]/10 to-transparent border-t border-[#a0ff00]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            ¿Necesitas {service.title} en Posadas?
          </h2>
          <p className="text-gray-400 mb-8">
            Contactanos ahora y te asesoramos sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              to="/contacto" 
              variant="primary" 
              size="lg"
              onClick={() => handleContactClick(`Solicitar ${service.title}`)}
            >
              Solicitar {service.title}
            </Button>
            <Button 
              href="https://wa.me/5493765252582" 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
            >
              WhatsApp 
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage