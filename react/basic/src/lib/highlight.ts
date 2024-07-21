import 'highlight.js/styles/a11y-dark.min.css';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import type React from 'react';
import { useEffect, useRef } from 'react';

hljs.registerLanguage('json', json);

hljs.configure({
  ignoreUnescapedHTML: true
});

// 定义一个 Hook 函数, 用于在元素内容改变后
export const useHighlight = (deps?: React.DependencyList): React.RefObject<HTMLElement> => {
  const elem = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elem.current) {
      delete elem.current.dataset.highlighted;
      hljs.highlightAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return elem;
};
