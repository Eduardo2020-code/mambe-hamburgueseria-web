# Mambe Hamburguesería — sitio web Angular

Sitio informativo responsive para **Mambe Hamburguesería**, construido con Angular 19, componentes standalone y SCSS.

## Requisitos

- Node.js 20 o 22
- npm 10 o superior
- Visual Studio Code

## Ejecutar el proyecto

Abre una terminal en esta carpeta:

```bash
npm install
npm start
```

La página se abrirá en:

```text
http://localhost:4200
```

## Compilar para producción

```bash
npm run build
```

El resultado queda en:

```text
dist/mambe-hamburgueseria/browser
```

## Información que debes cambiar

Toda la información editable está centralizada en:

```text
src/app/core/config/site.config.ts
```

Allí debes actualizar:

- WhatsApp.
- Teléfonos.
- Direcciones de Andalucía y Tuluá.
- Horarios.
- Enlaces de Google Maps.
- Instagram, Facebook y TikTok.
- Correo electrónico.
- Textos, nombres y datos de contacto.

## Imágenes

Las imágenes se encuentran en:

```text
public/assets/images
```

Puedes reemplazarlas conservando los mismos nombres para no modificar el código.

## Estructura principal

```text
src/app/
├── core/
│   ├── config/
│   └── models/
├── pages/
│   └── home/
├── shared/
│   ├── components/
│   └── directives/
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

## Diseño y animaciones

El proyecto incluye:

- Navegación fija y menú móvil.
- Hero con fotografía, logotipo y personaje.
- Animaciones al hacer scroll mediante `IntersectionObserver`.
- Misión, visión, esencia y valores.
- Galería con visor de imágenes.
- Sedes de Andalucía y Tuluá.
- Botones de WhatsApp y Google Maps.
- Diseño responsive.
- Soporte para `prefers-reduced-motion`.
- Metadatos básicos para SEO y redes sociales.
