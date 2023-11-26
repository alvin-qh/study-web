import '@/css/application-cache/use-manifest-file.less';
import 'bootstrap';

import $ from 'jquery';

import catImage from '../../images/cat.png';
import { runWith } from '../common/common';

runWith('appcache.manifest', function () {
  $('.card .cat-image').attr('src', catImage);
});
