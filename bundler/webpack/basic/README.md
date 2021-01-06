# Simple bundler

> See also: https://webpack.js.org/guides/getting-started

## 1. Setup

### 1.1. Initalize project

Run shell command

```bash
$ npm init -y
```

### 1.2. Install webpack package

Run shell command

```bash
$ npm install webpack webpack-cli --save-dev
```

## 2. Create project

### 2.1. Create **javascript** file

See [index.js](./src/index.js)

### 2.2. Install runtime dependencies

Run shell command

```bash
$ npm install --save lodash
```

### 2.3. Create **webpack config** file

See [webpack.config.js](./webpack.config.js)

### 2.4. Create **html** file

See [index.html](./dist/index.html)

## 3. Build

### 3.1. Test build

```bash
$ npx webpack
```

- Check if `./dist/main.js` was created
- Open `./dist/index.html` in browser

### 3.2. Add run script

In `package.json`

```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
}
```

Then build project

Run shell command

```bash
$ npm run build
```
