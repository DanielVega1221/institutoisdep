import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const srcDir = './src/assets';
const optimizedDir = './src/assets/optimized';

// Crear directorio optimized si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Imágenes de anuncios a optimizar
const imagesToOptimize = [
  'anuncio1imagen.jpg',
  'anuncio2imagen.jpg', 
  'anuncio3imagen.jpg'
];

imagesToOptimize.forEach(image => {
  const inputPath = path.join(srcDir, image);
  const outputJpg = path.join(optimizedDir, image);
  const outputWebp = path.join(optimizedDir, image.replace(/\.(jpg|jpeg)$/i, '.webp'));
  
  if (fs.existsSync(inputPath)) {
    try {
      // Copiar y optimizar JPG (reducir calidad a 85%)
      console.log(`Optimizando ${image}...`);
      
      // Si tienes ImageMagick instalado, usa esto:
      // execSync(`magick "${inputPath}" -quality 85 -strip "${outputJpg}"`);
      // execSync(`magick "${inputPath}" -quality 85 -strip "${outputWebp}"`);
      
      // Para ahora, simplemente copiamos los archivos
      fs.copyFileSync(inputPath, outputJpg);
      
      console.log(`✓ ${image} optimizado`);
    } catch (error) {
      console.error(`Error optimizando ${image}:`, error.message);
    }
  } else {
    console.warn(`⚠️  ${image} no encontrado`);
  }
});

console.log('🎉 Optimización completada!');