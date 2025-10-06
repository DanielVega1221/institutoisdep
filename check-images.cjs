#!/usr/bin/env node

/**
 * Script para verificar qué imágenes ya están en Cloudinary
 * Ejecutar con: node check-images.cjs
 */

const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME?.replace('your-cloud-name-here', ''),
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const expectedImages = [
  'instituto-isdep/profesores/profesor',
  'instituto-isdep/profesores/profesor-girl',
  'instituto-isdep/profesores/curt',
  'instituto-isdep/anuncios/anuncio1imagen',
  'instituto-isdep/anuncios/anuncio2imagen',
  'instituto-isdep/anuncios/anuncio3imagen',
  'instituto-isdep/banners/cursos-banner',
  'instituto-isdep/fondos/fondo-inicio',
  'instituto-isdep/cards/card1',
  'instituto-isdep/cards/card2',
  'instituto-isdep/cards/cardmini1',
  'instituto-isdep/cards/cardmini2',
  'instituto-isdep/cards/cardmini3',
  'instituto-isdep/ilustraciones/grafologia-emocional',
  'instituto-isdep/ilustraciones/ilustracion',
  'instituto-isdep/logos/logo1',
  'instituto-isdep/logos/banderita',
  'instituto-isdep/logos/pluma'
];

async function checkImage(publicId) {
  try {
    const result = await cloudinary.api.resource(publicId);
    return {
      exists: true,
      url: result.secure_url,
      format: result.format,
      size: `${result.width}x${result.height}`,
      bytes: result.bytes
    };
  } catch (error) {
    return { exists: false, error: error.message };
  }
}

async function checkAllImages() {
  console.log('🔍 VERIFICANDO IMÁGENES EN CLOUDINARY\n');
  
  // Verificar configuración
  if (!process.env.VITE_CLOUDINARY_CLOUD_NAME || 
      process.env.VITE_CLOUDINARY_CLOUD_NAME === 'your-cloud-name-here') {
    console.log('❌ Error: VITE_CLOUDINARY_CLOUD_NAME no está configurado correctamente');
    process.exit(1);
  }
  
  console.log(`☁️  Cloud Name: ${process.env.VITE_CLOUDINARY_CLOUD_NAME}\n`);
  
  let found = 0;
  let missing = 0;
  
  for (const publicId of expectedImages) {
    const result = await checkImage(publicId);
    
    if (result.exists) {
      console.log(`✅ ${publicId}`);
      console.log(`   📏 ${result.size} | 💾 ${result.format} | 📦 ${Math.round(result.bytes/1024)}KB`);
      console.log(`   🔗 ${result.url}`);
      found++;
    } else {
      console.log(`❌ ${publicId} - NO ENCONTRADA`);
      missing++;
    }
    console.log('');
  }
  
  console.log('📊 RESUMEN:');
  console.log(`✅ Encontradas: ${found}`);
  console.log(`❌ Faltantes: ${missing}`);
  console.log(`📁 Total esperadas: ${expectedImages.length}\n`);
  
  if (missing > 0) {
    console.log('💡 Para subir las imágenes faltantes, ejecuta:');
    console.log('   node upload-images.cjs');
  } else {
    console.log('🎉 ¡Todas las imágenes están correctamente subidas!');
    console.log('💻 Tu aplicación puede usar Cloudinary sin problemas');
  }
}

checkAllImages().catch(error => {
  console.error('💥 Error:', error);
  process.exit(1);
});