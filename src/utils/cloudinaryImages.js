/**
 * Mapeo de todas las imágenes optimizadas de Cloudinary
 * Organizadas por categorías según el proceso de subida
 */

// Base URL de Cloudinary para nuestro cloud
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dlcuy0ky7/image/upload';

// Configuraciones de transformación comunes
const transformations = {
  // Para fondos y banners grandes
  largeBanner: 'f_auto,q_auto:good,w_1920,h_1080,c_limit',
  
  // Para cards principales  
  card: 'f_auto,q_auto:good,w_600,h_400,c_limit',
  
  // Para cards mini
  cardMini: 'f_auto,q_auto:good,w_300,h_200,c_limit',
  
  // Para iconos y logos
  icon: 'f_auto,q_auto:good,w_400,h_400,c_limit',
  
  // Para fotos de personas
  people: 'f_auto,q_auto:good,w_500,h_500,c_limit',
  
  // Para anuncios
  anuncio: 'f_auto,q_auto:good,w_1200,h_800,c_limit',
  
  // Sin transformación (imagen original optimizada)
  auto: 'f_auto,q_auto:good'
};

// Función helper para generar URLs
const getCloudinaryUrl = (folder, filename, transformation = 'auto') => {
  const baseFilename = filename.split('.')[0]; // Quitar extensión
  return `${CLOUDINARY_BASE_URL}/${transformations[transformation]}/institutoisdep/${folder}/${folder}/${baseFilename}`;
};

// Mapeo de todas las imágenes por categoría
export const cloudinaryImages = {
  // Banners y fondos
  banners: {
    fondoInicio: getCloudinaryUrl('banners', 'fondoInicio.jpg', 'largeBanner'),
    cursosBanner: getCloudinaryUrl('banners', 'cursosBanner.jpg', 'largeBanner')
  },
  
  // Anuncios
  anuncios: {
    anuncio1: getCloudinaryUrl('anuncios', 'anuncio1imagen.jpg', 'anuncio'),
    anuncio2: getCloudinaryUrl('anuncios', 'anuncio2imagen.jpg', 'anuncio'),
    anuncio3: getCloudinaryUrl('anuncios', 'anuncio3imagen.jpg', 'anuncio')
  },
  
  // Cards principales
  cards: {
    card1: getCloudinaryUrl('cards', 'card1.png', 'card'),
    card2: getCloudinaryUrl('cards', 'card2.png', 'card'),
    grafologiaEmocional: getCloudinaryUrl('cards', 'GrafologiaEmocional.png', 'card'),
    ilustracion: getCloudinaryUrl('cards', 'Ilustracion.png', 'card')
  },
  
  // Cards mini
  cardsMini: {
    cardmini1: getCloudinaryUrl('cardsmini', 'cardmini1.png', 'cardMini'),
    cardmini2: getCloudinaryUrl('cardsmini', 'cardmini2.png', 'cardMini'),
    cardmini3: getCloudinaryUrl('cardsmini', 'cardmini3.png', 'cardMini')
  },
  
  // Iconos y logos
  icons: {
    logo1: getCloudinaryUrl('icons', 'Logo1.png', 'icon'),
    banderita: getCloudinaryUrl('icons', 'banderita.png', 'icon'),
    pluma: getCloudinaryUrl('icons', 'pluma.png', 'icon'),
    plumaCopia: getCloudinaryUrl('icons', 'pluma - copia.png', 'icon'),
    cursos: getCloudinaryUrl('icons', 'cursos.png', 'icon'),
    cursosCopia: getCloudinaryUrl('icons', 'cursos - copia.png', 'icon'),
    curt: getCloudinaryUrl('icons', 'curt.png', 'icon')
  },
  
  // Fotos de personas
  people: {
    profesor: getCloudinaryUrl('people', 'profesor.jpg', 'people'),
    profesorGirl: getCloudinaryUrl('people', 'profesor-girl.jpg', 'people')
  },
  
  // Imágenes generales
  general: {
    imagen: getCloudinaryUrl('general', 'imagen.jpg', 'auto'),
    imagen1: getCloudinaryUrl('general', 'imagen1.jpeg', 'auto'),
    imagen2: getCloudinaryUrl('general', 'imagen2.jpeg', 'auto'),
    imagen3: getCloudinaryUrl('general', 'imagen3.png', 'auto')
  }
};

// Función helper para obtener imagen por nombre (retrocompatibilidad)
export const getCloudinaryImage = (imageName) => {
  // Buscar en todas las categorías
  for (const category of Object.values(cloudinaryImages)) {
    if (category[imageName]) {
      return category[imageName];
    }
  }
  
  // Si no se encuentra, intentar buscar por nombre de archivo
  const mappings = {
    'Logo1.png': cloudinaryImages.icons.logo1,
    'fondoInicio.jpg': cloudinaryImages.banners.fondoInicio,
    'cursosBanner.jpg': cloudinaryImages.banners.cursosBanner,
    'anuncio1imagen.jpg': cloudinaryImages.anuncios.anuncio1,
    'anuncio2imagen.jpg': cloudinaryImages.anuncios.anuncio2,
    'anuncio3imagen.jpg': cloudinaryImages.anuncios.anuncio3,
    'card1.png': cloudinaryImages.cards.card1,
    'card2.png': cloudinaryImages.cards.card2,
    'GrafologiaEmocional.png': cloudinaryImages.cards.grafologiaEmocional,
    'Ilustracion.png': cloudinaryImages.cards.ilustracion,
    'profesor.jpg': cloudinaryImages.people.profesor,
    'profesor-girl.jpg': cloudinaryImages.people.profesorGirl,
    'curt.png': cloudinaryImages.icons.curt
  };
  
  return mappings[imageName] || null;
};

// Exportar también las URLs base para uso directo
export default cloudinaryImages;