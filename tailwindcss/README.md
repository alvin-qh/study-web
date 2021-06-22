# Tailwind

- [Tailwind](#tailwind)
  - [0. Prepare](#0-prepare)
  - [1. Use Tailwind](#1-use-tailwind)
    - [1.1. Install Tailwind](#11-install-tailwind)
    - [1.2. Create `postcss.config.js` file](#12-create-postcssconfigjs-file)
    - [1.3. Create `tailwind.config.js` file](#13-create-tailwindconfigjs-file)
  - [2. Use Tailwind](#2-use-tailwind)
    - [2.1. Include Tailwind into css](#21-include-tailwind-into-css)
    - [2.2. Compile css file](#22-compile-css-file)
    - [2.3. Use Purge](#23-use-purge)
  - [2.4. Use Tailwind without postcss](#24-use-tailwind-without-postcss)

## 0. Prepare

1. Create webpack projects

   - Install `webpack-cli`: 

      ```bash
      $ npm install -g webpack-cli
      ```

   - Create webpack project

      ```bash
      $ npx webpack-cli init
      ```
   
   - Choose a project settings include "Postcss" support


2. Setup a "multi entry" app, see [webpack.config.js](./webpack.config.js)

## 1. Use Tailwind

### 1.1. Install Tailwind

```bash
$ yarn add postcss tailwindcss autoprefixer
```

> Use `autoprefixer` to add browser prefix to css automate.

### 1.2. Create `postcss.config.js` file

Create `postcss.config.js` file in project root and add `tailwindcss` and `autoprefixer` config into it.

See [tailwind.config.js](./tailwind.config.js) file

### 1.3. Create `tailwind.config.js` file

Create `tailwind.config.js` file in project root to set how talwindcss work.

See [tailwind.config.js](./tailwind.config.js) file

## 2. Use Tailwind

### 2.1. Include Tailwind into css

There are three ways to import tailwind css into project

1. Use Tailwind directive

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    The Tailwind would replace those directive to Tailwind css

2. Use css `@import`

    ```css
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";
    ```

3. Import into javascript

    ```javascript
    import "tailwindcss/tailwind.css"
    ```

### 2.2. Compile css file

In webpack, the `postcss-loader` should compile the css when css import into entry js.

Or use `postcss-cli` to compile the css file

```bash
$ npx postcss style.css -o style.compiled.css
```

### 2.3. Use Purge

In `tailwind.config.js`, make sure the `purge` options scan all files which use css to delete unused css classes

See [tailwind.config.js](./tailwind.config.js) file, `purge` options

## 2.4. Use Tailwind without postcss

Use `taiwindcss-cli` to compile css

```bash
$ npx tailwindcss-cli build -o tailwind.css
```

Include the generated `.css` file into HTML

```html
<link href="/tailwind.css" rel="stylesheet">
```
