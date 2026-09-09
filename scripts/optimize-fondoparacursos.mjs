/* =====================================================================================
   OPTIMIZACIÓN DEL FONDO DE LA SECCIÓN DE CURSOS (fondoparacursos.jpg)

   La versión NUEVA reemplaza a la anterior, que solo copiaba el archivo original
   (31 MB, 8256x5504) sin optimizar nada, y que además generaba errores de lint.

   Esta versión usa sharp:
     - Redimensiona la fuente a un ancho máximo de 2560px.
     - Genera dos versiones en optimized-final/:
         * fondoparacursos.webp -> la que referencia localImages.js (más liviana)
         * fondoparacursos.jpg  -> fallback / compatibilidad con la referencia vieja
   ===================================================================================== */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src', 'assets');
const optimizedDir = path.join(projectRoot, 'src', 'assets', 'optimized-final');

const imageToOptimize = 'fondoparacursos.jpg';
const inputPath = path.join(srcDir, imageToOptimize);
const outputJpg = path.join(optimizedDir, 'fondoparacursos.jpg');
const outputWebp = path.join(optimizedDir, 'fondoparacursos.webp');

const MAX_WIDTH = 2560;
const WEBP_QUALITY = 72;
const JPEG_QUALITY = 78;

async function main() {
  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  ${imageToOptimize} no encontrado en ${srcDir}`);
    process.exit(1);
  }

  const originalBytes = fs.statSync(inputPath).size;

  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  const meta = await sharp(inputPath).metadata();
  const targetWidth = Math.min(meta.width, MAX_WIDTH);

  const pipeline = sharp(inputPath).resize({ width: targetWidth, withoutEnlargement: true });

  await pipeline.clone().webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(outputWebp);
  await pipeline.clone().jpeg({ quality: JPEG_QUALITY }).toFile(outputJpg);

  const webpBytes = fs.statSync(outputWebp).size;
  const jpgBytes = fs.statSync(outputJpg).size;

  console.log(`📄 Origen: ${(originalBytes / 1024 / 1024).toFixed(2)} MB (${meta.width}x${meta.height})`);
  console.log(`🪟 Redimensionado a: ${targetWidth}px de ancho`);
  console.log(`✅ fondoparacursos.webp: ${(webpBytes / 1024).toFixed(0)} KB  (-${Math.round((1 - webpBytes / originalBytes) * 100)}%)`);
  console.log(`✅ fondoparacursos.jpg : ${(jpgBytes / 1024).toFixed(0)} KB  (-${Math.round((1 - jpgBytes / originalBytes) * 100)}%)`);
}

main().catch((error) => {
  console.error('❌ Error optimizando fondoparacursos.jpg:', error.message);
  process.exit(1);
});