<!--选项式组件

VUE3 除了推荐的 “组合式“ (Composables) 组件外, 仍支持传统的 "选项式" (Options) 组件
-->
<template>
  <div class="options">
    <div
      :class="{ time: true, 'with-color': withColor }"
      :style="{ '--color1': color1, '--color2': color2 }"
    >
      <div class="date">
        {{ now }}
      </div>
      <slot />
    </div>
    <div>
      <ul>
        <li
          v-for="h in history"
          :key="h"
          :style="{ backgroundColor: h }"
        />
      </ul>
    </div>
  </div>
</template>

<!--选项式组件无需在 `<script>` 中声明 `setup` -->
<script lang="ts">
import { formatDate } from '@/lib/time';

// 选项式组件需要导出默认组件对象
export default {
  // 定义组件的属性
  props: {
    color1: {
      type: String,
      required: true
    },
    color2: {
      type: String,
      required: true
    }
  },
  // 定义响应式变量, 通过 `data` 方法返回的对象属性均为响应式
  data() {
    return {
      now: formatDate(),
      animate: true,
      history: [] as string[]
    };
  },
  // 定义计算变量, 计算变量为一组函数, 以函数名为变量名, 函数返回值为变量值
  computed: {
    withColor() {
      if (!this.animate) {
        return false;
      }
      const n = parseInt(this.now.substring(this.now.length - 2) as string, 10);
      return n % 2 === 0;
    }
  },
  watch: {
    // 监控 `color1` 属性值的变化
    color1: {
      handler(val: string, oldVal: string) {
        if (oldVal && val !== oldVal) {
          this.history.push(oldVal);
        }
      },
      immediate: true // 组件加载后立即执行一次
    },
    // 监控 `color1` 属性值的变化
    color2: {
      handler(val: string, oldVal: string) {
        if (oldVal && val !== oldVal) {
          this.history.push(oldVal);
        }
      },
      immediate: true // 组件加载后立即执行一次
    }
  },
  // 组件生命周期钩子, 包括: `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `update`, `beforeUnmount` 和 `unmounted`
  created() {
    // 定时调用当前组件的 `changeDate` 方法
    setInterval(() => this.changeDate(), 500);
  },
  // 定义组件方法, 这些方法可以在组件内通过 `this` 关键字调用, 也可以被父组件通过子组件引用来调用
  methods: {
    // 改变 `now` 响应式变量值
    changeDate(): void {
      this.now = formatDate();
    },
    // 停止动画
    stopAnimate(): void {
      this.animate = false;
    },
    // 启用动画
    startAnimate(): void {
      this.animate = true;
    }
  }
};
</script>

<style scoped lang="scss">
.options {
  background-color: #504f4f48;
  padding: 10px;

  .time {
    --color1: #7a5456ab;
    --color2: #547a5aab;

    padding: 10px 0;

    color: var(--color1);
    transition: color .5s linear;

    &.with-color {
      color: var(--color2);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;

    li {
      display: block;
      width: 40px;
      height: 20px;
    }
  }
}
</style>
