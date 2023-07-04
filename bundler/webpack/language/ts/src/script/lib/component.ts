export function textbox(text: string): Element {
  const $span = document.createElement("span");
  $span.innerText = text;

  const $div = document.createElement("div");
  $div.appendChild($span);
  $div.className = "text-box";
  return $div;
}
