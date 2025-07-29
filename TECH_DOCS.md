# ZUMGO - Documentación Técnica del Proyecto

## 📋 Información General del Proyecto

**Nombre:** Zumgo  
**Tipo:** Sitio web estático informativo (SPA)  
**Propósito:** Sitio informativo con imágenes y animaciones  
**Estado:** En desarrollo inicial

## 🛠️ Stack Técnico

### Framework Principal

- **Astro** (versión 5.x) - Framework principal
- **JavaScript** (NO TypeScript) - Lenguaje base
- **Node.js** con **NPM** como gestor de paquetes

### Estilado y Diseño

- **CSS vanilla** - Sin frameworks CSS
- **Sistema de variables CSS** personalizado
- **Diseño responsive** (móvil y desktop igual de importantes)

### Animaciones y Interactividad

- **GSAP** - Librería principal para animaciones
- **CSS Animations** - Para animaciones simples
- **Iconografía propia** - Sin librerías de iconos externas

### Funcionalidades Dinámicas

- **Formulario de contacto** - Única funcionalidad dinámica (envío por email)
- **Contenido estático** - No CMS, no rutas dinámicas, no datos externos

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── Header/
│   │   ├── Header.astro
│   │   └── Header.css
│   ├── Footer/
│   ├── Button/
│   └── Hero/
├── layouts/                 # Layouts de página
│   └── Layout.astro        # Layout principal con SEO
├── pages/                   # Páginas del sitio
│   └── index.astro         # Página principal
├── assets/                  # Recursos estáticos
│   ├── images/
│   └── icons/
├── styles/                  # Estilos globales
│   ├── variables.css       # Variables de diseño
│   └── global.css          # Estilos globales
└── utils/                   # Utilidades y helpers
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
/* Tamaños específicos */
--font-size-h1: 3.75rem /* 60px - Header principal */ --font-size-h2: 3rem
  /* 48px - Header secundario */ --font-size-h3: 2.25rem
  /* 36px - Header terciario */ --font-size-h4: 1.875rem
  /* 30px - Header cuarto */ --font-size-h5: 1.5rem /* 24px - Header quinto */
  --font-size-paragraph: 1rem /* 16px - Texto de párrafo */
  --font-size-menu: 0.875rem /* 14px - Texto de menú */;
```

### Espaciado

- Sistema basado en múltiplos de 4px
- Variables desde `--space-1` (4px) hasta `--space-32` (128px)
- Container máximo: 1200px

### Breakpoints

- **Mobile:** 0px
- **Tablet:** 768px
- **Desktop:** 1024px
- **Large:** 1200px

## 🔧 Configuración de Desarrollo

### Herramientas de Código

- **Prettier** configurado para archivos .astro
- **Plugin:** `prettier-plugin-astro`
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

- Repositorio ya conectado a Vercel
- Auto-deploy desde ramas configuradas
- Workflow: develop → master

## 📝 Convenciones y Patrones

### Estructura de Componentes

- Cada componente en su propia carpeta
- Archivo `.astro` + archivo `.css` correspondiente
- Naming convention: PascalCase para carpetas y archivos

### Estilos

- Variables CSS centralizadas en `variables.css`
- Estilos globales en `global.css`
- Estilos de componente en archivos separados
- Metodología: Componente-específico + utilidades globales

### Archivos de Configuración

- `.prettierrc` - Configuración de Prettier
- `astro.config.mjs` - Configuración de Astro
- `package.json` - Dependencias y scripts

## 🎯 Próximos Pasos Planificados

### Componentes a Crear

1. **Header** - Navegación principal
2. **Footer** - Pie de página
3. **Button** - Componente de botón reutilizable
4. **Hero** - Sección hero de la home
5. **Formulario de Contacto** - Con envío por email

### Integraciones Futuras

- Posible integración con **React** para componentes específicos
- Configuración del formulario de contacto (Formspree, EmailJS, etc.)
- Optimización de imágenes con Astro

## 📚 Recursos de Referencia

### Documentación

- [Astro Docs](https://docs.astro.build)
- [GSAP Docs](https://greensock.com/docs/)

### Diseño

- **Figma:** Diseño completo disponible
- **Assets:** Iconografía propia pendiente de integrar

## 🔍 Notas Importantes

1. **Sin TypeScript:** El proyecto está configurado específicamente para JavaScript
2. **Componentes Astro:** Usar sintaxis nativa de Astro, evitar frameworks a menos que sea necesario
3. **GSAP:** Recordar manejar correctamente la hidratación en componentes con animaciones
4. **SEO:** Layout ya configurado con meta tags básicos
5. **Responsive:** Diseño mobile-first, ambas versiones igual de importantes

---

**Última actualización:** Configuración inicial completada  
**Próxima milestone:** Creación de componentes base
