(function ($) {
    'use strict';

    const PERSONS = [
        {
            key: 'TEACHER',
            val: '教师'
        }, {
            key: 'STUDENT',
            val: '学生'
        }, {
            key: 'PARENT',
            val: '家长'
        }
    ];

    var ID = 0;

    function _create(wrapper, label) {
        var id = 'user-select-' + (ID++);

        var $sel = $('<select class="form-control user-select"/>').attr('id', id);
        $.each(PERSONS, function (n, obj) {
            $('<option/>').val(obj.key).text(obj.val).appendTo($sel);
        });
        $(wrapper).append($sel);
        if (label) {
            $(label).attr('for', id);
        }
    }

    module.exports = {
        create: _create
    };
})(require('jquery'));