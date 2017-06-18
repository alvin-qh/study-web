;
(function (global) {
    var div = document.getElementById("support");
    var span = div.getElementsByTagName('span')[0];

    if (global.localStorage) {
        span.className = 'info';
        span.innerText = "系统支持 Local Storage";
        localStorage();
    } else {
        span.className = 'error';
        span.innerText = "系统不支持 Local Storage";
    }


    function localStorage() {
        var storage = global.localStorage;
        var form = document.getElementsByClassName("form")[0];

        document.addEventListener('DOMContentLoaded', function (e) {
            var data = storage.getItem('form-data');
            if (data) {
                try {
                    data = JSON.parse(data);
                    var elems = form.elements;

                    for (var i = 0; i < elems.length; i++) {
                        var elem = elems[i];
                        if (elem.name) {
                            var val = data[elem.name];
                            if (elem.type === 'radio') {
                                elem.checked = elem.value == val;
                            } else {
                                elem.value = val || '';
                            }
                        }
                    }
                } catch (e) {
                    storage.removeItem('form-data');
                }
            }
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var elems = form.elements;
            var data = {};

            for (var i = 0; i < elems.length; i++) {
                var elem = elems[i];
                if (elem.name) {
                    if (elem.type === 'radio') {
                        if (elem.checked) {
                            data[elem.name] = elem.value;
                        }
                    } else {
                        data[elem.name] = elem.value;
                    }
                }
            }
            storage.setItem('form-data', JSON.stringify(data));
            return false;
        });

        form.addEventListener('reset', function (e) {
            storage.clear();
        });
    }

})(this);