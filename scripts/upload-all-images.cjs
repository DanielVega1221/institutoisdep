#!/usr/bin/env node

/**
 * Script para subir todas las imágenes desde optimized-final a Cloudinary
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

// Mapeo de archivos a carpetas en Cloudinary
const imageMapping = {
  // Banners
  'fondoInicio.jpg': 'banners',
  'cursosBanner.jpg': 'banners',
  
  // Anuncios
  'anuncio1imagen.jpg': 'anuncios',
  'anuncio2imagen.jpg': 'anuncios',
  'anuncio3imagen.jpg': 'anuncios',
  
  // Cards
  'card1.png': 'cards',
  'card2.png': 'cards',
  'GrafologiaEmocional.png': 'cards',
  'Ilustracion.png': 'cards',
  
  // Cards mini
  'cardmini1.png': 'cardsmini',
  'cardmini2.png': 'cardsmini',
  'cardmini3.png': 'cardsmini',
  
  // Iconos y logos
  'Logo1.png': 'icons',
  'banderita.png': 'icons',
  'pluma.png': 'icons',
  'pluma - copia.png': 'icons',
  'cursos.png': 'icons',
  'cursos - copia.png': 'icons',
  'curt.png': 'icons',
  
  // Personas
  'profesor.jpg': 'people',
  'profesor-girl.jpg': 'people',
  
  // Generales
  'imagen.jpg': 'general',
  'imagen1.jpeg': 'general',
  'imagen2.jpeg': 'general',
  'imagen3.png': 'general'
};

async function uploadImage(filename, folder) {
  const baseName = path.parse(filename).name;
  const filePath = path.join(__dirname, '..', 'src', 'assets', 'optimized-final', filename);
  
  // Verificar que el archivo existe
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Archivo no encontrado: ${filename}`);
    return { success: false, error: 'File not found' };
  }
  
  // Verificar tamaño
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  
  console.log(`📤 Subiendo ${filename} (${sizeInMB.toFixed(2)}MB) a carpeta "${folder}"...`);
  
  try {
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
    
    console.log(`✅ ${filename} subido exitosamente`);
    console.log(`   Public ID: ${result.public_id}`);
    console.log(`   URL: ${result.secure_url}`);
    console.log('');
    
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
    console.log(`❌ Error subiendo ${filename}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function uploadAllImages() {
  console.log('🚀 SUBIENDO TODAS LAS IMÁGENES A CLOUDINARY\n');
  console.log(`☁️  Cloud Name: ${process.env.VITE_CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Carpeta origen: src/assets/optimized-final/`);
  console.log(`📊 Total de imágenes: ${Object.keys(imageMapping).length}\n`);
  
  const results = {
    successful: [],
    failed: []
  };
  
  for (const [filename, folder] of Object.entries(imageMapping)) {
    const result = await uploadImage(filename, folder);
    
    if (result.success) {
      results.successful.push({ filename, folder, ...result.result });
    } else {
      results.failed.push({ filename, folder, error: result.error });
    }
    
    // Pequeña pausa entre subidas
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Resumen final
  console.log('📈 RESUMEN DE SUBIDA:');
  console.log(`✅ Exitosas: ${results.successful.length}`);
  console.log(`❌ Fallidas: ${results.failed.length}`);
  console.log(`📊 Total: ${Object.keys(imageMapping).length}\n`);
  
  if (results.failed.length > 0) {
    console.log('❌ ERRORES:');
    results.failed.forEach(item => {
      console.log(`   ${item.filename}: ${item.error}`);
    });
  }
  
  if (results.successful.length > 0) {
    console.log('\n✅ IMÁGENES SUBIDAS EXITOSAMENTE:');
    results.successful.forEach(item => {
      console.log(`   ${item.filename} → institutoisdep/${item.public_id}`);
    });
  }
  
  console.log('\n🎉 ¡Proceso completado!');
  console.log('Ahora todas las imágenes deberían estar disponibles en Cloudinary.');
}

// Ejecutar el script
uploadAllImages().catch(console.error);