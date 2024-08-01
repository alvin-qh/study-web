// 定义表单组件类型并导出
export type FormFieldType = 'text' | 'number' | 'radio' | 'checkbox' | 'textarea';

// 定义表单数据类型并导出
export type FormFieldDataType = string | number | boolean | string[] | number[] | null;

// 定义一个表单字段数据结构并导出
export interface FormField {
  label: string
  type: FormFieldType
  choice?: string[]
  default?: FormFieldDataType
}

// 定义表单定义数据结构并导出
export type FormDefinition = Record<string, FormField>;

// 定义表单数据内容数据结构并导出
export type FormData = Record<string, FormFieldDataType>;
