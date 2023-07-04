import { forEach as _forEach, join as _join } from "lodash-es";
import { jumpTo } from "./router.js";

export function breadcrumb($root, paths) {
  const $nav = document.createElement("nav");
  $nav.className = "breadcrumb";

  _forEach(paths, (p, n) => {
    if (n !== paths.length - 1) {
      const $a = document.createElement("a");
      $a.innerText = p.text;
      $a.href = "javascript:;";
      $a.addEventListener("click", () => jumpTo(p.name), false);
      $nav.appendChild($a);

      const $b = document.createElement("b");
      $b.innerText = "/";
      $nav.appendChild($b);
    } else {
      const $b = document.createElement("b");
      $b.innerText = p.text;
      $nav.appendChild($b);
    }
  });
  $root.innerHTML = "";
  $root.appendChild($nav);
}

export function container($root, fn) {
  const $div = document.createElement("div");
  $div.className = "container";

  fn($div);
  $root.appendChild($div);
}

export function icon(name) {
  const $i = document.createElement("i");
  $i.className = _join(["fas", name], " ");
  return $i;
}

export function text(txt) {
  const $span = document.createElement("span");
  $span.className = "text-box";
  $span.innerText = txt;
  return $span;
}
