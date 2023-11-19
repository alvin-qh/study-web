import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, VisibilityFilter } from "./type";
import { uuid } from "./util";

/**
 * 创建一个 Action 函数
 */
export const setVisibilityFilter = createAction<VisibilityFilter>('SET_VISIBILITY_FILTER');


/**
 * 创建一个 Slice 对象
 * 
 * 注意：传统的 reducer 函数通过参数传入旧的 state 并返回新的 state
 *      createSlice 函数为 reducer 启用了 Immer 功能，允许对 state 参数本身做修改（mutation）操作
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

// 获取 reduce 函数
export default slice.reducer;
