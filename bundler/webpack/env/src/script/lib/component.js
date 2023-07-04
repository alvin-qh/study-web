
export const component = {
  show(text) {
    const $div = document.createElement("div");
    $div.className = "text-box";

    const $span = document.createElement("span");
    $span.innerText = text;
    $div.appendChild($span);

    return $div;
  }
}
