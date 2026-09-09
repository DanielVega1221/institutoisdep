/**
 * Post-build script: genera HTML estático con OG tags personalizados
 * para rutas específicas, para que los bots de preview de links
 * (WhatsApp, Telegram, Discord, etc.) lean los tags correctos.
 *
 * CAMBIO DE ESTA SESIÓN: además de las páginas fijas, ahora genera una página
 * por cada carrera y cada curso importando la fuente única de datos
 * (src/data/formaciones.js). Total: 5 fijas + 19 de detalle = 24 OG pages.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { carrerasData, cursosData, nombreFormacion } from '../src/data/formaciones.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');

const BASE_URL = 'https://www.isdep.com.ar';
const BANNER_IMAGE = `${BASE_URL}/banner.png`;

// Páginas con OG tags específicos
const pages = [
  {
    path: 'como-inscribirse',
    title: 'Formulario de Inscripción - ISDEP',
    description:
      'Completá el formulario de inscripción en ISDEP. Elegí tu formación y comenzá tu proceso de ingreso al instituto. Cursada online con título oficial.',
    url: `${BASE_URL}/como-inscribirse`,
    image: BANNER_IMAGE,
  },
  {
    path: 'nuestra-metodologia',
    title: 'Nuestra Metodología - ISDEP | Método de Estudio y Valores',
    description:
      'Conocé la metodología de ISDEP: una clase semanal, seguimiento personalizado, normativa de estudios clara y valores institucionales sólidos. Formación online de calidad.',
    url: `${BASE_URL}/nuestra-metodologia`,
    image: BANNER_IMAGE,
  },
  {
    path: 'avales',
    title: 'Avales - ISDEP | Instituto Superior de Enseñanza Profesional',
    description:
      'Conocé los avales y reconocimientos de ISDEP: entidades y asociaciones profesionales que respaldan nuestras formaciones en grafología, criminalística y ciencias forenses.',
    url: `${BASE_URL}/avales`,
    image: BANNER_IMAGE,
  },
  // Páginas de listado por tipo (cambio de la sesión anterior).
  {
    path: 'carreras',
    title: 'Carreras - ISDEP | Instituto Superior de Enseñanza Profesional',
    description:
      'Tecnicaturas, carreras y diplomaturas superiores de ISDEP en Psicología Social, Grafología, Criminalística y Criminología. Cursada online con título oficial.',
    url: `${BASE_URL}/carreras`,
    image: BANNER_IMAGE,
  },
  {
    path: 'cursos',
    title: 'Cursos - ISDEP | Instituto Superior de Enseñanza Profesional',
    description:
      'Capacitaciones, seminarios y diplomaturas de ISDEP en grafología, criminalística y ciencias forenses. Cursada online.',
    url: `${BASE_URL}/cursos`,
    image: BANNER_IMAGE,
  },
  // NUEVO (cambio de esta sesión): una OG page por cada carrera y cada curso,
  // generada desde la fuente única de datos.
  ...carrerasData.map((f) => ({
    path: `carreras/${f.slug}`,
    title: `${nombreFormacion(f)} - ISDEP`,
    description: f.miniIntro || f.descripcion,
    url: `${BASE_URL}/carreras/${f.slug}`,
    image: BANNER_IMAGE,
  })),
  ...cursosData.map((f) => ({
    path: `cursos/${f.slug}`,
    title: `${nombreFormacion(f)} - ISDEP`,
    description: f.miniIntro || f.descripcion,
    url: `${BASE_URL}/cursos/${f.slug}`,
    image: BANNER_IMAGE,
  })),
];

// Lee el index.html base generado por Vite
const baseHtml = readFileSync(`${distDir}/index.html`, 'utf-8');

for (const page of pages) {
  let html = baseHtml;

  // Título de la pestaña
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

  // Meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${page.description}" />`
  );

  // Canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${page.url}" />`
  );

  // Open Graph
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${page.url}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${page.image}" />`
  );

  // Twitter Card
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${page.image}" />`
  );

  const dir = `${distDir}/${page.path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html, 'utf-8');

  console.log(`✓ OG page generada: /${page.path}`);
}

console.log(`OG pages listas (${pages.length} en total).`);