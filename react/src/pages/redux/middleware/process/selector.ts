/* eslint-disable @typescript-eslint/no-explicit-any */

import { Intent } from '@blueprintjs/core';

import type State from './type';

/**
 * 获取当前进度的 Selector
 */
export const selectValue = (state: any): number => {
  const processState = state.process as State;
  return processState.value;
};

/**
 * 获取当前进度的 Intent 值
 */
export const selectIntent = (state: any): Intent => {
  const processState = state.process as State;
  if (processState.value < 0.3) {
    return Intent.PRIMARY;
  }

  return processState.value < 0.8 ? Intent.SUCCESS : Intent.DANGER;
};

export const selectIsWaiting = (state: any): boolean => {
  const processState = state.process as State;
  return processState.waiting;
};
