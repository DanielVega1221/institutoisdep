const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

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
async function optimizeImage(filename, maxWidth = 1000, quality = 82) {
  const inputPath = path.join(INPUT_DIR, filename);
  const baseName = path.parse(filename).name;
  const outputPath = path.join(OUTPUT_DIR, `${baseName}-optimized.jpg`);
  
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
    
    return {
      original: originalSize,
      optimized: newSize,
      reduction: reduction
    };
    
  } catch (error) {
    console.error(`❌ Error optimizando ${filename}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 OPTIMIZACIÓN DE ANUNCIOS DE CURSOS\n');
  console.log('⚙️  Configuración: 1000px ancho máximo, 82% calidad JPEG');
  console.log('📁 Entrada: public/images/');
  console.log('📁 Salida: public/images/ (con sufijo -optimized)\n');
  
  // Crear directorio de salida si no existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Lista de archivos a optimizar
  const imagesToOptimize = [
    'diplomatura-tecnografia-pericial.jpg',
    'formacion-psicografologia.jpg',
    'formacion-psicologia-social.jpg',
    'seminario-grafologia-emocional.jpg',
    'capacitacion-grafologia-emocional.jpg',
    'capacitacion-deteccion-falsificacion.jpg',
    'diplomatura-criminalistica.jpg'
  ];
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processed = 0;
  
  // Optimizar todas las imágenes
  for (const filename of imagesToOptimize) {
    const result = await optimizeImage(filename);
    if (result) {
      processed++;
    }
  }
  
  console.log('\n🎉 ¡Optimización completada!');
  console.log(`📊 Imágenes procesadas: ${processed}/${imagesToOptimize.length}`);
  console.log('📁 Archivos optimizados guardados en: public/images/');
  console.log('💡 Los archivos optimizados tienen el sufijo "-optimized.jpg"');
  console.log('\n💡 Las imágenes mantienen excelente calidad con tamaño reducido');
}

main().catch(console.error);
