#!/usr/bin/env node

/**
 * Script para optimizar TODAS las imágenes de public/images
 * Convierte PNG grandes a WEBP con alta calidad pero tamaño optimizado
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización por tipo de imagen
const optimizationConfig = {
  // PNG grandes (más de 500KB) - Agresiva optimización
  largePng: {
    quality: 85,
    effort: 6,
    maxWidth: 1200,
    maxHeight: 800,
    description: 'PNG grandes - Máxima compresión'
  },
  
  // PNG medianas (100-500KB) 
  mediumPng: {
    quality: 88,
    effort: 6,
    maxWidth: 1000,
    maxHeight: 700,
    description: 'PNG medianas - Alta compresión'
  },
  
  // JPG ya optimizadas - Solo convertir formato
  existingJpg: {
    quality: 90,
    effort: 4,
    description: 'JPG existentes - Solo conversión formato'
  }
};

async function analyzeAndOptimizeImages() {
  console.log('🚀 OPTIMIZACIÓN COMPLETA - PUBLIC/IMAGES\n');
  
  // Verificar Sharp
  try {
    await import('sharp');
    console.log('✅ Sharp disponible\n');
  } catch (error) {
    console.log('❌ Sharp no disponible. Instalar con: npm install sharp');
    process.exit(1);
  }
  
  const imagesDir = path.join(__dirname, 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.webp')
  );
  
  console.log('📋 IMÁGENES ENCONTRADAS:');
  const imageAnalysis = [];
  
  for (const file of imageFiles) {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const ext = path.extname(file).toLowerCase();
    
    let config, priority;
    
    if (ext === '.png' && stats.size > 500000) { // > 500KB
      config = 'largePng';
      priority = 'ALTA';
    } else if (ext === '.png' && stats.size > 100000) { // > 100KB
      config = 'mediumPng';
      priority = 'MEDIA';
    } else if (ext === '.jpg' || ext === '.jpeg') {
      config = 'existingJpg';
      priority = 'BAJA';
    } else {
      config = 'mediumPng';
      priority = 'BAJA';
    }
    
    imageAnalysis.push({
      file,
      filePath,
      size: stats.size,
      sizeKB: parseFloat(sizeKB),
      extension: ext,
      config,
      priority
    });
    
    console.log(`  📁 ${file} - ${sizeKB}KB (${ext.toUpperCase()}) - Prioridad: ${priority}`);
  }
  
  // Ordenar por prioridad y tamaño
  imageAnalysis.sort((a, b) => {
    const priorityOrder = {'ALTA': 1, 'MEDIA': 2, 'BAJA': 3};
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return b.size - a.size;
  });
  
  console.log('\n📊 PLAN DE OPTIMIZACIÓN:');
  Object.entries(optimizationConfig).forEach(([key, config]) => {
    console.log(`  ${key}: Calidad ${config.quality}% - ${config.description}`);
    if (config.maxWidth) {
      console.log(`    Redimensión: max ${config.maxWidth}x${config.maxHeight}px`);
    }
  });
  
  console.log('\n🔄 PROCESANDO IMÁGENES...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;
  const results = [];
  
  for (const imageInfo of imageAnalysis) {
    const result = await optimizeImage(imageInfo);
    
    if (result) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      processedCount++;
      results.push(result);
    }
    
    // Pausa para no saturar el sistema
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  // Mostrar resumen final
  console.log('\n' + '='.repeat(60));
  console.log('📈 RESUMEN FINAL DE OPTIMIZACIÓN');
  console.log('='.repeat(60));
  console.log(`✅ Imágenes procesadas: ${processedCount}`);
  console.log(`📦 Tamaño original total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📦 Tamaño optimizado total: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`💾 Espacio ahorrado: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 Reducción total: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
  
  console.log('\n📋 DETALLE POR ARCHIVO:');
  results.forEach(result => {
    const indicator = result.savings > 50 ? '🔥' : result.savings > 30 ? '✅' : '📝';
    console.log(`  ${indicator} ${result.file}: ${result.savings}% reducción (${result.originalKB}KB → ${result.optimizedKB}KB)`);
  });
  
  console.log('\n🎯 ARCHIVOS WEBP GENERADOS:');
  results.forEach(result => {
    console.log(`  📁 public/images/${result.webpFile}`);
  });
  
  console.log('\n💡 PRÓXIMOS PASOS:');
  console.log('  1. Verificar que las imágenes WebP mantienen la calidad visual');
  console.log('  2. Actualizar el código para usar formato WebP con fallback');
  console.log('  3. Considerar eliminar los archivos PNG originales después de verificar');
  console.log('  4. Configurar el servidor para servir WebP cuando sea compatible');
}

async function optimizeImage(imageInfo) {
  try {
    const sharp = (await import('sharp')).default;
    const config = optimizationConfig[imageInfo.config];
    
    // Generar nombre de archivo WebP
    const baseName = path.parse(imageInfo.file).name;
    const webpFileName = `${baseName}.webp`;
    const outputPath = path.join(path.dirname(imageInfo.filePath), webpFileName);
    
    console.log(`🔄 Optimizando: ${imageInfo.file} (${imageInfo.sizeKB}KB)`);
    console.log(`   → ${webpFileName} | Config: ${config.description}`);
    
    let pipeline = sharp(imageInfo.filePath);
    
    // Redimensionar si se especifica
    if (config.maxWidth && config.maxHeight) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convertir a WebP
    pipeline = pipeline.webp({
      quality: config.quality,
      effort: config.effort,
      lossless: false
    });
    
    await pipeline.toFile(outputPath);
    
    // Calcular estadísticas
    const newStats = fs.statSync(outputPath);
    const optimizedKB = (newStats.size / 1024).toFixed(2);
    const savings = ((imageInfo.size - newStats.size) / imageInfo.size * 100).toFixed(1);
    
    console.log(`✅ ${webpFileName}: ${imageInfo.sizeKB}KB → ${optimizedKB}KB (${savings}% reducción)`);
    console.log('');
    
    return {
      file: imageInfo.file,
      webpFile: webpFileName,
      original: imageInfo.size,
      optimized: newStats.size,
      originalKB: imageInfo.sizeKB,
      optimizedKB: parseFloat(optimizedKB),
      savings: parseFloat(savings)
    };
    
  } catch (error) {
    console.log(`❌ Error optimizando ${imageInfo.file}:`, error.message);
    return null;
  }
}

analyzeAndOptimizeImages().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});