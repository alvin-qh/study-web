
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todo';

/**
 * 定义根 reducer，组合各个模块定义的 reducer 函数
 */
const rootReducer = combineReducers({
  todo: todoReducer
});


/**
 * 定义存储 State 的 store 对象，根据 rootReducer 定义，State 类型为
 * 
 *    {
 *      todo: TodoData;
 *      ...  // 其它模块 State
 *    }
 */
export default configureStore({
  reducer: rootReducer,
  // 调试工具
  devTools: (process.env.NODE_ENV !== 'production') ? {
    trace: true,
    traceLimit: 25
  } : false
});
