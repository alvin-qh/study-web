import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { decrease, increase, setWaiting } from "./slice";

/**
 * 异步增加进度的 Action
 */
export const asyncIncrease = (payload: number) => (dispatch: Dispatch<AnyAction>) => {
  setTimeout(() => {
    dispatch(increase(payload));
    dispatch(setWaiting(false));
  }, 2000);
}

/**
 * 异步减少进度的 Action
 */
export const asyncDecrease = (payload: number) => (dispatch: Dispatch<AnyAction>) => {
  setTimeout(() => {
    dispatch(decrease(payload));
    dispatch(setWaiting(false));
  }, 2000);
}
