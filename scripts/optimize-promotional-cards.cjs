const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const OPTIMIZED_DIR = path.join(ASSETS_DIR, 'optimized-final');

// Crear directorio si no existe
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Función para obtener el tamaño del archivo en MB
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Función para optimizar una imagen específica
async function optimizeImage(filename, maxWidth = 800, quality = 60) {
  const inputPath = path.join(ASSETS_DIR, filename);
  const outputPath = path.join(OPTIMIZED_DIR, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ No se encontró: ${filename}`);
    return;
  }
  
  const originalSize = getFileSizeInMB(inputPath);
  console.log(`📤 Optimizando: ${filename} (${originalSize}MB)`);
  
  try {
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: quality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath.replace('.png', '.jpg'));
    
    const newSize = getFileSizeInMB(outputPath.replace('.png', '.jpg'));
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${originalSize}MB → ${newSize}MB (${reduction}% reducción)`);
    
  } catch (error) {
    console.error(`❌ Error optimizando ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 OPTIMIZANDO IMÁGENES PROMOCIONALES CON CONFIGURACIÓN AGRESIVA\n');
  
  // Optimizar con configuración muy agresiva para máxima reducción
  await optimizeImage('psicologiasocial.png', 600, 50); // 600px ancho, 50% calidad
  await optimizeImage('criminalistica.png', 600, 50);   // 600px ancho, 50% calidad
  
  console.log('\n🎉 ¡Optimización completada!');
  console.log('📁 Archivos optimizados guardados en: src/assets/optimized-final/');
  console.log('📝 Nota: Las imágenes se convirtieron a JPG para mayor compresión');
}

main().catch(console.error);