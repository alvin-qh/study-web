import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as simpleReducer, simpleLoggerMiddleware } from "./simple";

/**
 * Root Reducer
 */
const rootReducer = combineReducers({
  // simple 模块的 reducer
  simple: simpleReducer
});


/**
 * 创建根 Store
 */
export default configureStore({
  reducer: rootReducer,
  // 设置 Middleware
  middleware: [simpleLoggerMiddleware],
  devTools: (process.env.NODE_ENV !== 'production') ? {
    trace: true,
    traceLimit: 25
  } : false
});
