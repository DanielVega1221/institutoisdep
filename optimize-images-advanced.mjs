#!/usr/bin/env node

/**
 * Script avanzado para optimizar TODAS las imágenes del proyecto
 * Ejecutar con: npm run optimize:all
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización
const compressionSettings = {
  // Para imágenes muy grandes (banners, fondos)
  large: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 75,
    description: 'Imágenes grandes (banners, fondos)'
  },
  
  // Para imágenes medianas (cards, anuncios)
  medium: {
    maxWidth: 800,
    maxHeight: 600,
    quality: 80,
    description: 'Imágenes medianas (cards, anuncios)'
  },
  
  // Para imágenes pequeñas (logos, iconos)
  small: {
    maxWidth: 400,
    maxHeight: 400,
    quality: 85,
    description: 'Imágenes pequeñas (logos, iconos)'
  },
  
  // Para fotos de personas (profesores)
  portrait: {
    maxWidth: 500,
    maxHeight: 500,
    quality: 82,
    description: 'Fotos de personas (profesores)'
  }
};

// Mapeo de archivos y sus configuraciones
const imageConfig = {
  // Fondos y banners grandes
  'fondoInicio.jpg': 'large',
  'cursosBanner.jpg': 'large',
  'anuncio1imagen.jpg': 'large',
  'anuncio2imagen.jpg': 'large', 
  'anuncio3imagen.jpg': 'large',
  
  // Cards medianas
  'card1.png': 'medium',
  'card2.png': 'medium',
  'GrafologiaEmocional.png': 'medium',
  'Ilustracion.png': 'medium',
  
  // Cards pequeñas
  'cardmini1.png': 'small',
  'cardmini2.png': 'small',
  'cardmini3.png': 'small',
  'banderita.png': 'small',
  'pluma.png': 'small',
  'Logo1.png': 'small',
  
  // Fotos de profesores
  'profesor.jpg': 'portrait',
  'profesor-girl.jpg': 'portrait',
  'curt.png': 'portrait'
};

async function installDependencies() {
  console.log('🔧 Verificando dependencias de optimización...');
  
  try {
    // Verificar si sharp está instalado
    await import('sharp');
    console.log('✅ Sharp ya está instalado');
    return true;
  } catch (error) {
    console.log('📦 Instalando Sharp para optimización de imágenes...');
    
    const { spawn } = await import('child_process');
    
    return new Promise((resolve) => {
      const npm = spawn('npm', ['install', 'sharp', '--save-dev'], {
        stdio: 'inherit',
        shell: true
      });
      
      npm.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Sharp instalado exitosamente');
          resolve(true);
        } else {
          console.log('❌ Error instalando Sharp');
          resolve(false);
        }
      });
    });
  }
}

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const sharp = (await import('sharp')).default;
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`📤 Optimizando: ${path.basename(inputPath)} (${originalSize}MB)`);
    
    let pipeline = sharp(inputPath);
    
    // Redimensionar si es necesario
    pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
      fit: 'inside',
      withoutEnlargement: true
    });
    
    // Configurar compresión según el formato
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: config.quality,
        progressive: true,
        mozjpeg: true
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        quality: config.quality,
        compressionLevel: 9,
        progressive: true
      });
    }
    
    // Guardar imagen optimizada
    await pipeline.toFile(outputPath);
    
    // Mostrar estadísticas
    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${newSize}MB (${savings}% reducción)`);
    
    return {
      original: stats.size,
      optimized: newStats.size,
      savings: parseFloat(savings)
    };
    
  } catch (error) {
    console.log(`❌ Error optimizando ${path.basename(inputPath)}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🚀 INICIANDO OPTIMIZACIÓN COMPLETA DE IMÁGENES\n');
  
  // Instalar dependencias si es necesario
  const depsOk = await installDependencies();
  if (!depsOk) {
    console.log('❌ No se pudieron instalar las dependencias');
    process.exit(1);
  }
  
  // Crear directorio optimizado
  const optimizedDir = path.join(__dirname, 'src', 'assets', 'optimized-compressed');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
    console.log(`📁 Creado directorio: ${optimizedDir}`);
  }
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;
  
  console.log('\n📊 CONFIGURACIONES DE COMPRESIÓN:');
  Object.entries(compressionSettings).forEach(([key, config]) => {
    console.log(`  ${key}: ${config.maxWidth}x${config.maxHeight}, ${config.quality}% - ${config.description}`);
  });
  console.log('');
  
  // Procesar cada imagen
  for (const [filename, configType] of Object.entries(imageConfig)) {
    const inputPath = path.join(__dirname, 'src', 'assets', filename);
    const outputPath = path.join(optimizedDir, filename);
    const config = compressionSettings[configType];
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Archivo no encontrado: ${filename}`);
      continue;
    }
    
    const result = await optimizeImage(inputPath, outputPath, config);
    
    if (result) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      processedCount++;
    }
    
    // Pausa pequeña para no saturar el sistema
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n📈 RESUMEN FINAL:');
  console.log(`✅ Imágenes procesadas: ${processedCount}`);
  console.log(`📦 Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📦 Tamaño optimizado: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`💾 Espacio ahorrado: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 Reducción total: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
  
  console.log('\n🎯 PRÓXIMO PASO:');
  console.log('Las imágenes optimizadas están en: src/assets/optimized-compressed/');
  console.log('Ahora puedes subirlas a Cloudinary con: npm run cloudinary:upload:compressed');
}

optimizeAllImages().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});