# 07

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

```
07
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ favicon.ico
├─ src
│  ├─ App.vue
│  ├─ actions
│  │  └─ counter.js
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ logo.svg
│  │  └─ main.css
│  ├─ components
│  │  ├─ Counter
│  │  │  └─ index.vue
│  │  ├─ CounterBtn
│  │  │  └─ index.vue
│  │  └─ CounterResult
│  │     └─ index.vue
│  ├─ dispatchs
│  │  └─ counter.js
│  ├─ main.js
│  ├─ pages
│  │  └─ index.vue
│  ├─ reducers
│  │  └─ counter.js
│  └─ router
│     └─ index.js
├─ vite.config.js
└─ yarn.lock

```