/*
 * https://se-panfilov.github.io/vue-notifications
 */
import 'noty/lib/noty.css';
import 'noty/lib/themes/bootstrap-v4.css';

import Noty from 'noty';
import Vue from 'vue';
import VueNotifications from 'vue-notifications';

type ToastOption = {
  title?: string;
  message: string;
  type: Noty.Type;
  timeout: number;
  cb?: () => void;
};

function toast({ message, type, timeout }:ToastOption) {
  if (type === VueNotifications.types.warn) {
    type = 'warning';
  }
  return new Noty({ text: message, timeout, type, theme: 'bootstrap-v4' }).show();
}

Vue.use(VueNotifications, {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
});

export default VueNotifications;
