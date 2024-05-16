import './error.css';

import { type ErrorPage } from '@/component/base';

export default class DefaultErrorPage implements ErrorPage {
  private name: string = '';
  private message: string = '';

  setError(name: string, message: string): void {
    this.name = name;
    this.message = message;
  }

  render($h: HTMLElement): void {
    const $root = document.createElement('div');
    $root.className = 'error-info';
    $root.innerHTML = `
      <h1 class="error-name">${this.name}</h1>
      <p class="error-message">${this.message}</p>`;

    $h.innerHTML = '';
    $h.appendChild($root);
  }
}
