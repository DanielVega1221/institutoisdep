#!/usr/bin/env node

/**
 * Script para subir todas las imágenes a Cloudinary
 * Ejecutar con: node upload-images.cjs
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configurar Cloudinary con las credenciales del .env
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME?.replace('your-cloud-name-here', ''),
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Mapeo de archivos locales a IDs de Cloudinary
const imageMappings = [
  // Profesores
  {
    localPath: 'src/assets/profesor.jpg',
    cloudinaryId: 'instituto-isdep/profesores/profesor',
    description: 'Foto del profesor masculino'
  },
  {
    localPath: 'src/assets/profesor-girl.jpg',
    cloudinaryId: 'instituto-isdep/profesores/profesor-girl',
    description: 'Foto de la profesora femenina'
  },
  {
    localPath: 'src/assets/curt.png',
    cloudinaryId: 'instituto-isdep/profesores/curt',
    description: 'Foto de Curt A. Honroth'
  },
  
  // Anuncios
  {
    localPath: 'src/assets/anuncio1imagen.jpg',
    cloudinaryId: 'instituto-isdep/anuncios/anuncio1imagen',
    description: 'Fondo del anuncio de Grafología Emocional'
  },
  {
    localPath: 'src/assets/anuncio2imagen.jpg',
    cloudinaryId: 'instituto-isdep/anuncios/anuncio2imagen',
    description: 'Fondo del anuncio de Psicología Social'
  },
  {
    localPath: 'src/assets/anuncio3imagen.jpg',
    cloudinaryId: 'instituto-isdep/anuncios/anuncio3imagen',
    description: 'Fondo del anuncio de Criminalística'
  },
  
  // Banners y fondos
  {
    localPath: 'src/assets/cursosBanner.jpg',
    cloudinaryId: 'instituto-isdep/banners/cursos-banner',
    description: 'Banner principal de cursos'
  },
  {
    localPath: 'src/assets/fondoInicio.jpg',
    cloudinaryId: 'instituto-isdep/fondos/fondo-inicio',
    description: 'Imagen de fondo del inicio'
  },
  
  // Cards
  {
    localPath: 'src/assets/card1.png',
    cloudinaryId: 'instituto-isdep/cards/card1',
    description: 'Card 1 de cursos'
  },
  {
    localPath: 'src/assets/card2.png',
    cloudinaryId: 'instituto-isdep/cards/card2',
    description: 'Card 2 de cursos'
  },
  {
    localPath: 'src/assets/cardmini1.png',
    cloudinaryId: 'instituto-isdep/cards/cardmini1',
    description: 'Card mini 1'
  },
  {
    localPath: 'src/assets/cardmini2.png',
    cloudinaryId: 'instituto-isdep/cards/cardmini2',
    description: 'Card mini 2'
  },
  {
    localPath: 'src/assets/cardmini3.png',
    cloudinaryId: 'instituto-isdep/cards/cardmini3',
    description: 'Card mini 3'
  },
  
  // Ilustraciones
  {
    localPath: 'src/assets/GrafologiaEmocional.png',
    cloudinaryId: 'instituto-isdep/ilustraciones/grafologia-emocional',
    description: 'Ilustración de Grafología Emocional'
  },
  {
    localPath: 'src/assets/Ilustracion.png',
    cloudinaryId: 'instituto-isdep/ilustraciones/ilustracion',
    description: 'Ilustración general'
  },
  
  // Logos
  {
    localPath: 'src/assets/Logo1.png',
    cloudinaryId: 'instituto-isdep/logos/logo1',
    description: 'Logo principal del instituto'
  },
  {
    localPath: 'src/assets/banderita.png',
    cloudinaryId: 'instituto-isdep/logos/banderita',
    description: 'Banderita del instituto'
  },
  {
    localPath: 'src/assets/pluma.png',
    cloudinaryId: 'instituto-isdep/logos/pluma',
    description: 'Logo de pluma'
  }
];

async function uploadImage(mapping) {
  const { localPath, cloudinaryId, description } = mapping;
  const fullPath = path.join(__dirname, localPath);
  
  // Verificar que el archivo existe
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Archivo no encontrado: ${localPath}`);
    return false;
  }
  
  try {
    console.log(`📤 Subiendo: ${localPath} -> ${cloudinaryId}`);
    
    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: cloudinaryId,
      overwrite: true,
      resource_type: 'auto',
      context: {
        description: description,
        project: 'Instituto ISDEP',
        uploaded_by: 'automation_script'
      },
      // Optimizaciones más compatibles
      quality: 'auto:good',
      // Compresión para archivos grandes
      transformation: [
        { quality: 'auto:good' },
        { fetch_format: 'auto' }
      ]
    });
    
    console.log(`✅ Subido exitosamente: ${cloudinaryId}`);
    console.log(`   📏 Tamaño: ${result.width}x${result.height}`);
    console.log(`   💾 Formato: ${result.format}`);
    console.log(`   🔗 URL: ${result.secure_url}`);
    console.log('');
    
    return true;
  } catch (error) {
    console.log(`❌ Error subiendo ${localPath}:`, error.message);
    return false;
  }
}

async function uploadAllImages() {
  console.log('🚀 INICIANDO SUBIDA DE IMÁGENES A CLOUDINARY\n');
  
  // Verificar configuración
  if (!process.env.VITE_CLOUDINARY_CLOUD_NAME || 
      process.env.VITE_CLOUDINARY_CLOUD_NAME === 'your-cloud-name-here') {
    console.log('❌ Error: VITE_CLOUDINARY_CLOUD_NAME no está configurado correctamente');
    console.log('   Por favor, edita el archivo .env y reemplaza "your-cloud-name-here" con tu Cloud Name real');
    process.exit(1);
  }
  
  if (!process.env.CLOUDINARY_API_SECRET) {
    console.log('❌ Error: CLOUDINARY_API_SECRET no está configurado');
    console.log('   Por favor, verifica el archivo .env');
    process.exit(1);
  }
  
  console.log(`☁️  Cloud Name: ${process.env.VITE_CLOUDINARY_CLOUD_NAME}`);
  console.log(`🔑 API Key: ${process.env.VITE_CLOUDINARY_API_KEY}`);
  console.log(`📁 Total de imágenes a subir: ${imageMappings.length}\n`);
  
  let successful = 0;
  let failed = 0;
  
  for (const mapping of imageMappings) {
    const success = await uploadImage(mapping);
    if (success) {
      successful++;
    } else {
      failed++;
    }
    
    // Pequeña pausa entre subidas para no saturar la API
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('📊 RESUMEN DE SUBIDA:');
  console.log(`✅ Exitosas: ${successful}`);
  console.log(`❌ Fallidas: ${failed}`);
  console.log(`📁 Total: ${imageMappings.length}\n`);
  
  if (successful > 0) {
    console.log('🎉 ¡Imágenes subidas exitosamente!');
    console.log('🔗 Puedes verlas en tu dashboard de Cloudinary');
    console.log('💻 Ahora puedes usar los componentes React con Cloudinary');
  }
  
  if (failed > 0) {
    console.log('⚠️  Algunas imágenes no se pudieron subir. Revisa los errores arriba.');
  }
}

// Ejecutar el script
uploadAllImages().catch(error => {
  console.error('💥 Error fatal:', error);
  process.exit(1);
});