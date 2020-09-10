# Create VUE application

## 1. Install vue-cli

```bash
$ npm install -g @vue/cli
```

## 2. Create application by vue-cli

```bash
$ vue create <application name>
```

### 2.1. Use manually select features

```plain
Vue CLI v4.3.1
? Please pick a preset:
  default (babel, eslint)
❯ Manually select features
```

Choose **Manually select features**.

### 2.2. Check the features

```plain
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel
 ◉ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing
```

### 2.3. Pick a CSS pre-processor

```plain
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
❯ Less
  Stylus
```

Choose Less or sass processor

### 2.4. Finish configuration

```plain
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Mocha
? Pick an E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
  In package.json
```

## 3. Add i18n support

```bash
$ vue add i18n
```

## 4. `vue.config.js`

See [Configuration Reference](https://cli.vuejs.org/config/).
