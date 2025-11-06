# 🎬 Animación de Intro - Instrucciones

## ¿Cómo funciona la animación?

La animación de intro se muestra **cada vez que recargas la página** (F5, Ctrl+R, o recarga del navegador), pero **NO se muestra** cuando navegas entre páginas internas usando el menú de navegación.

## 🔄 Cuándo se muestra la animación

✅ **SE MUESTRA:**
- Al recargar la página (F5 o Ctrl+R)
- Al abrir la página por primera vez
- Al cerrar y reabrir el navegador
- Al hacer click en el logo para volver al inicio después de recargar

❌ **NO SE MUESTRA:**
- Al navegar desde HomePage a "Nuestra Institución"
- Al volver de "Nuestra Institución" a HomePage
- Al navegar entre secciones usando el menú
- Durante la navegación interna de React Router

## 🎨 Detalles de la animación

La animación dura aproximadamente **5 segundos** y sigue esta secuencia:

1. **0.5s**: Aparece el logo (fade in + scale)
2. **1.5s**: Aparece la frase "Capacitando Alumnos, Formando Profesionales"
3. **4.0s**: Comienza el fade out
4. **5.0s**: Se oculta completamente y se guarda en sessionStorage

## 🐛 Debugging

Si quieres ver mensajes de debug en la consola:
- Abre las DevTools (F12)
- Ve a la pestaña "Console"
- Verás mensajes como:
  - 🎬 Intro ya vista: false/true
  - 🎬 Iniciando animación de intro
  - ✨ Mostrando logo
  - ✨ Mostrando frase
  - 👋 Iniciando fade out
  - ✅ Finalizando intro

## ⚙️ Cómo funciona técnicamente

La animación usa una **variable global en memoria** (`hasShownIntroInThisNavigation`) que:
- Se resetea completamente cuando recargas la página (porque JavaScript se reinicia)
- Se mantiene durante la navegación con React Router (porque es navegación del lado del cliente)

Esto proporciona la mejor experiencia:
- Los usuarios ven la intro al entrar/recargar
- No ven la intro repetida al navegar entre páginas
- Es más rápido que usar sessionStorage
- No requiere limpieza manual
