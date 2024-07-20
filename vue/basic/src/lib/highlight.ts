import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import { onMounted } from 'vue';

import 'highlight.js/styles/base16/icy-dark.css';

hljs.registerLanguage('bash', bash);

export function useHighlight(): typeof hljs {
  onMounted(() => {
    hljs.highlightAll();
  });
  return hljs;
}
