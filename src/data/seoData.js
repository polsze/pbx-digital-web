export const seoData = {
  home: {
    title: 'PBX Digital | Marketing Digital en Posadas, Misiones',
    description: 'Agencia de marketing digital en Posadas. Desarrollo web, Meta Ads, diseño y merchandising con envíos a todo el país',
    keywords: 'marketing digital Posadas, agencia de marketing Misiones, programación Posadas, diseño gráfico Posadas, merchandising Posadas, sublimación Posadas, impresión 3D Posadas, community manager Posadas, desarrollo de apps Posadas',
    h1: 'Agencia de Marketing Digital y Merchandising en Posadas'
  },
  servicios: {
    title: 'Servicios | PBX Digital, Marketing Digital en Posadas',
    description: 'Descubrí nuestros servicios en Posadas: marketing digital, desarrollo de apps, diseño gráfico, gestión de RRSS y merchandising físico',
    keywords: 'servicios marketing Posadas, desarrollo de aplicaciones Misiones, diseño gráfico Posadas, community manager Posadas, sublimación Posadas, impresión 3D Misiones, publicidad Posadas',
    h1: 'Nuestros Servicios Digitales y de Merchandising en Posadas'
  },
  contacto: {
    title: 'Contacto | PBX Digital, Marketing Digital en Posadas',
    description: 'Contactanos en Posadas, Misiones. Consultá sobre marketing digital, programación, diseño y merchandising. Respuesta rápida y presupuesto sin cargo',
    keywords: 'contacto marketing Posadas, agencia de publicidad Posadas, consultoría marketing Misiones, presupuesto diseño Posadas, WhatsApp Posadas',
    h1: 'Contactate con la mejor agencia de Posadas'
  }
}

export const siteConfig = {
  name: 'PBX DIGITAL',
  fullName: 'PBX DIGITAL - Marketing y Merchandising en Posadas',
  url: 'https://pbxdigital.com.ar',
  twitter: '@pbxdigital',
  defaultImage: '/images/whatsapp-preview.jpg',
  address: {
    city: 'Posadas',
    province: 'Misiones',
    country: 'Argentina',
    zone: 'Centro'
  },
  phone: '+54 376 5252582',
  email: 'contacto@pbxdigital.com.ar',
  hours: 'Lunes a Sabados de 8:00 a 20:00',
  priceRange: '$$'
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PBX DIGITAL",
  "image": "https://pbxdigital.com.ar/pbx-digital-logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Posadas",
    "addressRegion": "Misiones",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.3621,
    "longitude": -55.9009
  },
  "url": "https://pbxdigital.com.ar/",
  "telephone": "+54 376 5252582",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ]
}