import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo, socialLinks } from "../data/navigationData";
import { seoData, siteConfig } from "../data/seoData";
import Button from "../components/shared/Button";
import Modal from "../components/shared/Modal";
import { trackLead, trackContact } from "../utils/metaPixelTracker";

const ContactoPage = () => {
  const formRef = useRef();
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Track LEAD cuando el formulario se envía con éxito
          trackLead({
            content_name: "Formulario Contacto",
            status: "success",
            page: "contacto"
          });

          setModal({
            isOpen: true,
            title: "¡Mensaje enviado! 🚀",
            message: "Gracias por contactarte con PBX DIGITAL. Te responderemos a la brevedad.",
            type: "success"
          });
          formRef.current.reset();
        },
        (error) => {
          console.error("ERROR:", error);
          
          // Track LEAD fallido (opcional)
          trackLead({
            content_name: "Formulario Contacto",
            status: "error",
            page: "contacto"
          });

          setModal({
            isOpen: true,
            title: "Error al enviar",
            message: "Hubo un problema al enviar tu mensaje. Por favor, intentá nuevamente o contactanos por WhatsApp.",
            type: "error"
          });
        }
      );
  };

  // Función para trackear clicks en WhatsApp
  const handleWhatsAppClick = () => {
    trackContact("whatsapp");
  };

  // Función para trackear clicks en teléfono
  const handlePhoneClick = () => {
    trackContact("phone");
  };

  // Función para trackear clicks en email
  const handleEmailClick = () => {
    trackContact("email");
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoData.contacto.title}</title>
        <meta name="description" content={seoData.contacto.description} />
        <meta name="keywords" content={seoData.contacto.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.url}/contacto/`} />
        <meta property="og:title" content={seoData.contacto.title} />
        <meta
          property="og:description"
          content={seoData.contacto.description}
        />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.defaultImage}`}
        />
      </Helmet>

      {/* Hero de contacto */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a0ff00]/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a0ff00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Contactá con <span className="text-[#a0ff00]">PBX DIGITAL</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Estamos en Posadas, Misiones, para asesorarte en
              desarrollo web, sistemas y marketing digital. Asesoramiento
              rápido por WhatsApp y email.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={`https://wa.me/${contactInfo.whatsapp.replace(
                  "https://wa.me/",
                  ""
                )}`}
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick} // Trackear click
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulario y contacto */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Formulario */}
            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Enviános un mensaje
              </h2>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-black border border-[#a0ff00]/20 rounded-lg text-white focus:border-[#a0ff00] focus:outline-none transition-colors"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-black border border-[#a0ff00]/20 rounded-lg text-white focus:border-[#a0ff00] focus:outline-none transition-colors"
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Teléfono (con WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-black border border-[#a0ff00]/20 rounded-lg text-white focus:border-[#a0ff00] focus:outline-none transition-colors"
                    placeholder="+54 376 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-black border border-[#a0ff00]/20 rounded-lg text-white focus:border-[#a0ff00] focus:outline-none transition-colors"
                    placeholder="Contanos tu proyecto"
                  ></textarea>
                </div>
                <Button type="submit" fullWidth>
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>

            {/* Información de contacto - resto igual */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contacto directo
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-black/20 rounded-xl hover:bg-[#a0ff00]/5 transition-colors">
                    <div className="w-10 h-10 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] mr-4">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Dirección</h3>
                      <p className="text-gray-400">
                        Posadas, Misiones - Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-black/20 rounded-xl hover:bg-[#a0ff00]/5 transition-colors">
                    <div className="w-10 h-10 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] mr-4">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Teléfono</h3>
                      <a 
                        href={`tel:${contactInfo.phone}`} 
                        onClick={handlePhoneClick}
                        className="text-gray-400 hover:text-[#a0ff00] transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-xs text-[#a0ff00]/60 mt-1">
                        Llamadas de 8 a 20hs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-black/20 rounded-xl hover:bg-[#a0ff00]/5 transition-colors">
                    <div className="w-10 h-10 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] mr-4">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        onClick={handleEmailClick}
                        className="text-gray-400 hover:text-[#a0ff00] transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                      <p className="text-xs text-[#a0ff00]/60 mt-1">
                        Respuesta en 24hs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-black/20 rounded-xl hover:bg-[#a0ff00]/5 transition-colors">
                    <div className="w-10 h-10 bg-[#a0ff00]/10 rounded-lg flex items-center justify-center text-[#a0ff00] mr-4">
                      💬
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">WhatsApp</h3>
                      <Button
                        href={contactInfo.whatsapp}
                        variant="whatsapp"
                        size="sm"
                        className="mt-2"
                        onClick={handleWhatsAppClick}
                      >
                        Chatear ahora
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-black/40 backdrop-blur-sm border border-[#a0ff00]/10 rounded-2xl p-8">
                <h3 className="font-semibold text-white mb-4">
                  Seguinos en redes
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-purple-600/20 transition-all"
                  >
                     <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
                  </motion.a>
                  <motion.a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/20 transition-all"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal personalizado */}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </>
  );
};

export default ContactoPage;