import '../style/index.css';

function textBox(text) {
  const div = document.createElement('div');
  div.className = 'text-box';
  div.innerText = text;
  return div;
}

document.body.appendChild(textBox('Hello World!'));
