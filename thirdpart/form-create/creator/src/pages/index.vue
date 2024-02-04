<template>
  <div class="wrapper horizontal">
    <a-card class="a-column" title="表单 Schema" size="small" :hoverable="true">
      <a-tabs ref="$codeTab" v-model:activeKey="tabActiveKey" :animated="false">
        <a-tab-pane key="1" tab="表单配置" :force-render="true">
          <pre><code class="language-json" v-html="formOptionsHTML" /></pre>
        </a-tab-pane>
        <a-tab-pane key="2" tab="表单结构" :force-render="true">
          <pre><code class="language-json" v-html="formSchemaHtml" /></pre>
        </a-tab-pane>
        <a-tab-pane key="3" tab="表单数据">
          <pre><code class="language-json" v-html="formDataHtml" /></pre>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-card class="a-column" title="表单预览" size="small" :hoverable="true">
      <div class="form">
        <form-create :option="formOptions" :rule="formSchema" @submit="onSubmit" />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import 'highlight.js/styles/base16/default-dark.css';

import { type Api } from '@form-create/ant-design-vue';
import hljs from 'highlight.js';
import json from 'highlight.js/lib/languages/json';
import { ref } from 'vue';

import formOptions from '../assets/form-options.json';
import formSchema from '../assets/simple.json';

hljs.registerLanguage('json', json);

const tabActiveKey = ref<string>('1');
const formOptionsHTML = Object.freeze(hljs.highlight(JSON.stringify(formOptions, null, 2), { language: 'json' }).value);
const formSchemaHtml = Object.freeze(hljs.highlight(JSON.stringify(formSchema, null, 2), { language: 'json' }).value);
const formDataHtml = ref<string>('');

function onSubmit(formData: object, api: Api): void {
  formDataHtml.value = Object.freeze(hljs.highlight(JSON.stringify(formData, null, 2), { language: 'json' }).value);
}
</script>

<style scoped lang="scss">
.a-column {
  flex: 1;
}

.form {
  width: 40vw;
  padding: 2vw;
}
</style>
