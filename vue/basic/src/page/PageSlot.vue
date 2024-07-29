<!--插槽

插槽也是一种向组件传参的语法形式, 传递的内容一般为: 子组件, HTML 节点;
所以使用插槽可以做到由父元素为子组件提供内容
-->
<template>
  <div class="slot">
    <div>
      <!--使用组件, 并为子组件设置插槽内容-->
      <SimpleSlot>
        Hello Slot
      </SimpleSlot>
    </div>

    <hr>

    <div>
      <!--插槽中可以包含任意 HTML 元素以及 Vue 组件-->
      <SimpleSlot>
        <p>Hello Slot1</p>
        <SimpleSlot>Hello Slot2</SimpleSlot>
      </SimpleSlot>
    </div>

    <hr>

    <div>
      <!--插槽可以在子组件中使用父组件的作用域-->
      <SimpleSlot>
        <div>{{ now }}</div>
      </SimpleSlot>
    </div>

    <hr>

    <div>
      <!--为组件定义的多个插槽设置内容-->
      <NamedSlot :avatar="avatar">
        <!--为组件的匿名插槽设置内容, 该匿名插槽用于定义组件的 Body 内容-->
        <div class="body">
          Named Slot Demo
        </div>
        <!--为组件的 title 命名插槽定义内容, 也可以使用 `v-slot:title` 语法-->
        <template #title>
          <strong>Named Slot</strong>
        </template>
        <!--为组件的 footer 命名插槽定义内容, 也可以使用 `v-slot:footer` 语法-->
        <template #footer>
          <div class="footer">
            Powered by Vue 3.x
          </div>
        </template>
      </NamedSlot>
    </div>

    <hr>

    <div>
      <!--通过条件插槽渲染所需的插槽内容-->
      <ConditionSlot :avatar="avatar">
        <!--设置默认插槽, 此时子组件的 `<main>` 元素会被渲染-->
        <div class="body">
          Condition Slot Demo
        </div>
        <!--设置 title 插槽, 此时子组件的 `<header>` 元素会被渲染-->
        <template #title>
          <strong>Condition Slot</strong>
        </template>
        <!--未设置 footer 插槽, 故子组件的 `<footer>` 元素不被渲染-->
      </ConditionSlot>
    </div>

    <hr>

    <div>
      <ConditionSlot :avatar="avatar">
        <div class="body">
          Dynamic Slot Demo
        </div>
        <!--动态插槽, 可以通过 `v-slot:[插槽名称]` 或 `#[插槽名称]` 语法动态设置插槽名称-->
        <template #[slotName]>
          <strong>Dynamic Slot</strong>
        </template>
      </ConditionSlot>
    </div>

    <hr>

    <div class="slot-scooped">
      <!--通过作用域插槽获取子组件为插槽定义的属性值-->
      <div>
        <!--获取子组件插槽上定义的属性对象, 之后通过该属性对象, 可以获取插槽上定义的属性值

        对于匿名插槽上定义的属性对象, 可以通过子组件的 `v-slot="属性对象名称"` 指令获取
        -->
        <ScoopedSlot v-slot="slotProps">
          Now: {{ slotProps.date }}
        </ScoopedSlot>
      </div>
      <div>
        <!--可以通过 JS 的对象解构语法, 直接获取插槽属性对象的各个属性值, 即 `v-slot="{ 属性1, 属性2, ... }"`,
        相当于将上面例子中的 `slotProps` 对象解构;

        对于命名插槽上定义的属性对象, 需要通过 `<template>` 标签上的 `#name="{ 属性1, 属性2, ... }" 获取,
        且一旦设置了命名插槽的 `<template>`, 则默认插槽也必须通过 `<template>` 标签上的 `v-slot` 指令获取插槽属性,
        即: 一旦为组件设置了"命名插槽", 则组件本身的 `v-slot` 指令不在生效
        -->
        <ScoopedSlot>
          <!--为匿名插槽指定内容, 并获取该插槽的 `data` 属性值-->
          <template v-slot="{ date }">
            <span>Now: {{ date }}</span>
          </template>
          <!--为 extra 命名插槽指定内容, 并获取该插槽的 `ticktock` 属性值-->
          <template #extra="{ ticktock }">
            <div class="ticktock">
              <div :class="{ blink: ticktock }"></div>
              <div :class="{ blink: !ticktock }"></div>
            </div>
          </template>
        </ScoopedSlot>
      </div>
    </div>

    <hr>

    <div class="slot-list">
      <ListSlot>
        <!--获取插槽的属性值, 该属性值是子组件在循环渲染时, 为每一个列表项传递的插槽属性
        对于匿名插槽, 也可以通过 `<slot-list v-slot="{ item, index }">` 语法
        -->
        <template v-slot="{ item, index }">
          <div class="slot-list-item">
            <div>{{ index }}</div>
            <div>{{ item }}</div>
          </div>
        </template>
      </ListSlot>
    </div>

    <hr>

    <div class="slot-no-render">
      <!--该组件自身不进行任何渲染, 只是将 `pointX` 和 `pointY` 两个属性值传递给父组件-->
      <NoRenderComponent v-slot="{ pointX, pointY }">
        <div class="row">
          <div>X</div>
          <div>{{ pointX }}</div>
        </div>
        <div class="row">
          <div>Y</div>
          <div>{{ pointY }}</div>
        </div>
      </NoRenderComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import avatar from '@/assets/avatar.jpg';
import ConditionSlot from '@/component/slot/ConditionSlot.vue';
import ListSlot from '@/component/slot/ListSlot.vue';
import NamedSlot from '@/component/slot/NamedSlot.vue';
import NoRenderComponent from '@/component/slot/NoRenderComponent.vue';
import ScoopedSlot from '@/component/slot/ScoopedSlot.vue';
import SimpleSlot from '@/component/slot/SimpleSlot.vue';
import { formatDate } from '@/lib/time';

// 定义响应式变量, 并设置到插槽中, 即子组件的插槽可以引用父组件的上下文
const now = ref<string>(formatDate());
setInterval(() => now.value = formatDate(), 500);

// 表示动态插槽名称的响应式变量
const slotName = ref<string>('title');
// 定期修改插槽名称, 会导致组件在不同时刻渲染不同的插槽
setInterval(() => {
  if (slotName.value === 'title') {
    slotName.value = 'footer';
  } else {
    slotName.value = 'title';
  }
}, 2000);
</script>

<style scoped lang="scss">
.slot {
  display: flex;
  flex-direction: column;

  &>div {
    margin: 20px;
  }

  .body {
    display: flex;
    min-height: 5vh;
    align-items: center;
    justify-content: center;
    font-size: medium;
    font-weight: bold;
    border: 1px solid #62626244;
  }

  .footer {
    text-align: center;
    font-size: smaller;
  }

  .slot-scooped {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    span {
      color: #f27979b0;
    }

    .ticktock {
      display: flex;
      flex-direction: row;
      gap: 0 3px;

      &>div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #94939361;

        &.blink {
          background-color: #fdfdfdd9;
        }
      }
    }
  }

  .slot-list {
    .slot-list-item {
      display: flex;
      flex-direction: row;
      border-collapse: collapse;

      &>div {
        border: 1px solid #62626244;
        padding: 5px 10px;
        text-align: center;

        &:first-child {
          background-color: #62616144;
        }

        &:last-child {
          width: 3em;
        }
      }
    }
  }

  .slot-no-render {
    .row {
      display: flex;
      flex-direction: row;

      &>div {
        border: 1px solid #62616144;
        padding: 5px 8px;

        &:last-child {
          width: 3em;
        }
      }
    }
  }
}
</style>
