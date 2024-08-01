import { type ElementType } from '@/types/common';

export { default as EventComp } from './EventComp.vue';

// 导出运算符集合
export const operators = [
  '+',
  '-',
  '*',
  '/'
] as const;

// 通过运算符集合设置 Operator 类型
export type Operator = ElementType<typeof operators>;

// 定义数据模型类型
export interface ModelType {
  number1: number
  number2: number
  operator: Operator
  result?: number
}

// 定义事件类型
export type CalculateEvent = ModelType;
