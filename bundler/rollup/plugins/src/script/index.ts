import logo from "../assets/rollup-logo.svg";

const $body = document.querySelector("body");

const $main = document.createElement("div");
$body?.appendChild($main);

const $image = document.createElement("img");
$image.src = logo;
$image.style.cssText = "width: 100px;";

$main.appendChild($image);
