#!/usr/bin/env node

/**
 * Script completo: Optimiza TODAS las imágenes de assets y las sube a Cloudinary
 * Ejecutar con: npm run process:all-images
 */

require('dotenv').config();
const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuración de optimización por tipo de imagen
const optimizationConfig = {
  // Banners y fondos grandes
  banners: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 75,
    files: ['fondoInicio.jpg', 'cursosBanner.jpg']
  },
  
  // Anuncios grandes
  anuncios: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 78,
    files: ['anuncio1imagen.jpg', 'anuncio2imagen.jpg', 'anuncio3imagen.jpg']
  },
  
  // Cards principales
  cards: {
    maxWidth: 600,
    maxHeight: 400,
    quality: 82,
    files: ['card1.png', 'card2.png', 'GrafologiaEmocional.png', 'Ilustracion.png']
  },
  
  // Cards mini
  cardsmini: {
    maxWidth: 300,
    maxHeight: 200,
    quality: 85,
    files: ['cardmini1.png', 'cardmini2.png', 'cardmini3.png']
  },
  
  // Logos e iconos
  icons: {
    maxWidth: 400,
    maxHeight: 400,
    quality: 90,
    files: ['Logo1.png', 'banderita.png', 'pluma.png', 'pluma - copia.png', 'cursos.png', 'cursos - copia.png', 'curt.png']
  },
  
  // Fotos de personas
  people: {
    maxWidth: 500,
    maxHeight: 500,
    quality: 83,
    files: ['profesor.jpg', 'profesor-girl.jpg']
  },
  
  // Imágenes generales
  general: {
    maxWidth: 800,
    maxHeight: 600,
    quality: 80,
    files: ['imagen.jpg', 'imagen1.jpeg', 'imagen2.jpeg', 'imagen3.png']
  }
};

async function installSharp() {
  try {
    require('sharp');
    console.log('✅ Sharp ya está disponible');
    return true;
  } catch (error) {
    console.log('📦 Instalando Sharp...');
    const { spawn } = require('child_process');
    
    return new Promise((resolve) => {
      const npm = spawn('npm', ['install', 'sharp', '--save-dev'], {
        stdio: 'inherit',
        shell: true
      });
      
      npm.on('close', (code) => {
        resolve(code === 0);
      });
    });
  }
}

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const sharp = require('sharp');
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`📤 Optimizando: ${path.basename(inputPath)} (${originalSize}MB)`);
    
    let pipeline = sharp(inputPath);
    
    // Redimensionar manteniendo aspecto
    pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
      fit: 'inside',
      withoutEnlargement: true
    });
    
    // Aplicar compresión según formato
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
    
    await pipeline.toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${originalSize}MB → ${newSize}MB (${savings}% reducción)`);
    
    return {
      success: true,
      originalSize: stats.size,
      optimizedSize: newStats.size,
      savings: parseFloat(savings)
    };
    
  } catch (error) {
    console.log(`❌ Error optimizando ${path.basename(inputPath)}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function uploadToCloudinary(filePath, folder, filename) {
  try {
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / 1024 / 1024).toFixed(2);
    
    if (stats.size > 10 * 1024 * 1024) {
      console.log(`❌ Archivo muy grande para Cloudinary (${sizeInMB}MB): ${filename}`);
      return { success: false, error: 'File too large' };
    }
    
    console.log(`☁️  Subiendo a Cloudinary: ${filename} (${sizeInMB}MB)`);
    
    const baseName = path.parse(filename).name;
    
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: `${folder}/${baseName}`,
      folder: `institutoisdep/${folder}`,
      resource_type: 'image',
      overwrite: true,
      transformation: [
        {
          fetch_format: 'auto',
          quality: 'auto:good'
        }
      ],
      tags: ['optimized', folder, 'institutoisdep']
    });
    
    console.log(`✅ ${filename} subido a Cloudinary`);
    console.log(`   URL: ${result.secure_url}`);
    
    return {
      success: true,
      public_id: result.public_id,
      secure_url: result.secure_url,
      bytes: result.bytes
    };
    
  } catch (error) {
    console.log(`❌ Error subiendo ${filename}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function processAllImages() {
  console.log('🚀 PROCESANDO TODAS LAS IMÁGENES DEL PROYECTO\n');
  
  // Verificar variables de entorno
  if (!process.env.VITE_CLOUDINARY_CLOUD_NAME || !process.env.VITE_CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.log('❌ Faltan variables de entorno de Cloudinary');
    process.exit(1);
  }
  
  // Instalar Sharp si es necesario
  const sharpOk = await installSharp();
  if (!sharpOk) {
    console.log('❌ No se pudo instalar Sharp');
    process.exit(1);
  }
  
  // Crear carpeta de optimizados
  const optimizedDir = path.join(__dirname, '..', 'src', 'assets', 'optimized-final');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  let totalProcessed = 0;
  let totalOptimized = 0;
  let totalUploaded = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  console.log(`☁️  Cloud: ${process.env.VITE_CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Salida: src/assets/optimized-final/\n`);
  
  // Procesar cada categoría
  for (const [category, config] of Object.entries(optimizationConfig)) {
    console.log(`\n📂 PROCESANDO: ${category.toUpperCase()}`);
    console.log(`   Configuración: ${config.maxWidth}x${config.maxHeight}, ${config.quality}% calidad`);
    
    for (const filename of config.files) {
      const inputPath = path.join(__dirname, '..', 'src', 'assets', filename);
      const outputPath = path.join(optimizedDir, filename);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Archivo no encontrado: ${filename}`);
        continue;
      }
      
      totalProcessed++;
      
      // 1. Optimizar imagen
      const optimizeResult = await optimizeImage(inputPath, outputPath, config);
      
      if (optimizeResult.success) {
        totalOptimized++;
        totalOriginalSize += optimizeResult.originalSize;
        totalOptimizedSize += optimizeResult.optimizedSize;
        
        // 2. Subir a Cloudinary
        const uploadResult = await uploadToCloudinary(outputPath, category, filename);
        
        if (uploadResult.success) {
          totalUploaded++;
        }
      }
      
      // Pausa entre archivos
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }
  
  // Resumen final
  console.log('\n🎯 RESUMEN FINAL:');
  console.log(`📊 Archivos procesados: ${totalProcessed}`);
  console.log(`✅ Optimizados exitosamente: ${totalOptimized}`);
  console.log(`☁️  Subidos a Cloudinary: ${totalUploaded}`);
  console.log(`📦 Tamaño original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📦 Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`💾 Espacio ahorrado: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📈 Reducción total: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
  
  if (totalUploaded > 0) {
    console.log('\n🎉 ¡PROCESO COMPLETADO EXITOSAMENTE!');
    console.log('Todas las imágenes están optimizadas y disponibles en Cloudinary.');
  }
}

processAllImages().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});