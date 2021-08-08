import { combineReducers, createStore } from 'redux';
import { ADD_TODO, FilterAction, SET_VISIBILITY_FILTER, TodoAction, TodoData, TOGGLE_TODO, VisibilityFilter } from "./type";

const visibilityFilterReducer = (filter: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: FilterAction): VisibilityFilter => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter || VisibilityFilter.SHOW_ALL;
    default:
      return filter
  }
}

const todosReducer = (todos: Array<TodoData> = [], action: TodoAction): Array<TodoData> => {
  switch (action.type) {
    case ADD_TODO:
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
    case TOGGLE_TODO:
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

export const todoAppReducer = combineReducers({
  filter: visibilityFilterReducer,
  todos: todosReducer,
});

export const todoAppStore = createStore(todoAppReducer);
