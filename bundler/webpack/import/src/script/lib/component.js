
async function sayHello(name) {
  const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash');

  const $div = document.createElement('div');
  $div.className = 'text-box';
  $div.innerText = _.join(['Hello', name], ' ');
  return $div;
}

async function icon(name) {
  await import('@fortawesome/fontawesome-free/css/all.css');

  const { default: _ } = await import('lodash');

  const $icon = document.createElement('i');
  $icon.className = _.join(['fas', name], ' ');

  const $div = document.createElement('div');
  $div.className = 'icon-box';
  $div.appendChild($icon);
  return $div;
}

export { sayHello, icon }
