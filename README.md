# Hoplon — The Nordic Grill

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=black)

A restaurant homepage built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript course, focused on ES6 modules, Webpack, and generating the entire UI with JavaScript.

🔗 [Live Demo](https://lucasazevedothedev.github.io/restaurant-page/)

## Features

- **100% JS-rendered UI:** the HTML file contains only a `<header>` and an empty `<div id="content">` — every element on the page is created and appended via JavaScript.
- **Tab-based navigation:** each page (Home, Menu, About, Contact) lives in its own module; clicking a tab wipes `#content` and renders the new one.
- **ES6 modules:** four separate page modules exported and imported into `index.js`, keeping responsibilities cleanly separated.
- **Webpack bundle:** CSS and image assets imported directly into JavaScript and handled by Webpack loaders.
- **Active state on nav buttons:** the current tab is visually highlighted and reset when switching pages.

## Key Learnings

- **Webpack setup from scratch:** configuring `webpack.config.js`, installing loaders for CSS and images, running a dev server, and deploying the `dist` folder to GitHub Pages via `gh-pages` branch.
- **ES6 modules in practice:** understanding what `export` and `import` actually do at the file boundary — not just syntax, but how Webpack resolves the dependency graph between modules.
- **Full DOM generation via JS:** building an entire page structure with `createElement`, `classList`, `textContent`, and `appendChild` with no HTML scaffolding to fall back on.
- **Module boundaries:** splitting responsibilities across files forced clearer thinking about what each function owns and what belongs in `index.js`.

## How to Run Locally

```bash
git clone https://github.com/LucasAzevedoTheDev/restaurant-page.git
cd restaurant-page
npm install
npx webpack serve
```

Then open `http://localhost:8080` in your browser.

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)