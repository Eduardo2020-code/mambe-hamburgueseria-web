import {
  Branch,
  GalleryItem,
  NavigationLink,
  SocialLink
} from '../models/site.models';


/* =====================================================
   NAVEGACIÓN
   ===================================================== */

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  {
    label: 'Información',
    target: 'nosotros'
  },
  {
    label: 'Sedes',
    target: 'sedes'
  },
  {
    label: 'Galería',
    target: 'galeria'
  },
  {
    label: 'Misión y Visión',
    target: 'mision-vision'
  },
  {
    label: 'Maestro',
    target: 'maestro'
  }
];


/* =====================================================
   GALERÍA
   ===================================================== */

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    src: 'assets/images/burger-01.webp',
    alt: 'Hamburguesa artesanal Mambe servida sobre una base de madera',
    title: 'Experiencia Mambe',
    subtitle: 'Sabor, color y tradición en cada detalle'
  },

  {
    src: 'assets/images/burger-02.webp',
    alt: 'Hamburguesa artesanal con queso, vegetales y cebolla caramelizada',
    title: 'Ingredientes auténticos',
    subtitle: 'Preparaciones frescas y llenas de carácter'
  },

  {
    src: 'assets/images/burger-03.webp',
    alt: 'Hamburguesa doble con queso y vegetales frescos',
    title: 'Doble sabor',
    subtitle: 'Una experiencia que va más allá de lo ordinario'
  },

  {
    src: 'assets/images/burger-04.webp',
    alt: 'Hamburguesa Mambe fotografiada sobre una rodaja de madera',
    title: 'Hecha como debe ser',
    subtitle: 'Cuidamos cada elemento de principio a fin'
  }
];


/* =====================================================
   SEDES
   ===================================================== */

export const BRANCHES: readonly Branch[] = [

  /* =========================
     SEDE ANDALUCÍA
     ========================= */

  {
    city: 'Andalucía',

    kicker: 'Sede Mambe',

    address: 'CRA 3 #10-28',

    schedule: 'Consulta nuestro horario por WhatsApp',

    phone: '323 463 8649',

    phoneHref:
      'https://wa.me/573234638649?text=Hola%20Mambe,%20quiero%20informaci%C3%B3n%20sobre%20la%20sede%20Andaluc%C3%ADa',

    mapsUrl:
      'https://maps.app.goo.gl/7WCcJ9iTVaGjkNgG8',

    image:
      'assets/images/sedeandalucia.jpg'
  },


  /* =========================
     SEDE TULUÁ
     ========================= */

  {
    city: 'Tuluá',

    kicker: 'Sede Mambe',

    address: 'CRA 26A #40-63',

    schedule: 'Consulta nuestro horario por WhatsApp',

    phone: '322 648 5792',

    phoneHref:
      'https://wa.me/573226485792?text=Hola%20Mambe,%20quiero%20informaci%C3%B3n%20sobre%20la%20sede%20Tulu%C3%A1',

    mapsUrl:
      'https://maps.app.goo.gl/ZvqnZRLqckFgnWxN6',

    image:
      'assets/images/sedetulua.png'
  }

];


/* =====================================================
   REDES SOCIALES
   ===================================================== */

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: 'Instagram',
    url: '#'
  },
  {
    name: 'Facebook',
    url: '#'
  },
  {
    name: 'TikTok',
    url: '#'
  }
];


/* =====================================================
   CONFIGURACIÓN GENERAL
   ===================================================== */

export const SITE_CONFIG = {

  brandName:
    'Mambe Hamburguesería',

  email:
    'hola@mambehamburgueseria.com',

  /*
   * WhatsApp general del sitio.
   * Por ahora usamos la sede Andalucía.
   */
  whatsappNumber:
    '573234638649',

  whatsappMessage:
    'Hola Mambe, quiero conocer el menú y realizar un pedido.',

  navigation:
    NAVIGATION_LINKS,

  gallery:
    GALLERY_ITEMS,

  branches:
    BRANCHES,

  socials:
    SOCIAL_LINKS

} as const;


/* =====================================================
   WHATSAPP GENERAL
   ===================================================== */

export const WHATSAPP_URL =
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;