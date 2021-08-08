import { ADD_TODO, FilterAction, SET_VISIBILITY_FILTER, TodoAction, TOGGLE_TODO, VisibilityFilter } from "./type";

const uuid = () => {
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

export const addTodo = (text: string): TodoAction => {
  return {
    type: ADD_TODO,
    id: uuid(),
    text,
  }
}

export const toggleTodo = (id: string): TodoAction => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setVisibilityFilter = (filter: VisibilityFilter): FilterAction => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
