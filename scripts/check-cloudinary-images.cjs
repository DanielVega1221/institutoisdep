const { v2: cloudinary } = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function listCloudinaryImages() {
  try {
    console.log('🔍 Buscando imágenes en Cloudinary...\n');
    
    const result = await cloudinary.search
      .expression('folder:institutoisdep/*')
      .sort_by([['created_at', 'desc']])
      .max_results(50)
      .execute();

    if (result.resources.length === 0) {
      console.log('❌ No se encontraron imágenes en la carpeta institutoisdep');
      return;
    }

    console.log(`✅ Se encontraron ${result.resources.length} imágenes:\n`);
    
    result.resources.forEach((resource, index) => {
      console.log(`${index + 1}. ${resource.public_id}`);
      console.log(`   URL: ${resource.secure_url}`);
      console.log(`   Carpeta: ${resource.folder || 'raíz'}`);
      console.log(`   Formato: ${resource.format}`);
      console.log(`   Tamaño: ${resource.width}x${resource.height}`);
      console.log('');
    });

  } catch (error) {
    console.error('❌ Error al consultar Cloudinary:', error.message);
  }
}

listCloudinaryImages();