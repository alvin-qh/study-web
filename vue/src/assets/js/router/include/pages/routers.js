'use strict';

import Page1 from "./page1.vue";
import Page2 from "./page2.vue";

export default {
    '/www/router/page1': {
        title: 'Page 1',
        component: Page1
    },
    '/www/router/page2': {
        title: 'Page 2',
        component: Page2
    }
}