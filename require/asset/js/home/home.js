
require(['jquery', 'common/user-select', 'common/bootstrap-notify'], function ($, cus) {
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

    cus.create('#user-select', '#user-select-label');

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
});