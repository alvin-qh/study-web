'use strict';

const moment = require('moment');

const DATETIME_FORMAT = 'YYYY年MM月DD日 HH:mm:ss';

export default {
	times: {
		nowString() {
			return moment().format(DATETIME_FORMAT);
		}
	}
};