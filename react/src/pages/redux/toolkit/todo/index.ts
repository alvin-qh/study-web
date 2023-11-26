import { selectFilter, selectItems } from './selector';
import todoReducer, { addTodo, setVisibilityFilter, toggleTodo } from './slice';
import { VisibilityFilter } from './type';

export {
  addTodo,
  toggleTodo,
  setVisibilityFilter,

  VisibilityFilter,

  selectFilter,
  selectItems,

  todoReducer
};

