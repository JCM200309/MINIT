# Contexto del Proyecto para IA / Project Context for LLMs

Este documento está diseñado con el propósito de facilitar a modelos de lenguaje (LLMs) el escaneo y entendimiento rápido de la arquitectura, tecnologías y propósitos del código fuente de `MINIT-V2`.

## Descripción del Proyecto
Este repositorio alberga la aplicación frontend y la página de presentación de **MINIT Ignífugos**, empresa dedicada al desarrollo y venta de productos retardantes de fuego. El objetivo del sitio es mostrar el catálogo de productos de forma animada/moderna, y permitir a los usuarios solicitar cotizaciones y ver recursos descargables (certificaciones y hojas de seguridad).

## Stack Tecnológico / Tech Stack
- **Framework Core**: React 18 / Vite.
- **Lenguaje**: TypeScript (`.ts`, `.tsx`).
- **Estilos**: Tailwind CSS v4.
- **Animaciones y 3D**: Framer Motion, GSAP, Anime.js, React Three Fiber (`@react-three/fiber`, `@react-three/drei`), Canvas Confetti.
- **Routing**: React Router v7.
- **Componentes Base**: Radix UI (primitivas de accesibilidad) y Lucide React (íconos).
- **Backend / API (Serverless)**: Funciones Serverless de Vercel (carpeta `/api`), donde se utiliza Node.js, `resend` (y `nodemailer`) para el envío de correos, integrando además Google reCAPTCHA para la prevención de spam.

## Estructura de Directorios Principal (Key Structure)
- `/api/`: Contiene el código Backend de las serverless functions alojadas en Vercel. Por ejemplo, el endpoint temporal `/api/send-email.ts` para enviar cotizaciones a los vendedores.
- `/src/app/components/`: Componentes UI reutilizables (botones, modales, alertas, etc.).
- `/src/app/context/`: Contextos globales (tema, estado de carrito/cotización si aplica, etc.).
- `/src/app/data/`: Datos estáticos / de base.
- `/src/app/i18n/`: Archivos de internacionalización (ej. `es.ts`, `en.ts`). La información vital de copy del sitio habita aquí.
- `/src/app/pages/`: Vistas completas utilizadas por el ruteador (Inicio, Productos, Nosotros).
- `/src/routes.tsx`: Definición de las rutas del frontend.
- `/src/styles/`: Configuraciones o archivos base de CSS (ej. `index.css`).
- `package.json`: Archivo con todos los scripts y dependencias (Vite, Radix, Framer Motion, Tailwind).

## Directrices de Desarrollo (AI Instructions)
1. **Componentes Modernos**: Cuando se genere código, utilizar Tailwind v4 y priorizar Framer Motion o GSAP para animaciones en lugar de transiciones pesadas de CSS si se requiere dinamismo.
2. **Textos e Internacionalización**: Cualquier nuevo texto del sitio debe añadirse a los archivos dentro de `src/app/i18n/` para asegurar que el sitio se mantenga traducible.
3. **Backend / Endpoints**: Recordar que cualquier mutación desde el cliente (formularios de contacto) debe enviar peticiones a los endpoints ubicados en `/api`.

*Considera este archivo como el punto de inicio para entender la identidad del repositorio y responder acorde a sus tecnologías.*
