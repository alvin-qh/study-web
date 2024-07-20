<!--Vue 事件处理

Vue 通过模板元素上的 `v-on` 指令进行元素的事件处理, 例如: `v-on:click` 表示处理鼠标点击事件;
`v-on` 可简写为 `@`, 例如 `v-on:click` 等价于 `@click`

事件处理的方法可以分为:
1. 内联事件处理: 即在事件指令后直接内联一段脚本处理事件, 例如:

   ```html
   <button @click="window.alter('Hello')">Click</button>
   ```

2. 方法事件处理: 即在事件指令后设置一个处理函数来处理事件;

  ```html
  <button @click="handleClick">Click</button>
  ```

  ```typescript
  function handleClick(e: Event) {
    // ...
  }
  ```

  事件触发后会调用 `handleClick` 函数, 并自动传递 `Event` 类型参数

如果要在内联事件处理中使用 `Event` 类型参数, 则可以通过 `$event` 变量, 例如:

```html
<button @click="handleClick($event)">Click</button>
```

```typescript
function handleClick(e: Event) {
// ...
}
```

注意, 上述代码中由于在事件处理中明确调用 `handleClick` 函数并传参, 所以使用的是内联事件处理而非函数事件处理

事件处理修饰符, 可以在事件指令后添加事件处理修饰符, 包括:
 - `.stop` 禁止事件传递 (冒泡), 例如 `@click.stop="..."`;
 - `.prevent` 禁止触发元素本身的事件处理, 例如 `@click.prevent="..."`;
 - `.self` 仅处理当前元素直接触发的事件, 其它元素传递到的事件不做处理, 例如 `@click.self="..."`;
 - `.capture` 启用事件的"捕获"模式. 例如: 指向内部元素的事件, 在被内部元素处理前, 先被外部处理, 例如 `@click.capture="..."`;
 - `.once` 元素的事件只能被触发一次, 例如 `@click.once="..."`;
 - `.passive` 表明当前事件处理一定不会阻止元素默认事件, 一般用于屏幕滚动, 即 `@scroll.passive="..."`, 不应和 `.prevent` 修饰符共用;

按键修饰符, 可以在键盘事件相关指令后添加按键修饰符, 包括:
- `.enter` 捕获回车按键事件, 例如: `@keydown.enter="..."`;
- `.tab` 捕获制表符按键事件, 例如: `@keydown.tab="..."`;
- `.delete` 捕获 Delete 和 Backspace 按键事件, 例如: `@keydown.delete="..."`;
- `.esc` 捕获 ESC 按键事件, 例如: `@keydown.esc="..."`;
- `.up`
- `.down`
- `.left`
- `.right`
-->
<template>
  <div class="event">
    <!--定义一个 DIV 元素, 捕获相关事件并进行处理

    DIV 元素如果要捕获键盘事件, 则需要指定 `tabindex="0"` 属性值, 否则 DIV 元素无法获取输入焦点;
    -->
    <div :class="{ 'view': true, 'with-border': focusAction['Focus'], 'with-background': enterKeyDown }" tabindex="0"
      @focus="handleFocus" @blur="handleBlur" @mouseenter="handleMouseEnter" @mouseout="handleMouseOut"
      @mousemove="handleMouseMove" @click.prevent="handleClick" @keydown="handleKeyDown" @keyup.prevent="handleKeyUp"
      @keypress.prevent="handleKeyPress" @keydown.ctrl.enter="handleEnterKeyDown" @keyup.enter="handleEnterKeyUp">
      <div>Ctrl + Enter</div>
    </div>
    <div class="action">
      <common-attributes title="Focus Event" :attrs="focusAction" />
      <common-attributes title="Mouse Event" :attrs="mouseAction" />
      <common-attributes title="Key Event" :attrs="keyboardAction" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import CommonAttributes from '@/component/common/CommonAttributes.vue';

const mouseAction = reactive<{
  Enter: boolean,
  ClientX: number,
  ClientY: number,
  Click: number,
}>({
  Enter: false,
  ClientX: 0,
  ClientY: 0,
  Click: 0
});

const focusAction = reactive<{
  Focus: boolean,
}>({
  Focus: false,
});

const keyboardAction = reactive<{
  KeyDown: string,
  KeyUp: string,
  KeyPress: string,
  Shift: boolean,
  Alt: boolean,
  Control: boolean,
}>({
  KeyDown: '',
  KeyUp: '',
  KeyPress: '',
  Shift: false,
  Alt: false,
  Control: false
});

function handleMouseEnter(): void {
  mouseAction['Enter'] = true;
}

function handleMouseOut(): void {
  mouseAction['Enter'] = false;
}

function handleMouseMove(e: Event): void {
  const me = e as MouseEvent;
  mouseAction['ClientX'] = me.clientX;
  mouseAction['ClientY'] = me.clientY;
}

function handleClick() {
  mouseAction['Click']++;
}

function handleFocus() {
  focusAction['Focus'] = true;
}

function handleBlur() {
  focusAction['Focus'] = false;
}

function keyEvent(name: 'KeyDown' | 'KeyUp' | 'KeyPress', e: Event): void {
  const ke = e as KeyboardEvent;
  switch (ke.key) {
    case 'Shift':
    case 'Alt':
    case 'Control':
      break;
    default:
      keyboardAction[name] = ke.key;
  }
  keyboardAction['Shift'] = ke.shiftKey;
  keyboardAction['Alt'] = ke.altKey;
  keyboardAction['Control'] = ke.ctrlKey;
}

function handleKeyDown(e: Event): void {
  keyEvent('KeyDown', e);
}

function handleKeyUp(e: Event) {
  keyEvent('KeyUp', e);
}

function handleKeyPress(e: Event) {
  keyEvent('KeyPress', e);
}

const enterKeyDown = ref<boolean>(false);

function handleEnterKeyDown() {
  enterKeyDown.value = true;
}

function handleEnterKeyUp() {
  enterKeyDown.value = false;
}
</script>

<style scoped lang="scss">
.event {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 20px 0;

  .view {
    height: 40vh;
    background-color: #202020bd;
    box-sizing: border-box;
    // 取消输入焦点外边框
    outline: none;

    &.with-border {
      border: 1.5px solid #b5b5b59e;
    }

    &.with-background {
      background-color: #74747442;
    }

    &>div {
      background-color: #74747442;
      width: fit-content;
      padding: 5px 8px;
    }
  }

  .action {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
  }
}
</style>
