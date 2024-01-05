/* eslint-disable @typescript-eslint/no-redeclare */

/**
 * 定义过滤条件值
 */
export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * 定义过滤条件类型
 */
export declare type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter];

/**
 * 定义 Todo 项数据类型
 */
export declare interface TodoData {
  id: string
  text: string
  completed: boolean
}

/**
 * 定义保存 Todo 信息的 State 类型
 */
export declare interface TodoState {
  filter: VisibilityFilter
  items: TodoData[]
}
