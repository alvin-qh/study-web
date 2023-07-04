import "../style/index.css";
import { join } from "lodash-es";

import { textbox } from "./lib/component";

const $wrapper = document.querySelector(".main");
$wrapper?.appendChild(textbox(join(["Hello", "World"], " ")));
