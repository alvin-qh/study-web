import "../../css/application-cache/use-manifest-file.less";

import catImage from "../../images/cat.png";

import $ from "jquery";
import "bootstrap";
import { runWith } from "../common/common";

runWith('appcache.manifest', function () {
  $('.card .cat-image').attr('src', catImage);
});
