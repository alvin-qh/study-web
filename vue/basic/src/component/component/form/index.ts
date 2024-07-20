import FormNumber from "./FormNumber.vue";
import FormText from "./FormText.vue";
import FormRadio from "./FormRadio.vue";
import FormCheckbox from "./FormCheckbox.vue";
import FormTextArea from "./FormTextArea.vue";

// 导出所有表单组件
export {
  FormNumber,
  FormText,
  FormRadio,
  FormCheckbox,
  FormTextArea,
}

// 导出表单组件类型
export type FormFieldComponent =
  typeof FormText |
  typeof FormNumber |
  typeof FormRadio |
  typeof FormCheckbox |
  typeof FormTextArea;

// 导出表单定义和表单数据类型
export {
  type FormDefinition,
  type FormData
} from './type';
