<template>
    <div class="result">
        <dl class="dl-horizontal">
            <dt>学校二维码</dt>
            <dd></dd>
        </dl>
    </div>
</template>

<script>
    'use strict';

    import $ from "jquery";

    export default {
        props: {
            suiteId: '',
            appId: '',
            corpId: ''
        },
        data() {
            return {
                codeUrl: ''
            };
        },
        mounted() {
            if (this.suiteId && this.appId && this.corpId) {
                const ajax = $.getJSON('http://weixiao100.cn/prods/info/getSchoolInfo', {
                    suiteId: this.suiteId,
                    appId: this.suiteId,
                    cropId: this.corpId
                });
                ajax.done(data => {
                    this.codeUrl = data.weixinCodeUrl;
                });
            }
        }
    }
</script>