import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

/**
 * 定义 Redux Middleware，用于记录每次 dispatch 的日志
 */
const simpleLogger: Middleware =
  (store: MiddlewareAPI<Dispatch<AnyAction>, any>) =>
    (next: Dispatch<AnyAction>) => (action: AnyAction) => {
      console.group(`Simple Logger: ${action.type}`);

      try {
        console.info('dispaching', action);

        const result = next(action);
        console.log('next state', store.getState());

        return result;
      } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
      } finally {
        console.groupEnd();
      }
    }

export default simpleLogger;
