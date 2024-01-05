/* eslint-disable @typescript-eslint/no-redeclare */

/**
 * 定义 Action Type 的值和类型
 */
export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;


/**
 * 定义增加 Todo 项目的 Action 类型
 */
export interface TodoAction {
  type: ADD_TODO | TOGGLE_TODO
  id?: string
  text?: string
}

/**
 * 过滤器项目值
 */
export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// 过滤器项目类型
export type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter];

/**
 * 定义过滤项切换 Action
 */
export interface FilterAction {
  type: SET_VISIBILITY_FILTER
  filter: VisibilityFilter
}

/**
 * 定义每个 Todo 项目的类型
 */
export interface TodoData {
  id: string
  text: string
  completed: boolean
}

/**
 * 定义存储在 Store 中的对象类型
 */
export interface State {
  filter: VisibilityFilter
  todos: TodoData[]
}
