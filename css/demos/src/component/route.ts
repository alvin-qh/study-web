import './route.css';

import { type Component, type ErrorPage } from './base';

export interface RouteGroup {
  title: string
  items: RouteItem[]
}

export interface RouteItem {
  title: string
  href: string
  module: () => Promise<{ default: new () => Component }>
  context?: object
  $element?: HTMLAnchorElement
}

export class Route implements Component {
  private readonly _$root: HTMLElement;
  private readonly _$title: HTMLTitleElement | null;
  private readonly _routeGroups: RouteGroup[] = [];
  private readonly _errorModule?: () => Promise<{ default: new () => ErrorPage }>;

  constructor($root: HTMLElement, routeGroups: RouteGroup[], errorModule?: () => Promise<{ default: new () => ErrorPage }>) {
    this._$root = $root;
    this._$title = document.querySelector<HTMLTitleElement>('html>head>title');
    this._routeGroups = routeGroups;
    this._errorModule = errorModule;
  }

  private jumpTo(r: RouteItem): void {
    window.history.pushState(r.context ?? {}, r.title ?? '', r.href);

    r.module()
      .then(({ default: Page }) => {
        this.gotoPage(new Page(), r.href, r.title, r.context);
        if (r.$element) {
          r.$element.classList.add('active');
        }
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
    for (const group of this._routeGroups) {
      for (const item of group.items) {
        if (item.href.startsWith(pathname)) {
          this.jumpTo(item);
          found = true;
          break;
        }
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

    const $outerUl = document.createElement('ul');
    $nav.appendChild($outerUl);

    this._routeGroups.forEach(group => {
      const $groupLi = document.createElement('li');
      $groupLi.textContent = group.title;
      $outerUl.appendChild($groupLi);

      const $innerUl = document.createElement('ul');
      $groupLi.appendChild($innerUl);

      group.items.forEach(item => {
        const $a = document.createElement('a');
        $a.href = item.href;
        $a.textContent = item.title;

        item.$element = $a;

        $a.addEventListener('click', e => {
          e.preventDefault();
          $outerUl.querySelector('a.active')?.classList.remove('active');
          this.jumpTo(item);
        });

        const $itemLi = document.createElement('li');
        $itemLi.appendChild($a);
        $innerUl.appendChild($itemLi);
      });
    });

    $h.innerHTML = '';
    $h.appendChild($nav);

    this.reload();
  }
}
