import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

/* ================================
   FUNCIONES GLOBALES DE EVENTOS
================================ */

// LEAD (Formulario enviado)
export const trackLead = (data = {}) => {
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Formulario Contacto",
      ...data,
    });
  }
};

// CONTACT (WhatsApp, Teléfono, Email)
export const trackContact = (method = "whatsapp") => {
  if (window.fbq) {
    window.fbq("track", "Contact", {
      contact_method: method,
    });
  }
};

// VIEW CONTENT (Página de servicio específica)
export const trackViewContent = (contentName = "Servicio") => {
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
    });
  }
};

// SCHEDULE (Reserva de llamada)
export const trackSchedule = () => {
  if (window.fbq) {
    window.fbq("track", "Schedule");
  }
};

// COMPLETE REGISTRATION (Registro usuario)
export const trackCompleteRegistration = () => {
  if (window.fbq) {
    window.fbq("track", "CompleteRegistration");
  }
};

export default MetaPixelTracker;