# ZUMGO - Documentación Técnica del Proyecto

## 📋 Información General del Proyecto

**Nombre:** Zumgo  
**Tipo:** Sitio web estático informativo (SPA)  
**Propósito:** Sitio informativo con imágenes y animaciones  
**Estado:** Configuración base completada - Listo para componentes

## 🛠️ Stack Técnico

### Framework Principal

- **Astro** (versión 5.x) - Framework principal
- **JavaScript** (NO TypeScript) - Lenguaje base
- **Node.js** con **NPM** como gestor de paquetes

### Estilado y Diseño

- **CSS vanilla** - Sin frameworks CSS
- **Sistema de variables CSS** personalizado integrado en Layout
- **Diseño responsive** (móvil y desktop igual de importantes)
- **Ancho máximo fijo:** 1400px para toda la web

### Animaciones y Interactividad

- **GSAP** - Librería principal para animaciones (instalada)
- **CSS Animations** - Para animaciones simples
- **Iconografía propia** - Sin librerías de iconos externas

### Funcionalidades Dinámicas

- **Formulario de contacto** - Única funcionalidad dinámica (pendiente)
- **Contenido estático** - No CMS, no rutas dinámicas, no datos externos

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables (pendientes)
├── layouts/
│   └── Layout.astro        # Layout principal con TODO integrado
├── pages/
│   └── index.astro         # Página de prueba del sistema
└── utils/                   # Utilidades y helpers (vacía)

public/
├── fonts/                   # ✅ Fuentes personalizadas funcionando
│   ├── Coolvetica-Rg.woff2
│   ├── EmiliaNote.woff2
│   ├── HelveticaNeue-bold-condensed.woff2
│   └── HelveticaNeue-regular.woff2
└── favicon.svg
```

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
/* Colores de marca */
--color-yellow: #eaa021 /* Amarillo vibrante */ --color-mint: #249e75
  /* Verde menta */ --color-orange: #d85a30 /* Naranja terracota */
  --color-forest: #09432e /* Verde bosque */ --color-cream: #fce2b7
  /* Beige crema */ /* Colores neutros */ --color-white: #ffffff
  --color-black: #000000 --color-gray-[100-900] /* Escala de grises completa */;
```

### Tipografía

```css
/* Fuentes asignadas por el diseñador UX/UI */
H1, H2: Coolvetica-Rg (120px/110px y 80px/76px)
H3: HelveticaNeue-bold-condensed (20px/25px)
H4, Párrafos: HelveticaNeue-regular (20px/22px y 20px/21px)
H5: EmiliaNote (30px/31px)
Text1: .text-special (25px/24px) - Para casos muy específicos
Menú: .menu-text (20px/20px)
```

### Layout

- **Ancho máximo del sitio:** 1400px (toda la web centrada)
- **Contenedor de contenido:** 1200px máximo
- **Sistema de espaciado:** Múltiplos de 4px
- **Responsive:** Mobile-first, H1/H2 se reducen en móvil

### Breakpoints

- **Mobile:** 0px
- **Tablet:** 768px
- **Desktop:** 1024px
- **Large:** 1200px

## 🔧 Configuración de Desarrollo

### Herramientas de Código

- **Prettier** configurado para archivos .astro
- **Plugin:** `prettier-plugin-astro` instalado
- **VSCode Extensions:** Astro oficial + Prettier

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

### Dependencias Principales

```json
{
  "astro": "^5.12.5",
  "gsap": "^3.13.0"
}
```

### Dependencias de Desarrollo

```json
{
  "prettier-plugin-astro": "^0.14.1"
}
```

## 🚀 Despliegue y Git

### Hosting

- **Vercel** - Plataforma de hosting
- **Producción:** rama `master`
- **Preproducción:** rama `develop`

### Configuración Git

- Repositorio conectado a Vercel
- Auto-deploy desde ramas configuradas
- Workflow: develop → master

## 📝 Convenciones y Patrones

### Arquitectura CSS

- **TODO integrado en Layout.astro** con `<style is:global>`
- **@font-face** definidos directamente en Layout
- **Variables CSS** centralizadas en :root del Layout
- **Estilos de componente** irán en archivos separados

### Estructura de Componentes (futura)

- Cada componente en su propia carpeta
- Archivo `.astro` + archivo `.css` correspondiente
- Naming convention: PascalCase para carpetas y archivos

### Archivos de Configuración

- `.prettierrc` - Configuración de Prettier con plugin Astro
- `astro.config.mjs` - Configuración básica de Astro
- `package.json` - Dependencias y scripts
- `TECH_DOCS.md` - Este documento (contexto para Claude)

## 🎯 Próximos Pasos Inmediatos

### Componentes a Crear

1. **Header** - Navegación principal
2. **Footer** - Pie de página
3. **Button** - Componente de botón reutilizable
4. **Hero** - Sección hero de la home

### Integraciones Futuras

- Configuración del formulario de contacto (Formspree, EmailJS, etc.)
- Posible integración con **React** para componentes específicos
- Optimización de imágenes con Astro

## 📚 Recursos de Referencia

### Documentación

- [Astro Docs](https://docs.astro.build)
- [GSAP Docs](https://greensock.com/docs/)

### Diseño

- **Figma:** Diseño completo disponible con sistema de diseño
- **Assets:** Fuentes personalizadas ya integradas

## 🔍 Notas Importantes

1. **Sin TypeScript:** Proyecto configurado específicamente para JavaScript
2. **Fuentes funcionando:** Todas las fuentes personalizadas cargando correctamente desde `/fonts/`
3. **Layout centralizado:** Todo el CSS base está en Layout.astro con `is:global`
4. **Ancho fijo:** Web limitada a 1400px, centrada en pantallas grandes
5. **GSAP listo:** Instalado y disponible para animaciones
6. **Sistema probado:** Página de prueba funcionando con todos los estilos

## ✅ Estado Actual

- ✅ **Configuración base** completada
- ✅ **Sistema de fuentes** funcionando
- ✅ **Paleta de colores** implementada
- ✅ **Layout responsive** configurado
- ✅ **Variables CSS** organizadas
- ✅ **Prettier** configurado para .astro

---

**Última actualización:** Sistema de diseño base completado  
**Próxima milestone:** Creación de componentes base (Header, Button, Hero)
