#!/usr/bin/env node

/**
 * Script de verificación de seguridad para Cloudinary
 * Ejecutar con: node security-check.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔒 VERIFICACIÓN DE SEGURIDAD CLOUDINARY\n');

// 1. Verificar que .env existe y no está en Git
const envPath = path.join(__dirname, '.env');
const gitignorePath = path.join(__dirname, '.gitignore');

if (fs.existsSync(envPath)) {
  console.log('✅ Archivo .env encontrado');
  
  // Leer .env y verificar contenido
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  if (envContent.includes('VITE_CLOUDINARY_CLOUD_NAME')) {
    console.log('✅ VITE_CLOUDINARY_CLOUD_NAME configurado');
  } else {
    console.log('❌ VITE_CLOUDINARY_CLOUD_NAME NO configurado');
  }
  
  if (envContent.includes('CLOUDINARY_API_SECRET') && !envContent.includes('VITE_CLOUDINARY_API_SECRET')) {
    console.log('✅ API Secret correctamente configurado (sin prefijo VITE_)');
  } else {
    console.log('🚨 PELIGRO: API Secret mal configurado');
  }
} else {
  console.log('❌ Archivo .env no encontrado');
}

// 2. Verificar .gitignore
if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  
  if (gitignoreContent.includes('.env')) {
    console.log('✅ .env está en .gitignore');
  } else {
    console.log('🚨 PELIGRO: .env NO está en .gitignore');
  }
} else {
  console.log('❌ .gitignore no encontrado');
}

// 3. Verificar que no hay credenciales hardcodeadas
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
  console.log('\n🔍 Buscando credenciales hardcodeadas...');
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Buscar patrones peligrosos
        const dangerousPatterns = [
          /cloudName:\s*['"`][^'"`\s]+['"`]/,
          /api_key:\s*['"`]\d+['"`]/,
          /api_secret:\s*['"`][A-Za-z0-9_-]+['"`]/,
          /788139197256218/,
          /hEWtVWLCoxcfEhg_2OPGImfacj8/
        ];
        
        dangerousPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            console.log(`🚨 CREDENCIALES HARDCODEADAS en: ${filePath}`);
          }
        });
      }
    });
  }
  
  checkDirectory(srcPath);
  console.log('✅ Verificación de credenciales hardcodeadas completada');
}

console.log('\n📋 RESUMEN DE SEGURIDAD:');
console.log('- Archivo .env debe existir y estar en .gitignore');
console.log('- Solo variables VITE_ deben exponerse al frontend');
console.log('- API Secret nunca debe tener prefijo VITE_');
console.log('- No debe haber credenciales hardcodeadas en el código');

console.log('\n🔗 Revisa CLOUDINARY_SECURITY.md para más detalles');