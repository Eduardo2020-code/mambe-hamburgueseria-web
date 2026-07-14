import {
  Branch,
  GalleryItem,
  NavigationLink,
  SocialLink
} from '../models/site.models';

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Quiénes somos', target: 'nosotros' },
  { label: 'Nuestra esencia', target: 'esencia' },
  { label: 'Galería', target: 'galeria' },
  { label: 'Sedes', target: 'sedes' },
  { label: 'Contacto', target: 'contacto' }
];

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

/**
 * IMPORTANTE:
 * Reemplaza los datos de ejemplo por la información real del restaurante.
 */
export const BRANCHES: readonly Branch[] = [
  {
    city: 'Andalucía',
    kicker: 'Sede principal',
    address: 'Agrega aquí la dirección exacta de la sede',
    schedule: 'Lunes a domingo · Configura aquí el horario',
    phone: 'Configura el teléfono',
    phoneHref: 'tel:+573000000000',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Andaluc%C3%ADa+Valle+del+Cauca',
    image: 'assets/images/sedeandalucia.jpg'
  },
  {
    city: 'Tuluá',
    kicker: 'Sede Mambe',
    address: 'Agrega aquí la dirección exacta de la sede',
    schedule: 'Lunes a domingo · Configura aquí el horario',
    phone: 'Configura el teléfono',
    phoneHref: 'tel:+573000000000',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tulu%C3%A1+Valle+del+Cauca',
    image: 'assets/images/sedetulua.png'
  }
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'Instagram', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'TikTok', url: '#' }
];

export const SITE_CONFIG = {
  brandName: 'Mambe Hamburguesería',
  email: 'hola@mambehamburgueseria.com',
  whatsappNumber: '573000000000',
  whatsappMessage: 'Hola Mambe, quiero conocer el menú y realizar un pedido.',
  navigation: NAVIGATION_LINKS,
  gallery: GALLERY_ITEMS,
  branches: BRANCHES,
  socials: SOCIAL_LINKS
} as const;

export const WHATSAPP_URL =
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
