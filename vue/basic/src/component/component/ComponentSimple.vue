<!--定义一个简单组件

一个组件由一组 HTML 元素以及其它 Vue 组件组成, 可以有一个或多个组件根元素节点;
组件中定义的响应式变量和函数只能在组件内部访问, 如果希望组件外可以通过组件引用访问到组件内定义的变量或函数,
则须通过 `defineExpose` 函数将其导出;
-->
<template>
  <div class="simple-component">
    <button @click="showDialog('Hello, Vue Component', 'Hello')">按钮</button>

    <dialog ref="dialog">
      <header v-if="dialogTitle">{{ dialogTitle }}</header>
      <main>
        {{ dialogMsg }}
      </main>
      <footer>
        <button @click="closeDialog()">Close</button>
      </footer>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 获取组件中 `<dialog>` 元素的引用
const dialog = ref<HTMLDialogElement>();

// 定义响应式变量表示对话框的标题和内容
const dialogTitle = ref<string>('');
const dialogMsg = ref<string>('');

// 显示组件中的对话框元素
function showDialog(msg: string, title: string = '') {
  if (dialog.value) {
    dialogMsg.value = msg;
    dialogTitle.value = title;

    dialog.value.showModal();
  }
}

// 关闭已经显示的对话框
function closeDialog() {
  if (dialog.value) {
    dialog.value.close();
  }
}

// 导出
defineExpose({
  showDialog,
  closeDialog
});
</script>

<style scoped lang="scss">
.simple-component {
  button {
    padding: 10px 20px;
    background-color: #2e2e2ec4;
    border: 1px solid #70707060;

    &:hover {
      background-color: #41414165;
      border: 1px solid #707070bd;
    }

    &:active {
      background-color: #2e2e2ec4;
      border: 1px solid #70707060;
    }
  }

  dialog {
    margin: 50px auto;
    border: none;
    width: 500px;
    box-shadow: 0 10px 20px 0 #0000004d;
    background-color: #272727e2;
    padding: 0;

    opacity: 0;
    transition: opacity 0.3s ease-out;

    &[open] {
      opacity: 1;
    }

    header {
      padding: 10px 10px;
      background-color: #5454543d;
      font-weight: 700;
    }

    main {
      padding: 10px 10px;
    }

    footer {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
    }
  }
}
</style>
