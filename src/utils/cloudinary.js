import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

// Configuración de Cloudinary usando variables de entorno de Vite
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName
  }
});

// Verificar que tenemos las credenciales mínimas
if (!cloudName) {
  console.warn('⚠️ VITE_CLOUDINARY_CLOUD_NAME no está configurado. Las imágenes usarán fallback local.');
}

// Helper para generar URLs optimizadas
export const getOptimizedImageUrl = (publicId, options = {}) => {
  // Si no hay cloudName configurado, retornar null para usar fallback
  if (!cloudName) {
    return null;
  }

  const {
    width = 'auto',
    height = 'auto',
    quality: qualityValue = 'auto'
  } = options;

  try {
    return cld
      .image(publicId)
      .resize(auto().width(width).height(height))
      .delivery(format('auto'))
      .delivery(quality(qualityValue))
      .toURL();
  } catch (error) {
    console.warn('Error generando URL de Cloudinary:', error);
    return null;
  }
};

// URLs específicas para las imágenes del instituto
export const cloudinaryImages = {
  // Imágenes de profesores
  profesor: 'instituto-isdep/profesores/profesor',
  profesorGirl: 'instituto-isdep/profesores/profesor-girl',
  curt: 'instituto-isdep/profesores/curt',
  
  // Imágenes de anuncios
  anuncio1: 'instituto-isdep/anuncios/anuncio1imagen',
  anuncio2: 'instituto-isdep/anuncios/anuncio2imagen', 
  anuncio3: 'instituto-isdep/anuncios/anuncio3imagen',
  
  // Banners y fondos
  cursosBanner: 'instituto-isdep/banners/cursos-banner',
  fondoInicio: 'instituto-isdep/fondos/fondo-inicio',
  
  // Cards de cursos
  card1: 'instituto-isdep/cards/card1',
  card2: 'instituto-isdep/cards/card2',
  cardmini1: 'instituto-isdep/cards/cardmini1',
  cardmini2: 'instituto-isdep/cards/cardmini2',
  cardmini3: 'instituto-isdep/cards/cardmini3',
  
  // Ilustraciones
  grafologiaEmocional: 'instituto-isdep/ilustraciones/grafologia-emocional',
  ilustracion: 'instituto-isdep/ilustraciones/ilustracion',
  
  // Logo
  logo1: 'instituto-isdep/logos/logo1',
  banderita: 'instituto-isdep/logos/banderita',
  pluma: 'instituto-isdep/logos/pluma'
};

// Configuraciones predefinidas para diferentes tipos de imagen
export const imageConfigs = {
  // Para cards de profesores
  profesorCard: {
    width: 300,
    height: 300,
    quality: 'auto:good'
  },
  
  // Para banners grandes
  bannerLarge: {
    width: 1920,
    height: 600,
    quality: 'auto:good'
  },
  
  // Para cards pequeñas
  cardSmall: {
    width: 250,
    height: 200,
    quality: 'auto:good'
  },
  
  // Para miniaturas
  thumbnail: {
    width: 150,
    height: 150,
    quality: 'auto:eco'
  },
  
  // Para móvil
  mobile: {
    width: 800,
    height: 'auto',
    quality: 'auto:eco'
  }
};

export default cld;