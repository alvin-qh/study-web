import './route.css';

import { type Component } from './base';

export interface RouteItem {
  title: string
  link: string
  component: () => Promise<unknown>
}

export class Route implements Component {
  private readonly _items: RouteItem[] = [];

  constructor(items: RouteItem[]) {
    this._items = items;
  }

  render($h: HTMLElement): void {
    const $nav = document.createElement('nav');
    $nav.className = 'menu';

    const $ul = document.createElement('ul');
    $nav.appendChild($ul);

    this._items.forEach(item => {
      const $a = document.createElement('a');
      $a.href = item.link;
      $a.textContent = item.title;

      const $li = document.createElement('li');
      $li.appendChild($a);
      $ul.appendChild($li);
    });

    $h.innerHTML = '';
    $h.appendChild($nav);
  }
}
