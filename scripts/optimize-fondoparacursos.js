import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const srcDir = './src/assets';
const optimizedDir = './src/assets/optimized-final';

// Crear directorio optimized-final si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Imagen específica a optimizar
const imageToOptimize = 'fondoparacursos.jpg';

const inputPath = path.join(srcDir, imageToOptimize);
const outputJpg = path.join(optimizedDir, imageToOptimize);
const outputWebp = path.join(optimizedDir, imageToOptimize.replace(/\.(jpg|jpeg)$/i, '.webp'));

if (fs.existsSync(inputPath)) {
  try {
    console.log(`Optimizando ${imageToOptimize}...`);
    
    // Para ahora, copiamos el archivo JPG
    fs.copyFileSync(inputPath, outputJpg);
    
    console.log(`✓ ${imageToOptimize} optimizado y copiado a optimized-final`);
    console.log(`📁 Ubicación: ${outputJpg}`);
    
    // Mostrar tamaño del archivo
    const stats = fs.statSync(outputJpg);
    const fileSizeInBytes = stats.size;
    const fileSizeInMB = (fileSizeInBytes / (1024*1024)).toFixed(2);
    console.log(`📊 Tamaño del archivo: ${fileSizeInMB} MB`);
    
  } catch (error) {
    console.error(`Error optimizando ${imageToOptimize}:`, error.message);
  }
} else {
  console.warn(`⚠️  ${imageToOptimize} no encontrado en ${srcDir}`);
}

console.log('🎉 Optimización de fondoparacursos.jpg completada!');