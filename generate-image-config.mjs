#!/usr/bin/env node

/**
 * Script para crear un mapeado de imágenes optimizadas WebP
 * Genera un archivo de configuración para usar en el código
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear configuración de imágenes optimizadas
const createImageMapping = () => {
  const imagesDir = path.join(__dirname, 'public', 'images');
  const webpFiles = fs.readdirSync(imagesDir).filter(file => file.endsWith('.webp'));
  
  const imageMapping = {
    metadata: {
      generated: new Date().toISOString(),
      description: 'Mapeo de imágenes optimizadas - Instituto ISDEP',
      totalWebpFiles: webpFiles.length,
      optimization: {
        format: 'WebP',
        averageReduction: '92.4%',
        totalSpaceSaved: '6.70MB'
      }
    },
    images: {}
  };

  // Mapear cada imagen WebP
  webpFiles.forEach(webpFile => {
    const baseName = path.parse(webpFile).name;
    const stats = fs.statSync(path.join(imagesDir, webpFile));
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    imageMapping.images[baseName] = {
      webp: `/images/${webpFile}`,
      size: `${sizeKB}KB`,
      fallback: checkForFallback(baseName, imagesDir)
    };
  });

  return imageMapping;
};

// Buscar imagen de fallback (JPG o PNG original)
const checkForFallback = (baseName, imagesDir) => {
  const possibleFallbacks = [
    `${baseName}.jpg`,
    `${baseName}.jpeg`, 
    `${baseName}.png`
  ];
  
  for (const fallback of possibleFallbacks) {
    if (fs.existsSync(path.join(imagesDir, fallback))) {
      return `/images/${fallback}`;
    }
  }
  return null;
};

// Generar archivo de mapeo
const generateImageMappingFile = () => {
  const mapping = createImageMapping();
  
  // Generar archivo JSON
  const jsonPath = path.join(__dirname, 'src', 'utils', 'optimizedImages.json');
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(mapping, null, 2));
  
  // Generar archivo JS para importar
  const jsContent = `// Configuración de imágenes optimizadas - Generado automáticamente
// Fecha: ${new Date().toLocaleString()}

export const optimizedImages = ${JSON.stringify(mapping.images, null, 2)};

export const getOptimizedImage = (imageName) => {
  const imageConfig = optimizedImages[imageName];
  if (!imageConfig) {
    console.warn(\`Imagen no encontrada en optimizadas: \${imageName}\`);
    return null;
  }
  return imageConfig;
};

export const getImageSrc = (imageName, useWebP = true) => {
  const imageConfig = getOptimizedImage(imageName);
  if (!imageConfig) return null;
  
  // Detectar soporte WebP del navegador
  const supportsWebP = useWebP && typeof window !== 'undefined' && 
    window.HTMLCanvasElement && 
    window.HTMLCanvasElement.prototype.toDataURL &&
    window.HTMLCanvasElement.prototype.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  return supportsWebP ? imageConfig.webp : (imageConfig.fallback || imageConfig.webp);
};

// Metadatos de optimización
export const optimizationStats = ${JSON.stringify(mapping.metadata, null, 2)};
`;

  const jsPath = path.join(__dirname, 'src', 'utils', 'optimizedImages.js');
  fs.writeFileSync(jsPath, jsContent);
  
  return { jsonPath, jsPath, mapping };
};

// Generar componente React para imágenes optimizadas
const generateOptimizedImageComponent = () => {
  const componentContent = `import React from 'react';
import { getOptimizedImage } from '../utils/optimizedImages.js';

/**
 * Componente para mostrar imágenes optimizadas con fallback automático
 * @param {string} imageName - Nombre de la imagen (sin extensión)
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS
 * @param {object} style - Estilos inline
 * @param {boolean} useWebP - Si usar WebP cuando esté disponible (default: true)
 */
const OptimizedImage = ({ 
  imageName, 
  alt, 
  className = '', 
  style = {}, 
  useWebP = true,
  ...props 
}) => {
  const imageConfig = getOptimizedImage(imageName);
  
  if (!imageConfig) {
    console.warn(\`Imagen optimizada no encontrada: \${imageName}\`);
    return <div className="image-placeholder">Imagen no encontrada</div>;
  }
  
  return (
    <picture>
      {/* WebP para navegadores compatibles */}
      {useWebP && imageConfig.webp && (
        <source srcSet={imageConfig.webp} type="image/webp" />
      )}
      
      {/* Fallback para navegadores antiguos */}
      <img 
        src={imageConfig.fallback || imageConfig.webp}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
`;

  const componentPath = path.join(__dirname, 'src', 'components', 'OptimizedImage.jsx');
  fs.mkdirSync(path.dirname(componentPath), { recursive: true });
  fs.writeFileSync(componentPath, componentContent);
  
  return componentPath;
};

// Función principal
const main = () => {
  console.log('🚀 GENERANDO CONFIGURACIÓN DE IMÁGENES OPTIMIZADAS\n');
  
  try {
    const { jsonPath, jsPath, mapping } = generateImageMappingFile();
    const componentPath = generateOptimizedImageComponent();
    
    console.log('✅ ARCHIVOS GENERADOS:');
    console.log(`📁 ${path.relative(__dirname, jsonPath)}`);
    console.log(`📁 ${path.relative(__dirname, jsPath)}`);
    console.log(`📁 ${path.relative(__dirname, componentPath)}`);
    
    console.log(`\n📊 ESTADÍSTICAS:`);
    console.log(`   Imágenes WebP: ${mapping.metadata.totalWebpFiles}`);
    console.log(`   Reducción promedio: ${mapping.metadata.optimization.averageReduction}`);
    console.log(`   Espacio ahorrado: ${mapping.metadata.optimization.totalSpaceSaved}`);
    
    console.log(`\n🎯 IMÁGENES DISPONIBLES:`);
    Object.entries(mapping.images).forEach(([name, config]) => {
      const hasFallback = config.fallback ? '✅' : '⚠️';
      console.log(`   ${hasFallback} ${name} (${config.size})`);
    });
    
    console.log(`\n💡 CÓMO USAR:`);
    console.log(`   import OptimizedImage from './components/OptimizedImage';`);
    console.log(`   <OptimizedImage imageName="criminalistica" alt="Criminalistic" />`);
    console.log(`   <OptimizedImage imageName="psicologiasocial" alt="Psicología Social" />`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

main();