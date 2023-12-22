import './shining.css';

import { type Component } from '@/component/base';

export default class Shining implements Component {
  render($h: HTMLElement): void {
    $h.innerHTML = '';
  }
}
