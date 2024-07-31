<template>
  <div class="component">
    <!--简单组件-->
    <div class="simple">
      <!--使用简单组件, 该组件通过 `import` 关键字引入, 在模板中, 可以写为 `<SimpleComponent>` 或 `<simple-component>`-->
      <ComponentSimple ref="simpleComponent" />
      <div>
        <a href="#" @click.prevent="showComponentDialog">Call Component showDialog function</a>
      </div>
    </div>

    <hr>

    <!--传递组件属性-->
    <div>
      <!--使用组件, 并传递属性值到组件内部-->
      <ComponentProps :color="color" :size="size" />
      <fieldset class="props-value">
        <legend>Outside Component</legend>
        <label>
          <div>Color</div>
          <input v-model="color" type="text">
        </label>
        <label>
          <div>Size</div>
          <input v-model="size" type="text">
        </label>
      </fieldset>
    </div>

    <hr>

    <!--处理组件事件-->
    <div class="calculate">
      <div>
        <!--使用组件, 并通过 `change` 事件接收子组件发出的计算结果-->
        <ComponentEvent
          :number1="number1"
          :number2="number2"
          :opt="opt"
          @change="handleResultChange"
        />
        <div class="result">
          {{ `${number1} ${opt} ${number2} = ${result}` }}
        </div>
      </div>

      <div>
        <!--使用组件, 通过子组件的 `modelValue` 属性和 `update:modelValue` 事件实现 `v-model` 指令-->
        <ComponentEvent v-model="calModel" />
        <div class="result">
          {{ `${calModel.number1} ${calModel.operator} ${calModel.number2} = ${calModel.result || 0}` }}
        </div>
      </div>
    </div>

    <hr>

    <!--组件的 `v-model` 指令-->
    <div class="typewriter">
      <div>
        <!--使用组件, 组件输出的字符通过 `v-model` 传递给父组件-->
        <ComponentVModel v-model="letter" />
      </div>
      <div>
        <!--绑定文本域-->
        <textarea v-model="text" />
      </div>
    </div>

    <hr>

    <!--通过 `v-model` 对组件数据进行双向绑定-->
    <div class="dynamic-form">
      <div>
        <textarea v-model="formDefinitionJson" />
      </div>
      <div>
        <!--使用动态组件, 可以根据传入的 `formDefinition` 定义, 动态渲染组件内容-->
        <ComponentDynamic v-model="formDataJson" :definition="formDefinition" />
      </div>
      <div>
        <!--显示 JSON 字符串-->
        <textarea v-model="formDataJson" />
      </div>
    </div>

    <hr>

    <!--组件属性透传-->
    <div class="attrs">
      <div>
        <!--展示组件获得的透传属性继承-->
        <ComponentFallthroughAttr :id="100" class="inherit-attr-class" @click="handleAttrClick" />
      </div>
      <div>
        <!--展示禁用属性透传时的情况-->
        <ComponentDisableFallthroughAttrs :id="100" class="inherit-attr-class" @click="handleAttrClick" />
      </div>
    </div>

    <hr>

    <!--选项式风格组件-->
    <div class="component-options">
      <div>
        <ComponentOptionStyle ref="compOptStyle" :color1="color1" :color2="color2" />
      </div>
      <div class="label">
        <input type="checkbox" checked @change="toggleAnimate">
        <div>Animate</div>
      </div>
      <div class="color">
        <label>
          <div>Color1</div>
          <input name="color1" type="text" @keydown.enter="changeColor">
        </label>
        <label>
          <div>Color2</div>
          <input name="color2" type="text" @keydown.enter="changeColor">
        </label>
      </div>
    </div>

    <hr>

    <div>
      <ComponentInjection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, type WatchStopHandle } from 'vue';

import { ComponentDisableFallthroughAttrs, ComponentFallthroughAttr } from '@/component/component/attr';
import ComponentDynamic from '@/component/component/ComponentDynamic.vue';
import ComponentEvent, {
  type CalculateEvent,
  type ModelType,
  type Operator
} from '@/component/component/ComponentEvent';
import ComponentInjection from '@/component/component/ComponentInjection.vue';
import ComponentOptionStyle from '@/component/component/ComponentOptionStyle.vue';
import ComponentProps from '@/component/component/ComponentProps.vue';
// 导入组件, 该组件只能在当前文件内部使用
import ComponentSimple from '@/component/component/ComponentSimple.vue';
import ComponentVModel from '@/component/component/ComponentVModel.vue';
import { type FormDefinition } from '@/component/component/form';

// 获取 `ComponentSimple` 组件的引用
const simpleComponent = ref<typeof ComponentSimple>();

// 定义方法, 通过访问 `SimpleComponent` 内部的函数显示 `SimpleComponent` 组件内部定义的对话框
const showComponentDialog = (): void => {
  // `showDialog` 函数通过 `SimpleComponent` 组件内部的 `defineExpose` 导出, 故可在父组件中访问
  simpleComponent.value?.showDialog('Show Component Dialog', 'Notify');
};


// 定义两个响应式变量, 作为 `ComponentProps` 组件的输入属性
const color = ref<string>('#f5c5c5c3b');
const size = ref<string>('15px');


// 定义用于接收组件事件的响应式变量, 并作为 `ComponentEvent` 组件的属性
const number1 = ref<number>(1);
const number2 = ref<number>(2);
const opt = ref<Operator>('+');
const result = ref<number>(0);

// 处理 `ComponentEvent` 组件的 `change` 事件
const handleResultChange = (e: CalculateEvent): void => {
  number1.value = e.number1;
  number2.value = e.number2;
  opt.value = e.operator;

  if (e.result !== undefined) {
    result.value = e.result;
  }
};

// 定义响应式对象, 作为 `ComponentEvent` 组件的 `modelValue` 属性值和 `update:modelValue` 事件参数值,
// 从而实现 `v-model` 指令
const calModel = reactive<ModelType>({
  number1: 1,
  number2: 2,
  operator: '+'
});


// 定义响应式变量, 接收 `ComponentVModel` 组件发送的字符
const letter = ref<string>('');

// 定义响应式变量, 显示
const text = ref<string>('');

// 监听组件的 `v-model` 变量, 组合后显示在文本域中
const beginLetterWatch = (): WatchStopHandle => (
  watch(letter, (val) => {
    if (val) {
      // 停止监听文本域响应变量
      stopWatchHandle.stopTextWatch();

      if (val === 'Backspace') {
        // 处理 Backspace 按键
        text.value = text.value.substring(0, text.value.length - 1);
      } else {
        // 将组件返回的按键加入到文本框
        text.value += val;
      }
      // 开启文本框响应变量监听
      stopWatchHandle.stopTextWatch = beginTextWatch();
    }
  })
);

// 监听文本域内容, 将最后一个字符传递给组件的 `v-model` 变量
const beginTextWatch = (): WatchStopHandle => (
  watch(text, (nv, ov) => {
    // 判断文本是否为追加
    if (nv.length > ov.length) {
      // 获取文本追加的部分
      const diff = nv.substring(ov.length);

      if (diff.length > 0) {
        // 停止 `letter` 变量的监控
        stopWatchHandle.stopLetterWatch();

        // 为 letter 响应式变量赋值
        diff.split('').forEach((l) => {
          letter.value = l;
        });

        // 开启 `letter` 变量监控
        stopWatchHandle.stopLetterWatch = beginLetterWatch();
      }
    }
  })
);

// 定义对象, 用于存储关闭监听器的函数
const stopWatchHandle = {
  stopLetterWatch: beginLetterWatch(),
  stopTextWatch: beginTextWatch()
};


// 表单定义对象 JSON 字符串, 和 textarea 元素绑定
const formDefinitionJson = ref<string>(JSON.stringify({
  name: {
    label: 'Name',
    type: 'text'
  },
  age: {
    label: 'Age',
    type: 'number'
  },
  gender: {
    label: 'Gender',
    type: 'radio',
    choice: ['Male', 'Female'],
    default: 'Male'
  },
  hobby: {
    label: 'Hobby',
    type: 'checkbox',
    choice: ['Sing', 'Dance', 'Rap', 'Football'],
    default: ['Rap']
  },
  remark: {
    label: 'Remark',
    type: 'textarea'
  }
}, null, 2));

// 定义响应式变量, 用于存储表单定义对象
const formDefinition = computed<FormDefinition>(
  () => JSON.parse(formDefinitionJson.value)
);

// 定义响应式变量, 用于存储表单值 JSON 字符串
const formDataJson = ref<string>(JSON.stringify({
  name: 'Alvin',
  age: 22
}, null, 2));


// 测试属性继承的事件处理函数
const handleAttrClick = (): void => {
  // eslint-disable-next-line no-alert
  window.alert('Hello');
};


// 通过响应式变量引用 `ComponentOptionStyle` 组件
const compOptStyle = ref<typeof ComponentOptionStyle>();

// 复选框事件处理, 用于切换 `ComponentOptionStyle` 组件是否启用动画
const toggleAnimate = (e: Event): void => {
  const target = e.target as HTMLInputElement;

  // 根据复选框是否选中, 调用 `ComponentOptionStyle` 提供的方法开启和停用动画
  if (target.checked) {
    compOptStyle.value?.startAnimate();
  } else {
    compOptStyle.value?.stopAnimate();
  }
};


// 定义响应式变量作为组件的颜色属性
const color1 = ref<string>('#7a5456ab');
const color2 = ref<string>('#547a5aab');

// 响应文本框事件, 修改颜色
const changeColor = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  switch (target.name) {
  case 'color1':
    color1.value = target.value;
    break;
  case 'color2':
    color2.value = target.value;
    break;
  default:
    throw new Error('invalid color value');
  }
};
</script>

<style scoped lang="scss">
.component {
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  &>div {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 0 20px;

    &.simple {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0 10px;

      &>div {
        font-size: small;
      }
    }

    label {
      display: flex;
      flex-direction: row;
      gap: 0 5px;
      align-items: center;

      &>div {
        font-size: small;
        width: 3em;
        text-align: right;

        &::after {
          content: ":";
        }
      }

      input {
        padding: 5px 8px;
      }
    }

    .props-value {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      height: fit-content;

      legend {
        font-size: 12px;
      }
    }
  }

  .calculate {
    display: flex;
    flex-direction: row;
    gap: 0 30px;

    &>div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px 0;

      .result {
        font-family: 'Courier New', Courier, monospace;
        background-color: #79797977;
        padding: 5px 8px;
      }
    }
  }

  .typewriter {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 10px 0;

    &>div {
      width: 100%;
      text-align: center;
    }

    textarea {
      width: 90%;
      height: 10em;
      resize: none;
    }
  }

  .dynamic-form {
    textarea {
      width: 23em;
      height: 18em;
      resize: none;
    }

    pre {
      font-size: large;
      margin: 0;
      color: #ceccccdf;
    }
  }

  .component-options {
    .label {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 0 5px;
    }

    .color {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      font-size: small;

      label {
        &>div {
          width: 5em;
        }
      }
    }
  }
}
</style>
