#!/usr/bin/env node

/**
 * Script para optimizar imágenes específicas y convertirlas a WEBP
 * Mantiene alta calidad pero reduce el tamaño
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración para diferentes tipos de imágenes
const webpConfig = {
  // Para imágenes promocionales (alta calidad pero comprimidas)
  promotional: {
    quality: 85,
    effort: 6, // Más esfuerzo en compresión (0-6)
    description: 'Imágenes promocionales de alta calidad'
  },
  
  // Para banners y fondos
  banners: {
    quality: 80,
    effort: 6,
    description: 'Banners y fondos'
  },
  
  // Para imágenes de cursos
  courses: {
    quality: 88,
    effort: 6,
    description: 'Imágenes de cursos (máxima calidad)'
  }
};

// Lista de imágenes a optimizar
const imagesToOptimize = [
  {
    input: 'public/images/criminalistica.jpg',
    output: 'public/images/criminalistica.webp',
    config: 'courses'
  },
  {
    input: 'public/images/psicologiasocial.jpg', 
    output: 'public/images/psicologiasocial.webp',
    config: 'courses'
  },
  // También optimizar las versiones ya optimizadas
  {
    input: 'src/assets/optimized-final/criminalistica.jpg',
    output: 'src/assets/optimized-final/criminalistica.webp',
    config: 'courses'
  },
  {
    input: 'src/assets/optimized-final/psicologiasocial.jpg',
    output: 'src/assets/optimized-final/psicologiasocial.webp', 
    config: 'courses'
  }
];

async function optimizeToWebP(inputPath, outputPath, configType) {
  try {
    const sharp = (await import('sharp')).default;
    const fullInputPath = path.join(__dirname, inputPath);
    const fullOutputPath = path.join(__dirname, outputPath);
    
    if (!fs.existsSync(fullInputPath)) {
      console.log(`⚠️  Archivo no encontrado: ${inputPath}`);
      return null;
    }
    
    // Crear directorio de salida si no existe
    const outputDir = path.dirname(fullOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const stats = fs.statSync(fullInputPath);
    const originalSize = (stats.size / 1024).toFixed(2);
    const config = webpConfig[configType];
    
    console.log(`🔄 Convirtiendo a WebP: ${path.basename(inputPath)} (${originalSize}KB)`);
    console.log(`   Configuración: ${config.description}`);
    
    // Procesar con Sharp
    await sharp(fullInputPath)
      .webp({
        quality: config.quality,
        effort: config.effort,
        lossless: false // Usamos compresión con pérdidas para mejor tamaño
      })
      .toFile(fullOutputPath);
    
    // Mostrar estadísticas
    const newStats = fs.statSync(fullOutputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(outputPath)}: ${originalSize}KB → ${newSize}KB`);
    console.log(`   💾 Reducción: ${savings}% | Calidad: ${config.quality}%\n`);
    
    return {
      original: stats.size,
      optimized: newStats.size,
      savings: parseFloat(savings),
      file: path.basename(inputPath)
    };
    
  } catch (error) {
    console.log(`❌ Error procesando ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 OPTIMIZACIÓN A WEBP - INSTITUTO ISDEP\n');
  
  // Verificar Sharp
  try {
    await import('sharp');
    console.log('✅ Sharp disponible\n');
  } catch (error) {
    console.log('❌ Sharp no está disponible. Instálalo con: npm install sharp');
    process.exit(1);
  }
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;
  const results = [];
  
  console.log('📊 CONFIGURACIONES WEBP:');
  Object.entries(webpConfig).forEach(([key, config]) => {
    console.log(`  ${key}: Calidad ${config.quality}%, Esfuerzo ${config.effort} - ${config.description}`);
  });
  console.log('');
  
  // Procesar cada imagen
  for (const imageInfo of imagesToOptimize) {
    const result = await optimizeToWebP(imageInfo.input, imageInfo.output, imageInfo.config);
    
    if (result) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      processedCount++;
      results.push(result);
    }
    
    // Pequeña pausa
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('📈 RESUMEN FINAL:');
  console.log(`✅ Imágenes procesadas: ${processedCount}`);
  console.log(`📦 Tamaño original total: ${(totalOriginal / 1024).toFixed(2)}KB`);
  console.log(`📦 Tamaño WebP total: ${(totalOptimized / 1024).toFixed(2)}KB`);
  console.log(`💾 Espacio total ahorrado: ${((totalOriginal - totalOptimized) / 1024).toFixed(2)}KB`);
  console.log(`📊 Reducción promedio: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%\n`);
  
  console.log('📋 DETALLE POR ARCHIVO:');
  results.forEach(result => {
    console.log(`  ${result.file}: ${result.savings}% de reducción`);
  });
  
  console.log('\n🎯 ARCHIVOS GENERADOS:');
  console.log('  📁 public/images/criminalistica.webp');
  console.log('  📁 public/images/psicologiasocial.webp');
  console.log('  📁 src/assets/optimized-final/criminalistica.webp');
  console.log('  📁 src/assets/optimized-final/psicologiasocial.webp');
  
  console.log('\n💡 RECOMENDACIONES:');
  console.log('  1. Usa las versiones .webp en navegadores compatibles');
  console.log('  2. Mantén las .jpg como fallback para compatibilidad');
  console.log('  3. Considera actualizar las referencias en el código a usar WebP');
}

main().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});