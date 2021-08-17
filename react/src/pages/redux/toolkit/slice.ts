import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, VisibilityFilter } from "./type";

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


export const setVisibilityFilter = createAction<VisibilityFilter>('SET_VISIBILITY_FILTER');

/**
 * 创建一个 Slice 对象
 */
const slice = createSlice({
  name: 'todo',
  /**
   * 定义初始的 State 对象值
   */
  initialState: { filter: VisibilityFilter.SHOW_ALL, items: [] } as TodoState,

  /**
   * 定义 reducer 方法
   */
  reducers: {
    /**
     * 添加一个 Todo 项目
     */
    addTodo: (state: TodoState, action: PayloadAction<string>): void => {
      const text = action.payload;
      if (text) {
        state.items = [
          ...state.items,
          {
            id: uuid(),
            text,
            completed: false
          }
        ]
      }
    },

    /**
     * 切换 Todo 项目的 completed 状态
     */
    toggleTodo: (state: TodoState, action: PayloadAction<string>): void => {
      const id = action.payload;
      if (id) {
        state.items = state.items.map(item => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
          return item;
        });
      }
    }
  },
  // extraReducers: builder => {
  //   /**
  //    * 设置过滤项
  //    */
  //   builder.addCase(toggleTodoBy, (state: TodoState, action: PayloadAction<string>): void => {
  //     const filter = action.payload;
  //     if (filter) {
  //       state.filter = filter;
  //     }
  //   })
  // }
  extraReducers: {
    [setVisibilityFilter.type]: (state: TodoState, action: PayloadAction<string>): void => {
      const filter = action.payload;
      if (filter) {
        state.filter = filter;
      }
    }
  }
});


// 通过 Slice 对象获取 Action 方法
export const { addTodo, toggleTodo } = slice.actions;

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

// 从 Slice 对象中获取 reducer 函数
export default slice.reducer
