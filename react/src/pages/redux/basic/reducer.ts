import { combineReducers, createStore } from 'redux';
import { ADD_TODO, FilterAction, SET_VISIBILITY_FILTER, TodoAction, TodoData, TOGGLE_TODO, VisibilityFilter } from "./type";

/**
 * 定义 Action Type 为 ADD_TODO 和 TOGGLE_TODO 的 reducer 函数
 */
const todosReducer = (todos: Array<TodoData> = [], action: TodoAction): Array<TodoData> => {
  switch (action.type) {
    case ADD_TODO:    // 处理添加 Todo 项目的 Action
      if (!action.id || !action.text) {
        return todos;
      }

      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case TOGGLE_TODO:   // 处理切换 Todo 项目完成状态的 Action
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      });
    default:
      return todos;
  }
}

/**
 * 处理 Action 类型为 SET_VISIBILITY_FILTER 的 reducer 函数
 */
const visibilityFilterReducer = (filter: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: FilterAction): VisibilityFilter => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter || VisibilityFilter.SHOW_ALL;
    default:
      return filter
  }
}

/**
 * 组合前两个 reducer，产生整体的 reducer 函数
 */
export const todoAppReducer = combineReducers({
  filter: visibilityFilterReducer,
  todos: todosReducer,
});

export const todoAppStore = createStore(todoAppReducer);
