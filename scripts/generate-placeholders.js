// Script para generar placeholders base64 optimizados de las imágenes
import fs from 'fs';

const generatePlaceholder = (width = 100, height = 60) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="placeholder-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2d5a87;stop-opacity:0.4" />
          <stop offset="25%" style="stop-color:#3182ce;stop-opacity:0.3" />
          <stop offset="75%" style="stop-color:#63b3ed;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#3182ce;stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#placeholder-gradient)"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="12" font-weight="600">Cargando...</text>
    </svg>
  `.replace(/\s+/g, ' ').trim();
  
  return 'data:image/svg+xml;base64,' + btoa(svg);
};

// Generar placeholders para diferentes casos
const placeholders = {
  anuncio: generatePlaceholder(900, 450),
  small: generatePlaceholder(300, 200),
  loading: generatePlaceholder(200, 100)
};

// Crear archivo con los placeholders
const placeholderJs = `
// Placeholders optimizados para imágenes de anuncios
export const imagePlaceholders = ${JSON.stringify(placeholders, null, 2)};

export const getPlaceholderForAnuncio = (type = 'anuncio') => {
  return imagePlaceholders[type] || imagePlaceholders.anuncio;
};

export default imagePlaceholders;
`;

// Escribir el archivo
const outputPath = './src/utils/imagePlaceholders.js';
fs.writeFileSync(outputPath, placeholderJs);

console.log('✓ Placeholders generados en:', outputPath);
console.log('✓ Placeholders disponibles:', Object.keys(placeholders).join(', '));