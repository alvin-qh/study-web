import 'highlight.js/styles/base16/icy-dark.css';

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import { onMounted } from 'vue';

hljs.registerLanguage('bash', bash);

export const useHighlight = (): typeof hljs => {
  onMounted(() => { hljs.highlightAll(); });
  return hljs;
};
