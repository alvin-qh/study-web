import { row } from "./common.js";

import { join as libJoin } from "study-webpack-library-lib";

function icon(name) {
  const $div = document.createElement("div");
  $div.className = "icon-box";

  const $i = document.createElement("i");
  $i.className = libJoin(["fas", name], " ");

  $div.appendChild($i);
  return $div;
}

const $wrapper = document.body.getElementsByClassName("main")[0];
const $row = $wrapper.appendChild(row());

$row.appendChild(icon("fa-cloud"));
$row.appendChild(icon("fa-sun"));
$row.appendChild(icon("fa-cloud-rain"));
$row.appendChild(icon("fa-snowflake"));
