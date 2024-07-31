<!--组件的属性继承

VUE 组件默认会开启所谓"属性继承", 即父组件设置到子组件的属性 (包括事件), 默认会加到子组件最外层元素上, 例如:

子组件 `DemoButton` 定义如下:

```html
<template>
  <button>Click me</button>
</template>
```

当父组件使用子组件时, 设置了如下属性:

```html
<template>
  <DemoButton :id="id" @click="handleClick" />
</template>
```

则渲染出的子组件如下:

```html
<button id="..." @click="handleClick">Click me</button>
```

其中的 `id` 属性以及 `@click` 事件定义称为组件的属性继承

VUE 支持属性继承是为了让 VUE 组件更符合 HTML 元素的特性, 可以通过 `defineOptions` 宏启用或禁用组件的属性继承

另外, 对于一个组件具备多个根 HTML 元素的情况, 属性继承也不起作用
-->
<template>
  <div ref="elem" class="component-attr">
    <!--展示组件继承的属性值-->
    <CommonAttributes title="Inherit Attrs" :attrs="inheritAttrs" />

    <!--展示实际应用在组件根 HTML 元素之上的属性值-->
    <CommonAttributes title="InUse Attrs" :attrs="usedAttrs" />
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';

import CommonAttributes from '@/component/common/CommonAttributes.vue';

import { useElementAttrs } from './composable';

// 定义组件选项, 启用属性继承 (默认)
defineOptions({
  inheritAttrs: true
});

// 通过 `useAttrs()` 函数, 可以获取到当前组件所继承的全部属性值
const inheritAttrs = useAttrs() as Record<string, string | number>;

// 获取组件的 HTML 根元素
const elem = ref<HTMLDivElement>();

// 获取组件根元素上实际应用的属性值
const usedAttrs = useElementAttrs(elem, ['class', 'id']);
</script>

<style scoped lang="scss">
.component-attr {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}
</style>
