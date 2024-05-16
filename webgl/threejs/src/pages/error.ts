import { type Component } from '@/lib/component';

export default class ErrorPage implements Component {
  readonly code?: string;
  readonly message?: string;

  constructor(props: { code?: string, message?: string }) {
    this.code = props.code;
    this.message = props.message;
  }

  render($h: HTMLElement): void {
    const $container = document.createElement('div');
    $container.classList.add('error-page');
    $container.innerHTML = `
    <div class="error-code">${this.code ?? '400'}</div>
    <div class="error-message">${this.message ?? 'Bad Request'}</div>
    `;
    $h.appendChild($container);
  }
}
