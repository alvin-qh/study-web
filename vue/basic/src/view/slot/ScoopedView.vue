<!--作用域插槽, 从插槽内部返回值-->
<template>
  <div class="slot">
    <!--通过作用域插槽获取子组件为插槽定义的属性值-->
    <div class="slot-scooped">
      <!--获取子组件插槽上定义的属性对象, 之后通过该属性对象, 可以获取插槽上定义的属性值
      对于匿名插槽上定义的属性对象, 可以通过子组件的 `v-slot="属性对象名称"` 指令获取
      -->
      <ScoopedSlot v-slot="slotProps">
        Now: {{ slotProps.date }}
      </ScoopedSlot>
    </div>

    <div class="slot-scooped">
      <!--可以通过 JS 的对象解构语法, 直接获取插槽属性对象的各个属性值, 即 `v-slot="{ 属性1, 属性2, ... }"`,
      相当于将上面例子中的 `slotProps` 对象解构;

      对于命名插槽上定义的属性对象, 需要通过 `<template>` 标签上的 `#name="{ 属性1, 属性2, ... }" 获取,
      且一旦设置了命名插槽的 `<template>`, 则默认插槽也必须通过 `<template>` 标签上的 `v-slot` 指令获取插槽属性,
      即: 一旦为组件设置了"命名插槽", 则组件本身的 `v-slot` 指令不在生效
      -->
      <ScoopedSlot>
        <!--为匿名插槽指定内容, 并获取该插槽的 `data` 属性值-->
        <template #default="{ date }">
          <span>Now: {{ date }}</span>
        </template>
        <!--为 extra 命名插槽指定内容, 并获取该插槽的 `ticktock` 属性值-->
        <template #extra="{ ticktock }">
          <div class="ticktock">
            <div :class="{ blink: ticktock }" />
            <div :class="{ blink: !ticktock }" />
          </div>
        </template>
      </ScoopedSlot>
    </div>

    <!--作用域插槽应用, 循环插槽内容-->
    <div class="slot-list">
      <ListSlot>
        <!--获取插槽的属性值, 该属性值是子组件在循环渲染时, 为每一个列表项传递的插槽属性
        对于匿名插槽, 也可以通过 `<slot-list v-slot="{ item, index }">` 语法
        -->
        <template #default="{ item, index }">
          <div class="slot-list-item">
            <div>{{ index }}</div>
            <div>{{ item }}</div>
          </div>
        </template>
      </ListSlot>
    </div>

    <!--作用域插槽应用, 无渲染插槽, 仅用于从插槽内部返回值-->
    <div class="slot-no-render">
      <!--该组件自身不进行任何渲染, 只是将 `pointX` 和 `pointY` 两个属性值传递给父组件-->
      <NoRenderSlot v-slot="{ pointX, pointY }">
        <div class="row">
          <div>X</div>
          <div>{{ pointX }}</div>
        </div>
        <div class="row">
          <div>Y</div>
          <div>{{ pointY }}</div>
        </div>
      </NoRenderSlot>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListSlot from '@/component/slot/ListSlot.vue';
import NoRenderSlot from '@/component/slot/NoRenderSlot.vue';
import ScoopedSlot from '@/component/slot/ScoopedSlot.vue';
</script>

<style lang="scss" scoped>
.slot {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px 0;

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
