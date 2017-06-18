
browserify
===

## 安装

### 安装命令行工具(cli)

```sh
$ npm install -g browserify
```

## 编译 JavaScript

### 通过命令行工具

```sh
$ browserify main.js > bundle.js
```

> browserify 帮助：`browserify --help`或`browserify --help advanced`

### 通过 gulp

安装相关插件

```sh
$ npm install --save-dev browserify		# browserify工具
$ npm install --save-dev stripify		# JS代码优化工具
$ npm install --save-dev bundle-collapser # reqiure标识符优化 (不要使用真实文件名)
$ npm install --save-dev through2		# gulp流化处理器
$ npm install --save-dev browserify-shim # 处理shim
```

gulp 任务

```javascript
'use strict';

let gulp = require('gulp'),
    browserify = require('browserify'),
    through2 = require('through2'),
    ifElse = require('gulp-if-else'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    collapse = require('bundle-collapser/plugin'),
    config = require('./config');
    
gulp.task('js_app_bundle', () => {
    return gulp.src(['asset/js/**/*.js', ...])
        .pipe(through2.obj((file, enc, next) => {
            let b = browserify(file.path);
            if (config.isPROD) {
                b = b.transform('stripify');
            }
            b.plugin(collapse).bundle((err, res) => {
                file.contents = res;
                next(null, file);
            });
        }))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js'));
});
```

处理不支持 CommonJS 的组件 (例如某些 jQuery 插件)

编辑`package.json`文件，添加如下内容：

```json
...,
"browser": {
	"jquery": "./node_modules/jquery/dist/jquery.js"
},
"browserify-shim": {
	"jquery": "jQuery"
},
"browserify": {
	"transform": [
  		"browserify-shim"
	]
},
...
```

在 Javascript 编译时暴露全局的 jQuery 对象 (global.jQuery)，令一些需要全局 jQuery 对象的插件可以工作。

## 使用

通过上述处理，就可以在 JS 文件中使用`npm`安装或者自定义的`CommonJS`风格的 Javascript 模块了。例如：

```javascript
'use strict';

let $ = require('jquery');
require('bootstrap');
require('bootstrap-notify');
require('parsley');

...
```

执行`gulp`，查看编译后的的 JS 文件，所有被`require`的 JS 模块，其源码都会插入到被编译 JS 文件中，合成一个 JS 文件。

## 优化方式

browserify 会为每一个`require`引入相关的脚本，但这样做会让编译的 js 文件变得较大。

更好的做法是：将页面公共的 Javascript 打包到一个文件中 (例如`jquery.js`, `underscore.js`, `bootstrap.js`等)，在页面中通过`script`标签引入，而其它的 js 脚本在`require`它们的时候，并不需要将脚本引入。

以`jquery`, `bootstrap`和`parselyjs`为例：

### 打包常用 Javascript 脚本

```javascript
gulp.task('js_vendor_bundle', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/parsleyjs/dist/parsley.js',
        'node_modules/parsleyjs/dist/i18n/zh_cn.js',
        'node_modules/parsleyjs/dist/i18n/zh_cn.extra.js'
    ])
        .pipe(concat({path: 'vendor.js', cwd: ''}))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js/vendor'));
});
```

上述代码将指定 JS 文件打包为一个 JS 文件，并进行压缩。在页面中引入即可。

```html
<!DOCTYPE html>
<html lang="zh">
<head>
	...
</head>
<body>
<div>...</div>
<script src="asset/js/vendor/vendor.js"></script>
<script src="asset/js/index/index.js"></script>
</body>
</html>
```



### 编译 Javascript 脚本

```javascript
'use strict';

let gulp = require('gulp'),
    browserify = require('browserify'),
    through2 = require('through2'),
    ifElse = require('gulp-if-else'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    collapse = require('bundle-collapser/plugin'),
    config = require('./config');

gulp.task('js_app_bundle', () => {
    return gulp.src(['asset/js/**/*.js', ...])
        .pipe(through2.obj((file, enc, next) => {
            let b = browserify(file.path);
            b.ignore('jquery');		// 忽略指定模块

            if (config.isPROD) {
                b = b.transform('stripify');
            }
            b.plugin(collapse).bundle((err, res) => {
                file.contents = res;
                next(null, file);
            });
        }))
        .pipe(ifElse(config.isPROD, uglify))
        .pipe(gulp.dest('.build/js'));
});
```

上述代码在编译 JS 时，忽略了`jquery`模块，这样即便代码中使用了`require('jquery')`，也不会将 jquery.js 合并到目标文件中。

在`package.json`文件中，进行如下处理：

```json
...,
"browser": {
    "jquery": "./node_modules/jquery/dist/jquery.js",
    "bootstrap-notify": "./node_modules/bootstrap-notify/bootstrap-notify.js"
},
"browserify": {
    "transform": [
        "browserify-shim"
    ]
},
"browserify-shim": {
    "jquery": {
        "exports": "global:$"
    },
    "bootstrap-notify": {
        "depends": "jquery"
    }
},
...
```

代码表示，将`jquery`模块作为全局的`$`符号 (`window.$`) 导出 (`"exports":"global:$"`)，这样所有使用`require('jquery')`的位置都会被替换为`window.$`。

如果要使用依赖于模块的其它代码，则需要为其指定`depends`，表示其依赖的组件 (`"depends":"jquery"`)。

此时，就无需为每个 JS 文件中都引入`jquery`模块的代码了，只要`window.$`存在即可。

由于`bootstrap`和`parsleyjs`均依赖于`jquery`模块，所以只要将它们打包在一起，就可以通过`window.$`来使用它们，无需在额外的`require`这些模块。

例如 index.js 文件可以如下：

```javascript
'use strict';

let $ = require('jquery');		// 被处理为 window.$
require('bootstrap-notify');	// 内部使用 window.$
// Parsley 对象和 bootstrap 直接可以用

...
```

