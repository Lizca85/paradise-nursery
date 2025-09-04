# Paradise Nursery (React + Redux)

Proyecto final: carrito de compras para una tienda de plantas. Compatible con el entorno del laboratorio (puerto `4173`) y listo para GitHub Pages.

## Scripts
- `npm install`
- `npm run dev` abre en desarrollo (Vite)
- `npm run preview` levanta la build en el puerto **4173**
- `npm run build` genera la carpeta `dist`

## Despliegue en GitHub Pages (opción 1: manual)
1. Edita `vite.config.js` y ajusta `base: '/<nombre-de-tu-repo>/'` (o usa la variable `GITHUB_PAGES`).
2. `npm run build`
3. Sube el contenido de `dist/` a la rama `gh-pages` o a tu hosting.

## Despliegue con acciones (opción 2: GitHub Actions)
Busca una plantilla de workflow de Vite para GH Pages o usa tus preferencias.

---

### Estructura
- `src/redux/CartSlice.js`: `addItem`, `removeItem`, `updateQuantity`.
- `src/components/ProductList.jsx`: lista de plantas, botón **Agregar** (se desactiva cuando ya está en el carrito).
- `src/components/CartItems.jsx`: incrementa/decrementa, elimina, calcula subtotales y total.
- `src/App.jsx`: navegación simple (Inicio, Plantas, Carrito) sin router, como pide la guía.
- `src/data/plants.js`: catálogo de ejemplo con 2 secciones: *Aromáticas* y *Medicinales*.

### Accesibilidad/UX
- Botones con `aria-label` y `aria-live` para actualizaciones.
- Badge del carrito en el navbar.
- Diseño responsive con CSS simple.

¡Éxitos! 🍃
