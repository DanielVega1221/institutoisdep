#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, '../src/assets/cursosBanner.jpg');
const outputDir = path.resolve(__dirname, '../src/assets/optimized');

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Optimizando cursosBanner.jpg...');

// Verificar si existe la imagen original
if (!fs.existsSync(inputPath)) {
  console.error('No se encontró la imagen cursosBanner.jpg');
  process.exit(1);
}

// Comando para optimizar usando squoosh-cli
const cmd = `npx squoosh-cli --webp "{quality:82}" --mozjpeg "{quality:82}" --output-dir "${outputDir}" "${inputPath}"`;

exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error('Error optimizando la imagen:', stderr);
    console.log('Intentando con método alternativo...');
    
    // Método alternativo: copiar la imagen y crear WebP con herramientas del sistema
    const copyCmd = `copy "${inputPath}" "${path.join(outputDir, 'cursosBanner.jpg')}"`;
    exec(copyCmd, (copyErr) => {
      if (copyErr) {
        console.error('Error copiando la imagen:', copyErr);
      } else {
        console.log('✔ cursosBanner.jpg copiada a la carpeta optimized');
        console.log('Nota: Para mejor optimización, instala squoosh-cli globalmente: npm install -g @squoosh/cli');
      }
    });
  } else {
    console.log('✔ cursosBanner.jpg optimizada y convertida a WebP');
    console.log(stdout);
  }
});