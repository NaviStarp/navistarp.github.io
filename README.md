# Navistarp Links & Portfolio Hub

Página de enlaces y portal personal ligera, rápida y moderna construida con **Astro** (0 KB de JavaScript en cliente por defecto, CSS inlined y ultra rápida).

## 🚀 Proyectos incluidos

1. **Horario & Notas Rápidas** (`https://navistarp.github.io/horario/`): PWA de horario diario, notas y sincronización Supabase.
2. **Apuntes II_2 (Quartz)** (`https://navistarp.github.io/II_2_Quartz/`): Publicación digital de apuntes del Grado en Ingeniería Informática.
3. **Portfolio Personal**: Tarjeta lista para activar en cuanto desarrolles la sección de portfolio.

---

## 📁 Estructura del Proyecto

```text
links/
├── dist/                  # Salida estática (index.html autocontenido listo para publicar)
├── src/
│   ├── components/        # Componentes modulares (Header, LinkCard, Icons, Footer)
│   ├── data/
│   │   └── links.ts       # ¡Aquí editas tus enlaces, bio y redes!
│   ├── layouts/
│   │   └── Layout.astro   # Metadatos SEO, Open Graph y fuentes
│   ├── pages/
│   │   └── index.astro    # Página principal
│   └── styles/
│       └── global.css     # Estilos y variables de diseño
├── astro.config.mjs       # Configuración de Astro (inlineStylesheets activado)
└── package.json
```

---

## ⚙️ Comandos

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila la web en `dist/` como HTML estático ultra ligero |
| `npm run preview` | Previsualiza localmente el build de producción |

---

## ✏️ ¿Cómo añadir o modificar enlaces?

Solo tienes que editar el archivo [`src/data/links.ts`](src/data/links.ts):

```typescript
export const links: LinkItem[] = [
  {
    id: "mi-nuevo-proyecto",
    title: "Nombre del Proyecto",
    description: "Breve descripción de lo que hace.",
    url: "https://navistarp.github.io/mi-proyecto/",
    icon: "terminal", // 'calendar' | 'book' | 'briefcase' | 'github' | 'terminal' | 'link'
    tags: ["React", "TypeScript"],
    badge: {
      text: "Nuevo",
      type: "new", // 'live' | 'wip' | 'new'
    },
  },
  // ...
];
```

---

## 🌐 Despliegue en GitHub Pages

Hay dos formas sencillas de publicarlo:

### Opción A (Recomendada: GitHub Actions)
Crea el archivo `.github/workflows/deploy.yml` para compilar y desplegar automáticamente en cada `git push`.

### Opción B (Directa / Sin CI)
Al ejecutar `npm run build`, se genera un único archivo `dist/index.html` 100% autocontenido (con todo el CSS y SVGs inlined, sin dependencias externas). Puedes subir este archivo directamente a tu repositorio de GitHub Pages (`navistarp.github.io` o rama `gh-pages`).
