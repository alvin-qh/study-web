import { Intent } from "@blueprintjs/core";
import State from "./type";

/**
 * 获取当前进度的 Selector
 */
export const selectValue = (state: any) => {
  const processState = state.process as State;
  return processState.value;
}

/**
 * 获取当前进度的 Intent 值
 */
export const selectIntent = (state: any) => {
  const processState = state.process as State;
  return processState.value < .3
    ? Intent.PRIMARY
    : (
      processState.value < .8
        ? Intent.SUCCESS
        : Intent.DANGER
    );
}

export const selectIsWaiting = (state: any) => {
  const processState = state.process as State;
  return processState.waiting;
}
