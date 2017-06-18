# HTML5 本地存储

## LocalStorage 与 SessionStorage

### 简介

这两种存储方式具备完全相同的 API 接口，具备 Key/Value 的存储能力，区别在于：

- LocaStroage 具备永久保存能力；
- SessionStroage 具备临时保存能力，当结束一次回话（关闭浏览器）后，存储内容将被删除。

### API

获取并判断存储对象是否可用

```javascript
var localStorage = window.localStorage;
if (!localStorage) {
  	// 无法使用本地存储
}

var sessionStorage = window.sessionStorage;
if (!sessionStorage) {
  	// 无法使用Session存储
}
```

存储对象个数

```javascript
var storage = window.localStorage;
var size = storage.length;
```

存储、获取和删除对象

```javascript
var storage = window.localStorage;
storage.setItem('key', 'value');	// 存储对象, 也可以为 storage['key'] = 'value';
var value = storage.getItem('key');	// 获取对象, 也可以为 var value = storage['key'];
storage.removeItem('key');	// 删除对象
storage.clear();	// 删除所有对象
```

### Event

当存储发生变化时，浏览器会发出`onstorage`事件，该事件由`window`对象响应

```javascript
window.addEventListener("storage", function (e) {
	console.log(e.key);		// 发生变化的存储key
  	console.log(e.oldValue);	// 发生变化的存储值（原值）
	console.log(e.newValue);	// 发生变化的存储值（新值）
  	console.log(e.url);		// 发生存储变化的页面地址
});
```

奇特的是，在`Chrome`, `Firfox`等浏览器中，当前页面总是无法捕获该事件，即**在当前页面发生存储改变行为，必须由另一个页面的`window`对象来捕获该事件**



