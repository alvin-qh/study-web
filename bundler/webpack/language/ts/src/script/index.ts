import '../style/index.css';

function textbox(text: string) {
  const $span = document.createElement('span');
  $span.innerText = text;

  const $div = document.createElement('div');
  $div.appendChild($span);
  $div.className = 'text-box';
  return $div;
}

const $wrapper = document.querySelector('.main');
$wrapper?.appendChild(textbox('Hello World'));
