(function ($, us) {
    'use strict';

    require('bootstrap-notify');

    $.notifyDefaults({
        placement: {
            from: "top",
            align: 'center'
        },
        animate: {
            enter: "animated fadeInUp",
            exit: "animated fadeOutDown"
        },
        delay: 1000,
        allow_dismiss: true,
        type: 'success'
    });

    us.create('#user-select', '#user-select-label');

    $(function () {

        $('.panel-body').show('slow');
        $('form').on('submit', function (e) {
            e.preventDefault();

            $.notify({
                title: '恭喜',
                message: '表单提交成功'
            });
        });
    });

    module.exports = {
        message: 'Hello',
        show: function () {
            console.log(this.message);
        }
    };
})
(
    require('jquery'),
    require('../common/user-select')
);