import './route.css';

import { type Component, type ErrorPage } from './base';

export interface RouteItem {
  title: string
  href: string
  module: () => Promise<{ default: new () => Component }>
  context?: object
}

export class Route implements Component {
  private readonly _$root: HTMLElement;
  private readonly _$title: HTMLTitleElement | null;
  private readonly _items: RouteItem[] = [];
  private readonly _errorModule?: () => Promise<{ default: new () => ErrorPage }>;

  constructor($root: HTMLElement, items: RouteItem[], errorModule?: () => Promise<{ default: new () => ErrorPage }>) {
    this._$root = $root;
    this._$title = document.querySelector<HTMLTitleElement>('html>head>title');
    this._items = items;
    this._errorModule = errorModule;
  }

  private jumpTo(r: RouteItem): void {
    window.history.pushState(r.context ?? {}, r.title ?? '', r.href);

    r.module()
      .then(({ default: Page }) => {
        this.gotoPage(new Page(), r.href, r.title, r.context);
      })
      .catch(err => { throw err; });
  }

  private gotoPage(page: Component, href: string, title?: string, context?: object): void {
    window.history.pushState(context ?? {}, title ?? '', href);
    page.render(this._$root);
    if (this._$title && title) {
      this._$title.textContent = title;
    }
  }

  private reload(): void {
    const pathname = window.location.pathname || '/';

    let found = false;
    for (const item of this._items) {
      if (item.href.startsWith(pathname)) {
        this.jumpTo(item);
        found = true;
        break;
      }
    }

    if (!found && this._errorModule) {
      this._errorModule()
        .then(({ default: Page }) => {
          const page = new Page();
          page.setError('404', `The page with href "${window.location.pathname}" not exist`);
          this.gotoPage(page, '/error', '404');
        })
        .catch(err => { throw err; });
    }
  }

  render($h: HTMLElement): void {
    const $nav = document.createElement('nav');
    $nav.className = 'menu';

    const $ul = document.createElement('ul');
    $nav.appendChild($ul);

    this._items.forEach(item => {
      const $a = document.createElement('a');
      $a.href = '#';
      $a.textContent = item.title;

      $a.addEventListener('click', e => {
        e.preventDefault();
        $ul.querySelector('a.active')?.classList.remove('active');

        const $target = e.currentTarget as HTMLLinkElement;
        $target.classList.add('active');

        this.jumpTo(item);
      });

      const $li = document.createElement('li');
      $li.appendChild($a);
      $ul.appendChild($li);
    });

    $h.innerHTML = '';
    $h.appendChild($nav);

    window.addEventListener('load', () => { this.reload(); });
    window.addEventListener('popstate', () => { this.reload(); });
  }
}
