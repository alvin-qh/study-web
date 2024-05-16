# Environment

## 1. Use environment variables

### 1.1. Read environment variables

```javascript
module.exports = env => {
  return {
    // ...
  };
}
```

Export a function instead of an object, the argument 0 is a object contained env variables.

### 1.2. Passing environment variables

```bash
$ npx webpack --env DEBUG=true
# or 
$ npx webpack --env DEBUG
```

Follow the env variable after `--env`, like `name=value`. more env variables need more `--env` parameter.

`--env DEBUG=true` means `DEBUG` variable is `"true"`, the value is string.

`--env DEBUG` means `DEBUG` variable is `true`, the value is boolean.

```bash
npx webpack --env production  # set production variable is true
```

In `webpack.config.js`, read the environment variables

```javascript
module.exports = env => {
  return {
    // ...
    console.log(env.DEBUG);
  };
}
```

### 1.3. Global environment variables

Use `process.env` object to read global system environment variables.

```bash
$ DEBUG=true npx webpack

# or
$ env DEBUG=true npx webpack   # cross-platform

# or
export DEBUG=true
npx webpack
```

In `webpack.config.js`, read the global environment variables

```javascript
module.exports = env => {
  return {
    // ...
    console.log(process.env.DEBUG);
  };
}
```

## 2. Use Provide plugin

Automatically load modules instead of having to import or require them when use `identifier` in everywhere.

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      identifier: "module",
      // ...
    })
  ]
}
```

By default, module resolution path is current folder (`./**`) and `node_modules`. import `default` property by default.

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      identifier: ["module", "property"],
      // ...
    })
  ]
}
```

Auto import given property from module when use `identifier` in everywhere.

It is also possible to specify full path:

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      identifier2: path.resolve(__dirname, `path/to/javascript`),
      identifier1: [path.resolve(__dirname, `path/to/javascript`), "property"]
      // ...
    })
  ]
}
```

Examples:

- Use jQuery

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}
```

- Use Lodash `map` function

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      _map: ["lodash", "map"]
    })
  ]
}
```

- Use Vue

```javascript
{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      Vue: ["vue/dist/vue.esm.js", "default"]
    })
  ]
}
```

Import different file by condition

```javascript

function chooseScript(env) {
  const mark = env.DEBUG ? "-debug" : "";
  // when debug is false, file name is ${__dirname/path/to/script-debug.js}
  return path.resolve(__dirname, `path/to/script${mark}.js`);
}

{
  // ...,
  plugins: [
    new webpack.ProvidePlugin({
      component: [chooseScript(env), "property"]
    })
  ]
}
```

## 3. Use `cross-env`

`cross-env` can set global environment variables cross the platform (on different operate system)

Install the package

```bash
npm install --save-dev cross-env
```

Use `cross-env` in cli

```bash
npx cross-env DEBUG=true webpack --progress
```

Use `cross-env` in `package.json`

```json
{
  "scripts": {
    "build:debug": "cross-env DEBUG=true webpack --progress",
    ...
  },
  ...
}
```
