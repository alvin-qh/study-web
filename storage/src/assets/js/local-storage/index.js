import $ from "jquery";
import "bootstrap";
import "jquery-serializejson";

import { runWith } from "../common/common";

function getLocalStorage() {
  let className, showText;
  if (window.localStorage) {
    className = 'info';
    showText = "Local Storage is supported";
  } else {
    className = 'warning';
    showText = "Local Storage is not supported";
  }

  $('#is-support').append(`
        <div class="alert alert-${className} alert-dismissible fade show" role="alert">
            ${showText}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`);

  return window.localStorage;
}

runWith('local.index', function () {

  $(() => {
    const ls = getLocalStorage();
    if (!ls) {
      return;
    }

    $('form').on('submit', e => {
      e.preventDefault();
      ls.setItem('form-data', JSON.stringify($(e.currentTarget).serializeJSON()));
      return false;
    });

    // noinspection JSUnusedLocalSymbols
    $('.btn-remove').on('click', e => {
      ls.removeItem('form-data');
      location.reload();
    });

    const formData = JSON.parse(ls.getItem('form-data'));
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
