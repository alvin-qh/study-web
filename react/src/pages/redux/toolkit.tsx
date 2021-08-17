/**
 * 通过 Redux Toolkit 工具包简化 Redux 使用
 * 
 *    传统的 Redux 使用过程比较繁琐（参见 redux/basic 模块代码），Redux Toolkit 可以解决这个问题。
 * 
 * 安装依赖：除标准的 react-redux 以来外，还需要安装如下依赖：
 * 
 *    yarn add yarn add @reduxjs/toolkit
 * 
 * 通过 createSlice 创建 Slice 对象，一同创建的包括 Action 和 reducer。（参考 redux/toolkit/slice.ts）
 * 
 *    const slice = createSlice({
 *      name: <name>,
 *      initialState: { ... },    // 当前 reducer 的 state 对象初始化值
 *      reducers: { ... },        // key 为 action 名称，value 为 reducer 函数的 object，reducer 函数定义为 (state, action) => { ... }，其中 state 表示相对于当前 reducer 的 state 类型
 *      extraReducers: { ... }    // 对于已存在的 action creator 函数，通过 extraReducers 将其加入到当前 reducer 中
 *    });
 * 
 *    export const { ..., ... } = slice.actions;
 *    export default slice.reducer;
 * 
 * 创建的 reducer 可以通过 combineReducers 函数与其它 reducer 组合成 root reducer，用于创建 store
 * 
 *    const rootReducer = combineReducers({
 *       a: reducerA,
 *       b: reducerB,
 *    });
 * 
 * 同时 store 里的 state 也被定义，即 
 * 
 *    {
 *      a: ...;
 *      b: ...;
 *    }
 */

import { Provider } from "react-redux";
import { AddTodo, Footer, TodoList } from "./toolkit/component";
import store from "./toolkit/store";

const ReduxBasic = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="w-1/3 px-2 py-4">
        <p className="font-medium text-lg mb-2">Todo List: </p>
        <div>
          <AddTodo />
        </div>
        <div className="mt-4">
          <TodoList />
        </div>
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default ReduxBasic;
