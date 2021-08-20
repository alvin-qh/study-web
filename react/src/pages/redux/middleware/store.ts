import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as simpleReducer } from "./simple";

const rootReducer = combineReducers({
  simple: simpleReducer
});

export default configureStore({
  reducer: rootReducer,
  devTools: (process.env.NODE_ENV !== 'production') ? {
    trace: true,
    traceLimit: 25
  } : false
});
