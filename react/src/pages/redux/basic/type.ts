/* eslint-disable @typescript-eslint/no-redeclare */

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const TOGGLE_TODO = 'TOGGLE_TODO';
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;


export type TodoAction = {
  type: ADD_TODO | TOGGLE_TODO;
  id?: string;
  text?: string;
}

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter];

export type FilterAction = {
  type: SET_VISIBILITY_FILTER;
  filter: VisibilityFilter;
}

export type TodoData = {
  id: string,
  text: string,
  completed: boolean,
}

export type State = {
  filter: VisibilityFilter;
  todos: Array<TodoData>
}
