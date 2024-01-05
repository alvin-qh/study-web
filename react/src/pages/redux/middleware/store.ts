import { combineReducers, configureStore, Middleware, Tuple } from '@reduxjs/toolkit';
import { type GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { logger } from 'redux-logger';
import { thunk } from 'redux-thunk';

import simpleLogger from './middleware';
import { reducer } from './process';
// import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

/**
 * Root Reducer
 */
const rootReducer = combineReducers({
  // process 模块的 reducer
  process: reducer
});


// type GetMiddlewareFunction = () => Array<Middleware>;
// type CombineMiddlewareFunction = (getDefaultMiddlewares: GetMiddlewareFunction) => Array<Middleware>;

// /**
//  * 将新加入的中间件和默认中间件合并起来
//  */
// const combineMiddlewares = (...middlewares: Array<Middleware>): CombineMiddlewareFunction => {
//   return (getDefaultMiddlewares: GetMiddlewareFunction) => [...getDefaultMiddlewares(), ...middlewares];
// }


/**
 * 创建根 Store
 */
export default configureStore({
  reducer: rootReducer,
  // 设置 Middleware
  middleware(get: GetDefaultMiddleware) {
    return get().concat(thunk, logger, simpleLogger);
  },
  devTools: (process.env.NODE_ENV !== 'production')
    ? {
      trace: true,
      traceLimit: 25
    }
    : false
});
