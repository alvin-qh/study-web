import { Form, type FormData } from '@/components/form';

export default (): HTMLElement => {
  const $main = document.createElement('div');
  $main.className = 'container';

  const $form = document.createElement('div');
  $form.className = 'form';
  $main.appendChild($form);

  const json = sessionStorage.getItem('user-form');
  const data: FormData = json ? JSON.parse(json) : { name: '', gender: 'M' };

  const form = new Form(data, (data: FormData) => {
    const json = JSON.stringify(data);
    sessionStorage.setItem('user-form', json);
  });
  form.render($form);

  return $main;
};
