#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputDir = path.resolve(__dirname, '../src/images');
const outputDir = path.resolve(__dirname, '../public/optimized-images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageExtensions = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif'];
const images = fs.readdirSync(inputDir).filter(file =>
  imageExtensions.includes(path.extname(file).toLowerCase())
);

if (images.length === 0) {
  console.log('No se encontraron imágenes en', inputDir);
  process.exit(0);
}

console.log(`Procesando ${images.length} imágenes...`);

let processed = 0;

images.forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const baseName = path.parse(file).name;
  const ext = path.parse(file).ext;
  const outputOriginal = path.join(outputDir, `${baseName}${ext}`);
  const outputWebp = path.join(outputDir, `${baseName}.webp`);

  // Comando para optimizar y convertir a WebP
  const cmd = `npx squoosh-cli --output-dir ${outputDir} --webp auto --mozjpeg auto --oxipng auto "${inputPath}"`;

  exec(cmd, (err, stdout, stderr) => {
    processed++;
    if (err) {
      console.error(`Error optimizando ${file}:`, stderr);
    } else {
      console.log(`✔ ${file} optimizada y convertida a WebP.`);
    }
    if (processed === images.length) {
      console.log('Optimización finalizada. Imágenes guardadas en', outputDir);
    }
  });
});
