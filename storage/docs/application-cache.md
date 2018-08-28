## 简介

离线访问对基于网络的应用而言越来越重要。虽然所有浏览器都有缓存机制，但它们并不可靠，也不一定总能起到预期的作用。HTML5 使用 [ApplicationCache](http://www.whatwg.org/specs/web-apps/current-work/#applicationcache) 接口解决了由离线带来的部分难题。

使用缓存接口可为您的应用带来以下三个优势：

1. 离线浏览 - 用户可在离线时浏览您的完整网站
2. 速度 - 缓存资源为本地资源，因此加载速度较快。
3. 服务器负载更少 - 浏览器只会从发生了更改的服务器下载资源。

应用缓存（又称 AppCache）可让开发人员指定浏览器应缓存哪些文件以供离线用户访问。即使用户在离线状态下按了刷新按钮，您的应用也会正常加载和运行。



## 缓存清单文件

缓存清单文件是个简单的文本文件，其中列出了浏览器应缓存以供离线访问的资源。

### 引用清单文件

要启用某个应用的应用缓存，请在文档的 `html` 标记中添加 `manifest`属性：

```html
<html manifest="example.appcache">
	...
</html>
```

您应在要缓存的网络应用的每个页面上都添加 `manifest` 属性。如果网页不包含 `manifest` 属性，浏览器就不会缓存该网页（除非清单文件中明确列出了该属性）。这就意味着用户浏览的每个包含 `manifest` 的网页都会隐式添加到应用缓存。因此，您无需在清单中列出每个网页。

`manifest` 属性可指向绝对网址或相对路径，但绝对网址必须与相应的网络应用同源。清单文件可使用任何文件扩展名，但必须以正确的 MIME 类型提供（参见下文）。

```html
<html manifest="http://www.example.com/example.mf">
  ...
</html>
```

清单文件必须以 `text/cache-manifest` MIME 类型提供。您可能需要向网络服务器或 `.htaccess` 配置添加自定义文件类型。

例如，要在 Apache 中提供此 `MIME` 类型，请在您的配置文件中添加下面一行内容：

```
AddType text/cache-manifest .appcache
```

要在 Google App Engine 的 app.yaml 文件中提供此 MIME 类型，则添加以下内容：

```yaml
- url: /mystaticdir/(.*\.appcache)
  static_files: mystaticdir/\1
  mime_type: text/cache-manifest
  upload: mystaticdir/(.*\.appcache)
```

### 清单文件结构

简单的清单格式如下：

```
CACHE MANIFEST
index.html
stylesheet.css
images/logo.png
scripts/main.ts
```

该示例将在指定此清单文件的网页上缓存四个文件。

您需要注意以下几点：

- `CACHE MANIFEST` 字符串应在第一行，且必不可少。
- 网站的缓存数据量不得超过 5 MB。不过，如果您要编写的是针对 [Chrome 网上应用店](http://code.google.com/chrome/apps/docs/developers_guide.html) 的应用，可使用 `unlimitedStorage` 取消该限制。
- 如果清单文件或其中指定的资源无法下载，就无法进行整个缓存更新进程。在这种情况下，浏览器将继续使用原应用缓存。

我们再来看看更复杂的示例：

```
CACHE MANIFEST
# 2010-06-18:v2

# Explicitly cached 'master entries'.
CACHE:
/favicon.ico
index.html
stylesheet.css
images/logo.png
scripts/main.ts

# Resources that require the user to be online.
NETWORK:
login.php
/myapi
http://api.twitter.com

# static.html will be served if main.py is inaccessible
# offline.jpg will be served in place of all images in images/large/
# offline.html will be served in place of all other .html files
FALLBACK:
/main.py /static.html
images/large/ images/offline.jpg
*.html /offline.html
```

以`“#”`开头的行是注释行，但也可用于其他用途。应用缓存只在其清单文件发生更改时才会更新。例如，如果您修改了图片资源或更改了 JavaScript 函数，这些更改不会重新缓存。**您必须修改清单文件本身才能让浏览器刷新缓存文件**。使用生成的版本号、文件哈希值或时间戳创建注释行，可确保用户获得您的软件的最新版。您还可以在出现新版本后，以编程方式更新缓存，如[更新缓存](https://www.html5rocks.com/zh/tutorials/appcache/beginner/#toc-updating-cache)部分中所述。

清单可包括以下三个不同部分：`CACHE`、`NETWORK` 和 `FALLBACK`。

- `CACHE`：

  这是条目的默认部分。系统会在首次下载此标头下列出的文件（或紧跟在 `CACHE MANIFEST` 后的文件）后显式缓存这些文件。

- `NETWORK`：

  此部分下列出的文件是需要连接到服务器的白名单资源。无论用户是否处于离线状态，对这些资源的所有请求都会绕过缓存。可使用通配符。

- `FALLBACK`：

  此部分是可选的，用于指定无法访问资源时的后备网页。其中第一个 URI 代表资源，第二个代表后备网页。两个 URI 必须相关，并且必须与清单文件同源。可使用通配符。

**请注意**：这些部分可按任意顺序排列，且每个部分均可在同一清单中重复出现。

以下清单定义了用户尝试离线访问网站的根时显示的“综合性”网页 (offline.html)，也表明了其他所有资源（例如远程网站上的资源）均需要互联网连接。

```
CACHE MANIFEST
# 2010-06-18:v3

# Explicitly cached entries
index.html
css/style.css

# offline.html will be displayed if the user is offline
FALLBACK:
/offline.html

# All other resources (e.g. sites) require the user to be online. 
NETWORK:
*

# Additional resources to cache
CACHE:
images/logo1.png
images/logo2.png
images/logo3.png
```

**请注意**：系统会自动缓存引用清单文件的 HTML 文件。因此您无需将其添加到清单中，但我们建议您这样做。

**请注意**：HTTP 缓存标头以及对通过 SSL 提供的网页设置的缓存限制将被替换为缓存清单。因此，通过 https 提供的网页可实现离线运行。



## 更新缓存

应用在离线后将保持缓存状态，除非发生以下某种情况：

1. 用户清除了浏览器对您网站的数据存储。
2. 清单文件经过修改。请注意：更新清单中列出的某个文件并不意味着浏览器会重新缓存该资源。清单文件本身必须进行更改。
3. 应用缓存通过编程方式进行更新。

### 缓存状态

`window.applicationCache` 对象是对浏览器的应用缓存的编程访问方式。其 `status` 属性可用于查看缓存的当前状态：

```javascript
var appCache = window.applicationCache;

switch (appCache.status) {
case appCache.UNCACHED: // UNCACHED == 0
    return 'UNCACHED';
    break;
case appCache.IDLE: // IDLE == 1
    return 'IDLE';
    break;
case appCache.CHECKING: // CHECKING == 2
    return 'CHECKING';
    break;
case appCache.DOWNLOADING: // DOWNLOADING == 3
    return 'DOWNLOADING';
    break;
case appCache.UPDATEREADY:  // UPDATEREADY == 4
    return 'UPDATEREADY';
    break;
case appCache.OBSOLETE: // OBSOLETE == 5
    return 'OBSOLETE';
    break;
default:
    return 'UKNOWN CACHE STATUS';
    break;
};
```

要以编程方式更新缓存，请先调用 `applicationCache.update()`。此操作将尝试更新用户的缓存（前提是已更改清单文件）。最后，当 `applicationCache.status` 处于 `UPDATEREADY` 状态时，调用 `applicationCache.swapCache()` 即可将原缓存换成新缓存。

```javascript
var appCache = window.applicationCache;

appCache.update(); // Attempt to update the user's cache.

...

if (appCache.status == window.applicationCache.UPDATEREADY) {
	appCache.swapCache();  // The fetch was successful, swap in the new cache.
}
```

**请注意**：以这种方式使用 `update()` 和 `swapCache()` 不会向用户提供更新的资源。此流程只是让浏览器检查是否有新的清单、下载指定的更新内容以及重新填充应用缓存。因此，还需要对网页进行两次重新加载才能向用户提供新的内容，其中第一次是获得新的应用缓存，第二次是刷新网页内容。

好消息是，您可以避免重新加载两次的麻烦。要使用户更新到最新版网站，可设置监听器，以监听网页加载时的 `updateready` 事件：

```javascript
// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            // Swap it in and reload the page to get the new hotness.
            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);
}, false);
```

### AppCache 事件

正如您所预期的那样，附加事件会用于监听缓存的状态。浏览器会对下载进度、应用缓存更新和错误状态等情况触发相应事件。以下代码段为每种缓存事件类型设置了事件监听器：

```javascript
function handleCacheEvent(e) {
  	//...
}

function handleCacheError(e) {
  	alert('Error: Cache failed to update!');
};

// Fired after the first cache of the manifest.
appCache.addEventListener('cached', handleCacheEvent, false);

// Checking for an update. Always the first event fired in the sequence.
appCache.addEventListener('checking', handleCacheEvent, false);

// An update was found. The browser is fetching resources.
appCache.addEventListener('downloading', handleCacheEvent, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress.
appCache.addEventListener('error', handleCacheError, false);

// Fired after the first download of the manifest.
appCache.addEventListener('noupdate', handleCacheEvent, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
appCache.addEventListener('obsolete', handleCacheEvent, false);

// Fired for each resource listed in the manifest as it is being fetched.
appCache.addEventListener('progress', handleCacheEvent, false);

// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', handleCacheEvent, false);
```

如果清单文件或其中指定的资源无法下载，整个更新都将失败。在这种情况下，浏览器将继续使用原应用缓存。