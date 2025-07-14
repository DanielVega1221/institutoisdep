import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  console.log('🚀 Optimizando imágenes del carrusel...');
  
  // Crear directorio optimizado si no existe
  const optimizedDir = './src/assets/optimized';
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  try {
    // Optimizar a WebP (mejor compresión)
    await imagemin(['src/assets/{1,2,3,4}.jpg'], {
      destination: 'src/assets/optimized',
      plugins: [
        imageminWebp({
          quality: 85, // Calidad alta pero comprimida
          method: 6    // Mejor compresión
        })
      ]
    });

    // También crear versiones JPG optimizadas como fallback
    await imagemin(['src/assets/{1,2,3,4}.jpg'], {
      destination: 'src/assets/optimized',
      plugins: [
        imageminMozjpeg({
          quality: 80, // Reducir calidad para menor peso
          progressive: true // Carga progresiva
        })
      ]
    });

    console.log('✅ Imágenes optimizadas exitosamente!');
    console.log('📁 Archivos generados en: src/assets/optimized/');
    
    // Mostrar información de los archivos
    const files = fs.readdirSync(optimizedDir);
    files.forEach(file => {
      const filePath = path.join(optimizedDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`📄 ${file}: ${sizeKB} KB`);
    });

  } catch (error) {
    console.error('❌ Error al optimizar imágenes:', error);
  }
}

optimizeImages();
