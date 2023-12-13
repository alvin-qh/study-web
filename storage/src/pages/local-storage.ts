import { Form, type FormData } from '@/components/form';

export default (): HTMLElement => {
  const $main = document.createElement('div');
  $main.className = 'container';

  const $form = document.createElement('div');
  $form.className = 'form';
  $main.appendChild($form);

  const json = localStorage.getItem('user-form');
  const data: FormData = json ? JSON.parse(json) : { name: '', gender: 'M' };

  const form = new Form(data, (fd: FormData) => {
    const obj = JSON.stringify(fd);
    localStorage.setItem('user-form', obj);
  });
  form.render($form);

  return $main;
};
