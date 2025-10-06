# Configuración de Cloudinary

## 🚀 Configuración Automática (RECOMENDADO)

### Paso 1: Obtener tu Cloud Name
1. Ve a [cloudinary.com](https://cloudinary.com)
2. Crea una cuenta gratuita
3. En el dashboard, copia tu **Cloud Name** (aparece arriba)

### Paso 2: Configurar credenciales
1. Abre el archivo `.env` en la raíz del proyecto
2. Reemplaza `your-cloud-name-here` con tu Cloud Name real:
```bash
VITE_CLOUDINARY_CLOUD_NAME=tu-cloud-name-aqui
```
3. Las credenciales API ya están configuradas correctamente

### Paso 3: Subir todas las imágenes automáticamente
```bash
# Verificar qué imágenes están subidas
node check-images.cjs

# Subir todas las imágenes automáticamente
node upload-images.cjs
```

### Paso 4: Verificar que todo funciona
```bash
# Verificar configuración de seguridad
node security-check.cjs

# Verificar que todas las imágenes están subidas
node check-images.cjs
```

---

## 📁 Imágenes que se suben automáticamente

El script `upload-images.cjs` sube estas imágenes con los nombres correctos:

### Profesores:
- `src/assets/profesor.jpg` → `instituto-isdep/profesores/profesor`
- `src/assets/profesor-girl.jpg` → `instituto-isdep/profesores/profesor-girl`
- `src/assets/curt.png` → `instituto-isdep/profesores/curt`

### Anuncios:
- `src/assets/anuncio1imagen.jpg` → `instituto-isdep/anuncios/anuncio1imagen`
- `src/assets/anuncio2imagen.jpg` → `instituto-isdep/anuncios/anuncio2imagen`
- `src/assets/anuncio3imagen.jpg` → `instituto-isdep/anuncios/anuncio3imagen`

### Banners y fondos:
- `src/assets/cursosBanner.jpg` → `instituto-isdep/banners/cursos-banner`
- `src/assets/fondoInicio.jpg` → `instituto-isdep/fondos/fondo-inicio`

### Cards:
- `src/assets/card1.png` → `instituto-isdep/cards/card1`
- `src/assets/card2.png` → `instituto-isdep/cards/card2`
- `src/assets/cardmini1.png` → `instituto-isdep/cards/cardmini1`
- `src/assets/cardmini2.png` → `instituto-isdep/cards/cardmini2`
- `src/assets/cardmini3.png` → `instituto-isdep/cards/cardmini3`

### Ilustraciones:
- `src/assets/GrafologiaEmocional.png` → `instituto-isdep/ilustraciones/grafologia-emocional`
- `src/assets/Ilustracion.png` → `instituto-isdep/ilustraciones/ilustracion`

### Logos:
- `src/assets/Logo1.png` → `instituto-isdep/logos/logo1`
- `src/assets/banderita.png` → `instituto-isdep/logos/banderita`
- `src/assets/pluma.png` → `instituto-isdep/logos/pluma`

---

## 🔧 Scripts disponibles

```bash
# Verificar configuración de seguridad
node security-check.cjs

# Verificar qué imágenes ya están en Cloudinary
node check-images.cjs

# Subir todas las imágenes a Cloudinary
node upload-images.cjs
```

---

## ✅ Beneficios de esta configuración

- 🚀 **Subida automática**: Un comando sube todas las imágenes
- 🏷️ **Nombres consistentes**: Los IDs siguen una estructura organizada
- 🔄 **Sobrescritura segura**: Las imágenes se actualizan si cambias el archivo local
- 📊 **Verificación completa**: Scripts para verificar que todo esté bien
- 🛡️ **Fallback robusto**: Si falla Cloudinary, usa imágenes locales
- 📈 **Optimización automática**: Cloudinary optimiza formato y calidad

---

## 🔄 Flujo de trabajo

1. **Primera vez**: 
   - Configura tu Cloud Name en `.env`
   - Ejecuta `node upload-images.cjs`

2. **Cuando cambies imágenes**:
   - Reemplaza el archivo en `src/assets/`
   - Ejecuta `node upload-images.cjs` otra vez

3. **Para verificar**:
   - `node check-images.cjs` - Ver qué está subido
   - `node security-check.cjs` - Verificar seguridad

---

## 🏗️ Cómo funciona en el código

### EquipoDocente.jsx:
```jsx
<CloudinaryImage
  publicId="instituto-isdep/profesores/profesor-girl"
  fallbackSrc={professorGirl}
  alt={docente.nombre}
  className="docente-image"
  configType="profesorCard"
/>
```

### Anuncios.jsx:
```jsx
<CloudinaryAnuncioCard
  cloudinaryId="instituto-isdep/anuncios/anuncio1imagen"
  fallbackSrc={anuncio1ImagenOrig}
  className="anuncio-card-grafologia-seminario"
>
```

---

## 🆘 Resolución de problemas

### "Error: VITE_CLOUDINARY_CLOUD_NAME no está configurado"
- Verifica que editaste el archivo `.env` correctamente
- Asegúrate de reemplazar `your-cloud-name-here` con tu Cloud Name real

### "Archivo no encontrado"
- Verifica que la imagen existe en `src/assets/`
- El script busca exactamente los nombres de archivo mostrados arriba

### "Error de permisos"
- Verifica que las credenciales en `.env` son correctas
- Tu cuenta de Cloudinary debe tener permisos de subida

### Las imágenes no se ven en la web
- Ejecuta `node check-images.cjs` para verificar que están subidas
- Verifica en el dashboard de Cloudinary que las imágenes existen

---

¡Con esta configuración, tus imágenes se cargarán súper rápido y optimizadas automáticamente! 🚀