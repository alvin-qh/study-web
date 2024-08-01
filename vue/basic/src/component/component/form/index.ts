import FormCheckbox from './FormCheckbox.vue';
import FormNumber from './FormNumber.vue';
import FormRadio from './FormRadio.vue';
import FormText from './FormText.vue';
import FormTextArea from './FormTextArea.vue';

// 导出所有表单组件
export {
  FormCheckbox,
  FormNumber,
  FormRadio,
  FormText,
  FormTextArea
};

// 导出表单组件类型
export type FormFieldComponent =
  typeof FormText |
  typeof FormNumber |
  typeof FormRadio |
  typeof FormCheckbox |
  typeof FormTextArea;

// 导出表单定义和表单数据类型
export {
  type FormData,
  type FormDefinition
} from './type';
