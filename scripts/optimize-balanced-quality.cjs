const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

// Función para obtener el tamaño del archivo en MB/KB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  if (sizeInMB >= 1) {
    return `${sizeInMB.toFixed(2)}MB`;
  } else {
    return `${(stats.size / 1024).toFixed(1)}KB`;
  }
}

// Función para optimizar con configuración balanceada
async function optimizeImageBalanced(filename, maxWidth = 800, quality = 78) {
  const inputPath = path.join(ASSETS_DIR, filename);
  const outputPath = path.join(PUBLIC_IMAGES_DIR, filename.replace('.png', '.jpg'));
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ No se encontró: ${filename}`);
    return;
  }
  
  const originalSize = getFileSize(inputPath);
  console.log(`📤 Optimizando: ${filename} (${originalSize})`);
  
  try {
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: quality,
        progressive: true,
        mozjpeg: true,
        optimiseScans: true,
        chromaSubsampling: '4:4:4' // Mejor calidad de color
      })
      .toFile(outputPath);
    
    const newSize = getFileSize(outputPath);
    const originalBytes = fs.statSync(inputPath).size;
    const newBytes = fs.statSync(outputPath).size;
    const reduction = ((originalBytes - newBytes) / originalBytes * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${originalSize} → ${newSize} (${reduction}% reducción)`);
    
  } catch (error) {
    console.error(`❌ Error optimizando ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 OPTIMIZACIÓN BALANCEADA PARA MEJOR CALIDAD\n');
  
  // Crear directorio si no existe
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  }
  
  // Optimizar con configuración balanceada (mejor calidad)
  await optimizeImageBalanced('psicologiasocial.png', 900, 82); // 900px ancho, 82% calidad
  await optimizeImageBalanced('criminalistica.png', 900, 82);   // 900px ancho, 82% calidad
  
  console.log('\n🎉 ¡Optimización balanceada completada!');
  console.log('📁 Archivos optimizados guardados en: public/images/');
  console.log('🎨 Configuración: 900px ancho, 82% calidad - Mayor balance calidad/tamaño');
}

main().catch(console.error);