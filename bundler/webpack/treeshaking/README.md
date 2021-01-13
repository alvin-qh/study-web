# Treeshaking

Treeshaking is an algorithm can remove some unused code from imported modules.

Treeshaking based on AST

Have a look at Module Resolution for more explanation of how the resolver works.

> See also: https://webpack.js.org/configuration/resolve

## 1. Alias

Create aliases to import or require certain modules more easily. For example, to alias a bunch of commonly used `src/` folders:

```javascript
{
  // ...,
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/script/lib/common.js')
    },
    // ...
  }
}
```

Now, instead of using relative paths when importing like so:

```javascript
import { textBox } from './lib/common';
```

you can use the alias:

```javascript
import { textBox } from 'common';
```

A trailing `$` can also be added to the given object's keys to signify an exact match:

```javascript
{
  // ...,
  resolve: {
    alias: {
      common$: path.resolve(__dirname, 'src/script/lib/common.js')
    },
    // ...
  }
}
```

which would yield these results:

```javascript
// exact match, so 'src/script/lib/common.js' is resolved and imported
import { textBox } from 'common';

// not an exact match, normal resolution takes place
import { textBox } from 'common/component.js';
```

The value also can be an array. both more than one modules use same alias

```javascript
{
  //...
  resolve: {
    alias: {
      common: [
        path.resolve(__dirname, 'src/script/lib/common.js'), 
        path.resolve(__dirname, 'src/script/lib/component.js')
      ]
    },
    // ...
  }
}
```

Setting `resolve.alias` to false will tell webpack to ignore a module.

```javascript
{
  // ...,
  resolve: {
    alias: {
      ['@fortawesome/fontawesome-free']: false
    },
    // ...
  }
}
```

## 2. Extensions

### 2.1. `enforceExtension`

If `true`, it will not allow extension-less files. So by default `require('./foo')` works if `./foo` has a `.js` extension, but with this enabled only `require('./foo.js')` will work

```javascript
{
  // ...,
  resolve: {
    enforceExtension: false,
    // ...
  }
}
```

### 2.2. `extensions`

Attempt to resolve these extensions in order

```javascript
{
  // ...,
  resolve: {
    extensions: ['.js', '.css'],
    // ...
  }
}
```

which is what enables users to leave off the extension when importing:

- Import `.css` file without extension
  
  In `.js` file

  ```javascript
  import '../../style/index';
  ```

  In `.css` file

  ```css
  @import "~@fortawesome/fontawesome-free/css/all";
  ```

- Import `.js` file without extension

  In `.js` file

  ```javascript
  import { textBox } from './lib/common';
  ```
