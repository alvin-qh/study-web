const lib = require('../common/common-lib');
require('../common/breadcrumb');

const app = new Vue({
    el: '#app',
    data: {     // data 属性设置用于双向棒的对象
        text: '',
        color: 'info',
        panelColor: 'primary',
        now: lib.times.nowString()
    },
    computed: {
        textInverse: {
            get() {
                return this.text.split('').reverse().join('');
            },
            set(newVal) {
                this.text = newVal.split('').reverse().join('');
            }
        },
        noRefresh() {
            return lib.times.nowString();
        },
        refresh() {
            return this.now;
        }
    },
    watch: {
        color(val) {
            switch (val) {
            case 'info':
	            this.panelColor = 'primary';
	            break;
            case 'warning':
	            this.panelColor = 'success';
	            break;
            case 'danger':
	            this.panelColor = 'default';
	            break;
            }
        }
    },
    created() {
        setInterval(() => this.now = lib.times.nowString(), 1000);
    }
});