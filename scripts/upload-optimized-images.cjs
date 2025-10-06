#!/usr/bin/env node

/**
 * Script para subir SOLO las imágenes optimizadas a Cloudinary
 * Estas ya están comprimidas y deberían estar bajo el límite de 10MB
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

// Imágenes optimizadas a subir (desde src/assets/optimized/)
const optimizedImages = [
  // Carrusel
  { file: '1.jpg', folder: 'carousel' },
  { file: '1.webp', folder: 'carousel' },
  { file: '2.jpg', folder: 'carousel' },
  { file: '2.webp', folder: 'carousel' },
  { file: '3.jpg', folder: 'carousel' },
  { file: '3.webp', folder: 'carousel' },
  { file: '4.jpg', folder: 'carousel' },
  { file: '4.webp', folder: 'carousel' },
  
  // Anuncios
  { file: 'anuncio1imagen.jpg', folder: 'anuncios' },
  { file: 'anuncio2imagen.jpg', folder: 'anuncios' },
  { file: 'anuncio3imagen.jpg', folder: 'anuncios' },
  
  // Banners
  { file: 'cursosBanner.jpg', folder: 'banners' },
  { file: 'fondoInicio.jpg', folder: 'banners' }
];

async function checkFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const sizeInMB = stats.size / (1024 * 1024);
    return {
      exists: true,
      size: sizeInMB,
      underLimit: sizeInMB < 10
    };
  } catch (error) {
    return {
      exists: false,
      size: 0,
      underLimit: false
    };
  }
}

async function uploadOptimizedImage(imageInfo) {
  const { file, folder } = imageInfo;
  const baseName = path.parse(file).name;
  const extension = path.parse(file).ext;
  
  // Ruta del archivo optimizado
  const filePath = path.join(__dirname, '..', 'src', 'assets', 'optimized', file);
  
  // Verificar tamaño del archivo
  const fileCheck = await checkFileSize(filePath);
  
  if (!fileCheck.exists) {
    console.log(`❌ Archivo no encontrado: ${file}`);
    return { success: false, error: 'File not found' };
  }
  
  if (!fileCheck.underLimit) {
    console.log(`⚠️  Archivo muy grande (${fileCheck.size.toFixed(2)}MB): ${file}`);
    return { success: false, error: 'File too large' };
  }
  
  console.log(`📤 Subiendo ${file} (${fileCheck.size.toFixed(2)}MB)...`);
  
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: `${folder}/${baseName}`,
      folder: `institutoisdep/${folder}`,
      resource_type: 'image',
      overwrite: true,
      // Transformaciones básicas
      transformation: [
        {
          fetch_format: 'auto',
          quality: 'auto:good'
        }
      ],
      // Tags para organización
      tags: ['optimized', folder, 'institutoisdep']
    });
    
    console.log(`✅ ${file} subido exitosamente`);
    console.log(`   URL: ${result.secure_url}`);
    console.log(`   Tamaño final: ${(result.bytes / 1024 / 1024).toFixed(2)}MB`);
    
    return { 
      success: true, 
      result: {
        public_id: result.public_id,
        secure_url: result.secure_url,
        bytes: result.bytes,
        format: result.format
      }
    };
    
  } catch (error) {
    console.log(`❌ Error subiendo ${file}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function uploadAllOptimizedImages() {
  console.log('🚀 SUBIENDO IMÁGENES OPTIMIZADAS A CLOUDINARY\n');
  
  // Verificar configuración
  if (!process.env.VITE_CLOUDINARY_CLOUD_NAME || !process.env.VITE_CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.log('❌ Faltan variables de entorno de Cloudinary');
    console.log('Verificar: VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
    process.exit(1);
  }
  
  console.log(`☁️  Cloud Name: ${process.env.VITE_CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Carpeta optimizada: src/assets/optimized/`);
  console.log(`📊 Total de imágenes: ${optimizedImages.length}\n`);
  
  let successCount = 0;
  let failCount = 0;
  const results = [];
  
  // Subir cada imagen
  for (const imageInfo of optimizedImages) {
    const result = await uploadOptimizedImage(imageInfo);
    results.push({ ...imageInfo, ...result });
    
    if (result.success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Pausa entre subidas para no saturar la API
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Resumen final
  console.log('\n📈 RESUMEN DE SUBIDA:');
  console.log(`✅ Exitosas: ${successCount}`);
  console.log(`❌ Fallidas: ${failCount}`);
  console.log(`📊 Total: ${optimizedImages.length}`);
  
  if (failCount > 0) {
    console.log('\n❌ ERRORES:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   ${r.file}: ${r.error}`);
    });
  }
  
  if (successCount > 0) {
    console.log('\n✅ IMÁGENES SUBIDAS:');
    results.filter(r => r.success).forEach(r => {
      console.log(`   ${r.file} → institutoisdep/${r.folder}/${path.parse(r.file).name}`);
    });
    
    console.log('\n🎯 PRÓXIMO PASO:');
    console.log('Las imágenes están disponibles en Cloudinary.');
    console.log('Puedes usar CloudinaryImage.jsx para mostrarlas optimizadas.');
  }
}

uploadAllOptimizedImages().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});