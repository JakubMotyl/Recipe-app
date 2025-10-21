# PizzaPunk — Recipe App

A small React + Vite demo showcasing a recipe / menu layout with TailwindCSS and TheMealDB integration.

## Features
- Clean, responsive UI built with React components: [`App`](src/App.jsx), [`Home`](src/pages/Home.jsx), [`Navbar`](src/components/Navbar.jsx), [`Footer`](src/components/Footer.jsx).  
- Menu browsing powered by TheMealDB via API helpers: [`fetchCategories`](src/data/api.js), [`fetchRandomMeal`](src/data/api.js), [`fetchMealsByCategory`](src/data/api.js).  
- TailwindCSS setup and custom utilities in [`src/index.css`](src/index.css).  
- Vite development server and build setup: [`vite.config.js`](vite.config.js).  
- Entry point: [`src/main.jsx`](src/main.jsx). Example UI components: [`Hero`](src/components/Home/Hero.jsx), [`Menu`](src/components/Home/Menu/Menu.jsx), [`MenuTop`](src/components/Home/Menu/MenuTop.jsx), [`MenuContent`](src/components/Home/Menu/MenuContent.jsx), [`About`](src/components/Home/About.jsx), [`Opinion`](src/components/Home/Opinion.jsx), [`Form`](src/components/Home/Form.jsx).

## Quick start

1. Install dependencies:
   ```
   npm install
   ```

2. Run development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

4. Lint the code:
   ```
   npm run lint
   ```

Scripts are defined in [`package.json`](package.json).

## Project structure (important files)
- [index.html](index.html) — HTML shell and font / icon includes  
- [`src/main.jsx`](src/main.jsx) — React entry  
- [`src/App.jsx`](src/App.jsx) — App layout (Navbar + Home + Footer)  
- [`src/pages/Home.jsx`](src/pages/Home.jsx) — Home page composition  
- [`src/components/`](src/components/) — All UI components (Navbar, Footer, Home subcomponents)  
- [`src/data/api.js`](src/data/api.js) — API helpers to fetch categories and meals  
- [`src/index.css`](src/index.css) — Tailwind + custom styles  
- [`vite.config.js`](vite.config.js) — Vite + plugins config  
- [`eslint.config.js`](eslint.config.js) — Linting config

## Notes
- The app uses TheMealDB (public API) for sample meal data via the helpers in [`src/data/api.js`](src/data/api.js).  
- Font Awesome icons are loaded in [index.html](index.html).  
- Tailwind is integrated through the Vite plugin (`@tailwindcss/vite`) configured in [`vite.config.js`](vite.config.js).

## Contributing
- Open a PR with focused changes. Keep components small and reusable. Update styles in [`src/index.css`](src/index.css) when adding global utilities.
