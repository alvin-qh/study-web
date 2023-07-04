import "../../style/index.css";

export function link(name, url) {
  const $div = document.createElement("div");
  $div.className = "link-box";

  const $a = document.createElement("a");
  $a.href = url;
  $a.innerText = name;

  $div.appendChild($a);
  return $div;
}

export function row() {
  const $div = document.createElement("div");
  $div.className = "row";
  return $div;
}
