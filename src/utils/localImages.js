// Imágenes locales optimizadas para reemplazar Cloudinary
// Usar esto en lugar de cloudinaryImages para ahorrar tokens

// Imágenes optimizadas
// ANTERIOR (cambio de esta sesión): cursosBanner quedó sin uso en el bundle.
// Solo lo usaba CursosAnterior.jsx; ahora se importa adentro de ese mismo archivo,
// así la imagen solo viaja al bundle si se revierte el home al acordeón viejo.
// import cursosBannerImg from "../assets/optimized-final/cursosBanner.jpg";
import fondoInicioImg from "../assets/optimized-final/fondoInicio.jpg";
// ANTERIOR: import fondoParaCursosImg from "../assets/optimized-final/fondoparacursos.jpg";
// NUEVO (cambio de esta sesión): versión webp optimizada (101 KB vs 31 MB).
// El archivo .jpg optimizado (338 KB) queda en optimized-final/ como fallback.
import fondoParaCursosImg from "../assets/optimized-final/fondoparacursos.webp";
// ANTERIOR (cambio de esta sesión): las imágenes de los anuncios promocionales no se
// usan en ningún lado (Anuncios.jsx renderiza con OptimizedImage desde Cloudinary).
// Se dejaron comentadas para no incluir ~277 KB muertos en el bundle inicial.
// import anuncio1Img from "../assets/optimized-final/anuncio1imagen.jpg";
// import anuncio2Img from "../assets/optimized-final/anuncio2imagen.jpg";
// import anuncio3Img from "../assets/optimized-final/anuncio3imagen.jpg";

// Iconos y logos
import logo1Img from "../assets/optimized-final/Logo1.png";
// ANTERIOR (cambio de esta sesión): no tiene uso en el grafo activo.
// import curtImg from "../assets/optimized-final/curt.png";
// ANTERIOR (cambio de esta sesión): no tiene uso en el grafo activo.
// import ilustracionImg from "../assets/optimized-final/Ilustracion.png";
// ANTERIOR (cambio de esta sesión): no tiene uso en el grafo activo.
// import grafologiaEmocionalImg from "../assets/optimized-final/GrafologiaEmocional.png";
import card1Img from "../assets/optimized-final/card1.png";
import card2Img from "../assets/optimized-final/card2.png";
import carruselCentroArticuladorImg from "../assets/optimized-final/CarruselCentroArticulador.jpg";
import carruselEntidadVinculadaImg from "../assets/optimized-final/CarruselEntidadVinculada.jpg";

// Personas
// ANTERIOR (cambio de esta sesión): EquipoDocente no usa fotos; sin uso en el grafo activo.
// import profesorImg from "../assets/optimized-final/profesor.jpg";
// import profesorGirlImg from "../assets/optimized-final/profesor-girl.jpg";

export const localImages = {
  banners: {
    // ANTERIOR: cursosBanner: cursosBannerImg,  (ver nota en el import de arriba)
    fondoInicio: fondoInicioImg,
    fondoParaCursos: fondoParaCursosImg
  },
  // ANTERIOR (cambio de esta sesión): el bloque anuncios no se usa en ningún lado
  // anuncios: {
  //   anuncio1: anuncio1Img,
  //   anuncio2: anuncio2Img,
  //   anuncio3: anuncio3Img
  // },
  icons: {
    logo1: logo1Img
    // ANTERIOR: curt: curtImg,  (sin uso en el grafo activo)
  },
  cards: {
    // ANTERIOR: ilustracion: ilustracionImg,      (sin uso en el grafo activo)
    // ANTERIOR: grafologiaEmocional: grafologiaEmocionalImg,  (sin uso en el grafo activo)
    card1: card1Img,
    card2: card2Img
  },
  // ANTERIOR (cambio de esta sesión): people no se usa en ningún lado
  // people: {
  //   profesor: profesorImg,
  //   profesorGirl: profesorGirlImg
  // },
  carousel: {
    centroArticulador: carruselCentroArticuladorImg,
    entidadVinculada: carruselEntidadVinculadaImg
  }
};

export default localImages;