// utils/getOptimizedImagePaths.js
const fs = require('fs');
const path = require('path');

/**
 * Devuelve las rutas públicas de la imagen optimizada y su versión WebP
 * @param {string} imageName - Nombre de la imagen original (ej: 'foto.jpg')
 * @returns {{ src: string, webpSrc: string }}
 */
function getOptimizedImagePaths(imageName) {
  const baseName = path.parse(imageName).name;
  const ext = path.parse(imageName).ext;
  const src = `/optimized-images/${baseName}${ext}`;
  const webpSrc = `/optimized-images/${baseName}.webp`;
  return { src, webpSrc };
}

module.exports = getOptimizedImagePaths;
