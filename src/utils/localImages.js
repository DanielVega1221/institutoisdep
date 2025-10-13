// Imágenes locales optimizadas para reemplazar Cloudinary
// Usar esto en lugar de cloudinaryImages para ahorrar tokens

// Imágenes optimizadas
import cursosBannerImg from "../assets/optimized-final/cursosBanner.jpg";
import fondoInicioImg from "../assets/optimized-final/fondoInicio.jpg";
import fondoParaCursosImg from "../assets/optimized-final/fondoparacursos.jpg";
import anuncio1Img from "../assets/optimized-final/anuncio1imagen.jpg";
import anuncio2Img from "../assets/optimized-final/anuncio2imagen.jpg";
import anuncio3Img from "../assets/optimized-final/anuncio3imagen.jpg";

// Iconos y logos
import logo1Img from "../assets/optimized-final/Logo1.png";
import curtImg from "../assets/optimized-final/curt.png";
import ilustracionImg from "../assets/optimized-final/Ilustracion.png";
import grafologiaEmocionalImg from "../assets/optimized-final/GrafologiaEmocional.png";
import card1Img from "../assets/optimized-final/card1.png";
import card2Img from "../assets/optimized-final/card2.png";

// Personas
import profesorImg from "../assets/optimized-final/profesor.jpg";
import profesorGirlImg from "../assets/optimized-final/profesor-girl.jpg";

export const localImages = {
  banners: {
    cursosBanner: cursosBannerImg,
    fondoInicio: fondoInicioImg,
    fondoParaCursos: fondoParaCursosImg
  },
  anuncios: {
    anuncio1: anuncio1Img,
    anuncio2: anuncio2Img,
    anuncio3: anuncio3Img
  },
  icons: {
    logo1: logo1Img,
    curt: curtImg
  },
  cards: {
    ilustracion: ilustracionImg,
    grafologiaEmocional: grafologiaEmocionalImg,
    card1: card1Img,
    card2: card2Img
  },
  people: {
    profesor: profesorImg,
    profesorGirl: profesorGirlImg
  }
};

export default localImages;