import { type Dispatch, type Middleware, type MiddlewareAPI, type UnknownAction } from '@reduxjs/toolkit';

/**
 * 定义 Redux Middleware，用于记录每次 dispatch 的日志
 */
const simpleLogger: Middleware<{}, MiddlewareAPI<Dispatch<UnknownAction>, any>> = (store) => (next) => (action) => {
  console.group(`Simple Logger: ${(action as any).type}`);
  try {
    console.info('dispatching', action);

    const result = next(action);
    console.log('next state', store.getState());

    return result;
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  } finally {
    console.groupEnd();
  }
};

export default simpleLogger;
