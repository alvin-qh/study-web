import { TodoState, VisibilityFilter } from "./type";

/**
 * 定义获取 Todo 项集合的 selector 方法
 */
export const selectItems = (state: any) => {
  const todoState = state.todo as TodoState;

  switch (todoState.filter) {
    case VisibilityFilter.SHOW_ACTIVE:
      return todoState.items.filter(t => !t.completed);
    case VisibilityFilter.SHOW_COMPLETED:
      return todoState.items.filter(t => t.completed);
    case VisibilityFilter.SHOW_ALL:
    default:
      return todoState.items;
  }
}

/**
 * 定义获取过滤项的 selector 方法
 */
export const selectFilter = (state: any) => {
  const todoState = state.todo as TodoState;
  return todoState.filter;
};
