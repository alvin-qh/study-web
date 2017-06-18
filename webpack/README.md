webpack
===

## 安装

### 安装命令行工具 (CLI)

```sh
$ npm install -g webpack
```

## 编译 Javascript

### 通过命令行

配置`webpack.config.js`

```javascript
'use strict';

let webpack = require('webpack'),
    fileSearch = require('./node_libs/file_search'),
    fileToMap = require('./node_libs/file_to_map'),
    config = require('./gulp_tasks/config');

// 设置plugins
let plugins = [
    new webpack.ProvidePlugin({	// 配置全局符号，'jquery'别名在'resolve'项配置
        jQuery: "jquery",
        $: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({	// 优化JS，抽取公共部分
        name: 'common',
        filename: 'common/common.js'
    })
];
if (config.isPROD) {	// 生产环境下加入gulify插件
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false,
        }
    }));
}

module.exports = {
    entry: fileToMap(fileSearch([	// 处理指定js文件，fileToMap和fileSearch模块见附录
        '!asset_src/js/common/**',
        '!asset_src/js/vendor/**',
        'asset_src/js/**/*.js'
    ])),
    externals: {
        jquery: "jQuery"	// 配置外部模块
    },
    output: {		// 输出规则
        publicPath: './asset_build/js',
        path: './asset_build/js',
        filename: '[name].js'
    },
    resolve: {
        alias: {	// 配置模块别名
            jquery: 'node_modules/jquery/dist/jquery.js'
        }
    },
    plugins: plugins
};
```

在`webpack.config.js`所在文件夹执行命令行

```sh
$ webpack
```

### 通过`gulp`

由于之前配置中已经忽略`jquery` 模块，且将`$`和`jQuery`设为全剧符号，则`jquery`及其相关模块需要单独加载.

```javascript
'use strict';

let gulp = require('gulp'),
    ifElse = require('gulp-if-else'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    config = require('./config');

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
        .pipe(gulp.dest('asset_build/js/vendor'));
});
```

> `jquery`, `bootstrap`以及`pasrley`模块均通过`npm`管理器安装

由于`webpack.config.js`配置文件已在前一步准备好，所以`gulp`处理很简单

```javascript
'use strict';

let gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('js_app_bundle', (done) => {
    webpack(require('../webpack.config')).run((err, stats) => {
        done(err);
    });
});
```

## 使用编译后的 Javascript

通过上述编译步骤，最终每个页面至少需要3个 Javascript 文件，分别是

- vendor.js 包括 jQuery, bootstrap 以及 parsleyjs
- common.js 由 webpack 自动抽取的公共内容
- app.js 页面自己的 Javascript 脚本

```html
<script src="asset/js/vendor/vendor.js"></script>
<script src="asset/js/common/common.js"></script>
<script src="asset/js/app/app.js"></script>
```



## 附录

### `file_search` 模块

`file_search` 模块利用`glob`对文件进行查找：

```javascript
'use strict';

let util = require('util'),
    glob = require('glob')

module.exports = (patterns) => {
    let except = [], include = [];

    if (!util.isArray(patterns)) {
        patterns = [patterns];
    }
    patterns.map((pattern) => {
        var negative = false;
        if (pattern.startsWith('!')) {
            pattern = pattern.substr(1);
            negative = true;
        }
        glob.sync(pattern).map(function (path) {
            if (negative) {		// 要排除的文件
                except.push(path);
                var index = include.indexOf(path);
                if (index >= 0) {
                    include.slice(index, 1);
                }
            } else {	// 要包含的文件
                if (except.indexOf(path) < 0) {
                    include.push(path);
                }
            }
        })
    });
    return include;
};
```

> `glob` 的`pattern`如果表示为相对路径，则查找的结果也为相对路径。

### `file_to_map`模块

file_to_map 模块将一组文件组装为`webpack`可以识别的 json `格式

```javascript
'use strict';

module.exports = (files) => {
    let map = {};

    files.map((file) => {
        let key = file;
        key = key.substring(0, key.lastIndexOf('.'));	// 去掉扩展名

        let index1 = key.lastIndexOf('/'),
            index2 = key.lastIndexOf('/', index1 - 1);	// 查找倒数第2个/的位置
        if (index2 >= 0) {
            key = key.substr(index2 + 1);
        } else {
            key = key.substr(index1 + 1);
        }
        if (!file.startsWith('/') && !file.startsWith('./')) {
            file = './' + file;		// 增加'./'前缀
        }
        map[key] = file;
    });
    return map;
};
```



