import '../style/index.css';

import image from '../image/webpack.png';

function imageBox1(image) {
  const img = document.createElement('img');
  img.src = image;
  img.alt = 'image box';

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'image-box1';

  wrapperDiv.appendChild(img);
  return wrapperDiv;
}

function imageBox2() {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'image-box2';
  return wrapperDiv;
}

const wrppper = document.body.getElementsByClassName('main')[0];
wrppper.appendChild(imageBox1(image));
wrppper.appendChild(imageBox2());
