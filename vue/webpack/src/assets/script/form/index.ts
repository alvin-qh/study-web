import '../../css/form/index.less';
import '../widget/breadcrumb';

import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';


extend('name', {
  ...required,
  message(): string {
    return 'The name not valid';
  }
});

extend('hobbies', {
  validate(value: string): boolean | string {
    if (value && value.length > 0) {
      return true;
    }
    return 'One of hobbies must be checked';
  },
  computesRequired: true
});

interface Birthday {
  year: number,
  month: number,
  date: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Form {
  name = '';
  gender = 'M';
  birthday: Birthday = { year: 0, month: 0, date: 0 };
  hobbies: Array<string> = [];
  remark = '';
}
