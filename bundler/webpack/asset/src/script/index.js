import '../style/index.css';
import webpackImage from '../image/webpack.png';

function textBox(text) {
  const div = document.createElement('div');
  div.className = 'text-box';
  div.innerText = text;
  return div;
}

function imageBox1(image) {
  const img = document.createElement('img');
  img.src = image;
  img.alt = 'image box';

  const div = document.createElement('div');
  div.className = 'image-box1';

  div.appendChild(img);
  return div;
}

function imageBox2() {
  const div = document.createElement('div');
  div.className = 'image-box2';
  return div;
}

const wrppper = document.body.getElementsByClassName('main')[0];
wrppper.appendChild(textBox('Hello World!'));
wrppper.appendChild(imageBox1(webpackImage));
wrppper.appendChild(imageBox2());

