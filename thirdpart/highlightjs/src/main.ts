import './style.css';
import 'highlight.js/styles/base16/default-dark.css'; // 引入 theme 样式

import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';


// 参考 https://highlightjs.org 网站

hljs.registerLanguage('javascript', js);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

const $app = document.querySelector('#app')!;
$app.innerHTML = `
<div class="code-area">
  <div class="code-tools">
    <select class="languages">
      <option value="javascript">JavaScript</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="bash">Bash</option>
    </select>
    <div class="buttons">
      <button class="view">查看</button>
      <button class="edit">编辑</button>
    </div>
  </div>
  <div class="code-content">
    <pre><code><html></html></code></pre>
    <div class="code-editor">
      <textarea></textarea>
    </div>
  </div>
</div>`;

let selectedLanguage = 'javascript';
let mode: 'view' | 'edit' = 'view';

const $codeArea = $app.querySelector<HTMLDivElement>('.code-area')!;
const $codeDisplay = $app.querySelector<HTMLPreElement>('.code-content pre code')!;
const $codeEditor = $app.querySelector<HTMLTextAreaElement>('.code-content .code-editor textarea')!;

function changeMode(): void {
  $codeArea.classList.remove('mode-view', 'mode-edit');
  $codeArea.classList.add(`mode-${mode}`);

  if (mode === 'view') {
    $codeDisplay.textContent = $codeEditor.value;

    $codeDisplay.className = '';
    $codeDisplay.classList.add('hljs', selectedLanguage, `language-${selectedLanguage}`);

    // 删除 data-highlighted 属性, 表示尚未进行高亮处理
    delete $codeDisplay.dataset.highlighted;

    hljs.highlightAll();
  }
}

const $langSel = $app.querySelector<HTMLSelectElement>('.code-area .code-tools .languages')!;
$langSel.addEventListener('change', () => {
  selectedLanguage = $langSel.value;
  changeMode();
});


const $btnView = $app.querySelector<HTMLButtonElement>('.code-area .code-tools .buttons .view')!;
$btnView.addEventListener('click', () => {
  mode = 'view';
  changeMode();
});

const $btnEdit = $app.querySelector<HTMLButtonElement>('.code-area .code-tools .buttons .edit')!;
$btnEdit.addEventListener('click', () => {
  mode = 'edit';
  changeMode();
});

// 当 textarea 输入 tab 时, 进制切换控件, 在文本末尾输入 tab
$codeEditor.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = $codeEditor.selectionStart;
    const end = $codeEditor.selectionEnd;

    $codeEditor.value = `${$codeEditor.value.substring(0, start)}\t${$codeEditor.value.substring(end)}`;
    $codeEditor.selectionStart = start + 1;
    $codeEditor.selectionEnd = start + 1;
  }
});

$codeEditor.value = 'console.log(\'Hello World\');';

changeMode();
