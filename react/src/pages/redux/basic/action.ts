import { ADD_TODO, FilterAction, SET_VISIBILITY_FILTER, TodoAction, TOGGLE_TODO, VisibilityFilter } from "./type";

/**
 * 产生一个 UUID
 */
function uuid() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);    // eslint-disable-line no-mixed-operators
  });
}

/**
 * 定义添加 Todo 项目的 Action
 */
export const addTodo = (text: string): TodoAction => {
  return {
    type: ADD_TODO,
    id: uuid(),
    text,
  }
}

/**
 * 定义切换 Todo 项目状态的 Action
 */
export const toggleTodo = (id: string): TodoAction => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

/**
 * 设置筛选项的 Action
 */
export const setVisibilityFilter = (filter: VisibilityFilter): FilterAction => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
