import ErrorPage from '@/pages/error';

import { type Component } from './component';

/**
 * the root html element, new elements must be appended into it
 */

let _$root: HTMLElement | null = null;

/**
 * 定义路由类型
 */
interface Route {
  title?: string
  href: string
  menu?: 'hidden'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  module: () => Promise<{ default: new (props: Record<string, any>) => Component }>
  context?: object
  target?: '_blank'
}

/**
 * the route table, mapping the navigate pathname to executable script
 *
 * each route object in this table has the type:
 * {
 *    title: required, string, inner text of <title> element
 *    href: required, string, the pathname of route
 *    module: required, function, return a Promise object to import the target script
 *    context: optional, object, the context or state object to keep in "window.history"
 * }
 */
let _routes: Record<string, Route> = {};

/**
 * jump to target view by render by "init" function in imported script
 *
 * the "init" function defined like this
 *    function init() => Element {}
 */
function _jumpTo(r: Route | string, message?: string): void {
  if (typeof r === 'string') {
    const page = new ErrorPage({
      code: r,
      message,
    });
    render(page);
    return;
  }

  // push give href into top of the history stack
  window.history.pushState(r.context ?? {}, r.title ?? '', r.href);

  // run "module" function, import the module
  const m = r.module();

  // do something after module has been imported
  // import "init" function from module
  m.then(({ default: Page }) => {
    const page = new Page({});
    // render html by call "init" function
    render(page);
  }).catch(err => { throw err; });

  // change html title
  if (r.title) {
    document.querySelector<HTMLTitleElement>('html>head>title')!.innerText = r.title;
  }
}

/**
 * reload current page by current "window.location"
 */
function _reload(): void {
  const pathname = window.location.pathname || '/';

  let found = false;

  // traverse the routing table, find which route object should match current pathname and jump to it
  Object.keys(_routes).forEach((key) => {
    const it = _routes[key];
    if (it && it.href.startsWith(pathname)) {
      _jumpTo(it);
      found = true;
    }
  });

  // no route object was matched, jump to 404
  if (!found) {
    jumpTo('404');
  }
}

/**
 * render the view by given html element
 */
function render(page: Component): void {
  if (_$root && page) {
    _$root.innerHTML = ''; // empty the container element
    page.render(_$root); // append generated element into container element
  }
}

/**
 * make "menu", save "view root element" and record the "route table"
 */
export function route($root: HTMLElement, $nav: HTMLElement, routes: Record<string, Route>): void {
  // create top element for menu
  const $ul = document.createElement('ul');
  $ul.className = 'menu-bar';

  const pathname = window.location.pathname ?? '/';

  // traverse route table to create menu item and add "click" event handler for it
  Object.keys(routes).forEach((key) => {
    const routeItem = routes[key];
    if (routeItem.menu !== 'hidden') { // test this route object if can display on menu
      const $li = document.createElement('li');
      const $a = document.createElement('a');
      $li.appendChild($a);

      $a.innerText = routeItem.title ?? '';
      if (routeItem.target === '_blank') {
        $a.target = routeItem.target;
        $a.href = routeItem.href;
      } else {

        $a.href = 'javascript:;';

        // add "click" event handler, to jump to the target view
        $a.addEventListener('click', () => {
          $ul.querySelector('a.active')?.classList.remove('active');

          _jumpTo(routeItem);
          $a.classList.add('active');
        });
      }

      if (routeItem.href.startsWith(pathname)) {
        $a.classList.add('active');
      }

      $ul.appendChild($li);
    }
  });
  $nav.appendChild($ul);

  // record given things
  _$root = $root;
  _routes = routes || {};
}

/**
 * jump to target view by given route name
 *
 * @param {*} name route name
 */
export function jumpTo(name: string): void {
  const r = _routes[name];
  if (r) {
    _jumpTo(r);
  } else {
    _jumpTo('404', 'Page not found');
  }
}


// jump once when page was loaded
window.addEventListener('load', _reload);

// jump once when history is go back
window.addEventListener('popstate', _reload);
