# Zumgo Landing

Landing page corporativa de **Zumgo**, construida con Astro y enfocada en rendimiento, animaciones suaves y una narrativa de marca clara.

## Qué hay en este repo

Este proyecto contiene una única página principal (`/`) compuesta por secciones modulares:

- Hero
- Qué es Zumgo
- Máquina
- Estadísticas
- CTA
- Dónde encaja
- FAQs
- Ubicaciones
- Contacto
- Footer

La estructura está pensada para iterar rápido en copy, diseño y animaciones sin romper el resto de la landing.

## Stack técnico

- **Astro 5**
- **GSAP** para animaciones
- CSS modular por componente + estilos globales

## Estructura del proyecto

```text
.
├── public/                  # assets estáticos
├── src/
│   ├── components/          # bloques visuales de la landing
│   ├── layouts/             # layout base
│   ├── pages/               # rutas (actualmente index.astro)
│   └── styles/              # variables y estilos globales
├── astro.config.mjs
├── package.json
└── README.md
```

## Desarrollo local

```bash
npm install
npm run dev
```

Servidor de desarrollo: `http://localhost:4321`

## Build y preview

```bash
npm run build
npm run preview
```

## Scripts disponibles

- `npm run dev` → modo desarrollo
- `npm run build` → build de producción
- `npm run preview` → previsualizar build
- `npm run astro` → comandos de Astro CLI

## Convenciones recomendadas

- Mantener cada sección de la home encapsulada en su carpeta de componente (`.astro`, `.css`, `.js` si aplica).
- Evitar lógica de negocio compleja en componentes visuales.
- Priorizar performance (evitar JS innecesario en cliente).
- Mantener consistencia de naming en español para bloques de negocio de la landing.

## Estado actual

- ✅ Landing funcional y modular
- ✅ Preparada para iteración de contenido/diseño
- 🔜 Siguiente mejora sugerida: añadir guía de despliegue (Vercel/Netlify) y checklist SEO técnico

---

Si quieres, en el siguiente paso te preparo también un `CONTRIBUTING.md` corto para dejar estandarizado cómo trabajar en ramas, commits y PRs.