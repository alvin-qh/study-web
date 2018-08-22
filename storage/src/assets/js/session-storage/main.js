import $ from "jquery";
import "bootstrap";
import "jquery-serializejson";

import {runWith} from "../common/common";

function getSessionStorage() {
    let className, showText;
    if (window.sessionStorage) {
        className = 'info';
        showText = "Session Storage is supported";
    } else {
        className = 'warning';
        showText = "Session Storage is not supported";
    }

    $('#is-support').append(`
        <div class="alert alert-${className} alert-dismissible fade show" role="alert">
            ${showText}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`);

    return window.sessionStorage;
}

runWith('session.index', function () {

    $(() => {
        const ss = getSessionStorage();
        if (!ss) {
            return;
        }

        $('form').on('submit', e => {
            e.preventDefault();
            ss.setItem('form-data', JSON.stringify($(e.currentTarget).serializeJSON()));
            return false;
        });

        $('.btn-remove').on('click', e => {
            ss.removeItem('form-data');
            location.reload();
        });

        const formData = JSON.parse(ss.getItem('form-data'));
        if (!formData) {
            return;
        }

        for (const name in formData) {
            if (!formData.hasOwnProperty(name)) {
                continue;
            }
            const value = formData[name];
            const $inputs = $(`input[name=${name}`);
            if ($inputs.length > 1) {
                $inputs.filter(`*[value=${value}]`).prop('checked', true);
            } else {
                $inputs.val(value);
            }
        }
    });
});