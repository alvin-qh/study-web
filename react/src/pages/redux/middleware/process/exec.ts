import { Dispatch } from "@reduxjs/toolkit";
import { asyncDecrease, asyncIncrease } from "./async";
import { decrease, increase, setWaiting } from "./slice";

type RunDispatchFunc = (dispatch: Dispatch<any>, value: number) => void;

/**
 * 根据选项返回不同的 dispatch 处理函数
 */
const getExectors = (actionType: string): [RunDispatchFunc, RunDispatchFunc] => {
  switch (actionType) {
    case 'sync':
      return [
        (dispatch: Dispatch<any>, value: number): void => {
          dispatch(setWaiting(true));
          dispatch(increase(value));
          dispatch(setWaiting(false));
        },
        (dispatch: Dispatch<any>, value: number): void => {
          dispatch(setWaiting(true));
          dispatch(decrease(value));
          dispatch(setWaiting(false));
        }
      ]
    case 'async_type1':
      return [
        (dispatch: Dispatch<any>, value: number) => {
          dispatch(setWaiting(true));
          dispatch(asyncIncrease(value));
        },
        (dispatch: Dispatch<any>, value: number) => {
          dispatch(setWaiting(true));
          dispatch(asyncDecrease(value));
        }
      ]
    case 'async_type2':
      return [
        () => {

        },
        () => {

        }
      ]
    default:
      throw Error(`Invalid action type ${actionType}`);
  }
}

export default getExectors;
