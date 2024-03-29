/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk, createSlice, type Dispatch, type PayloadAction, type UnknownAction } from '@reduxjs/toolkit';

import type State from './type';

/**
 * 定义一个异步方法，模拟从网络异步获取数据
 */
const delayNumber =
  async (milliseconds: number, value: number): Promise<number> => await new Promise<number>((resolve) => {
    setTimeout(() => { resolve(value); }, milliseconds);
  });


/**
 * 通过 createAsyncThunk 函数创建异步 Action
 */
const delayIncrease = createAsyncThunk(
  'processor/delayIncrease',
  async (payload: number, thunkAPI): Promise<number> => await delayNumber(2000, payload)
);

/**
 * 通过 createAsyncThunk 函数创建异步 Action
 */
const delayDecrease = createAsyncThunk(
  'processor/delayDecrease',
  async (payload: number, thunkAPI): Promise<number> => await delayNumber(2000, payload)
);

/**
 * 创建 Slice 对象
 */
const slice = createSlice({
  name: 'processor',
  initialState: { value: 0, waiting: false },
  reducers: {
    /**
     * 增加进度
     */
    increase: (state: State, action: PayloadAction<number>): void => {
      state.value += action.payload;
      if (state.value >= 1) {
        state.value = 1;
      }
    },
    /**
     * 减少进度
     */
    decrease: (state: State, action: PayloadAction<number>): void => {
      state.value -= action.payload;
      if (state.value <= 0) {
        state.value = 0;
      }
    },
    /**
     * 切换等待状态
     */
    setWaiting: (state: State, action: PayloadAction<boolean>): void => {
      state.waiting = action.payload;
    }
  },
  extraReducers(builder) {
    /**
     * 处理异步 Action 等待状态的 reducer 函数
     */
    builder.addCase(delayIncrease.pending.type, (state: State): void => {
      state.waiting = true;
    });

    /**
     * 处理异步 Action 执行完毕的 reducer 函数
     */
    builder.addCase(delayIncrease.fulfilled.type, (state: State, action: PayloadAction<number>): void => {
      state.waiting = false;
      state.value += action.payload;
      if (state.value >= 1) {
        state.value = 1;
      }
    });

    /**
     * 处理异步 Action 等待状态的 reducer 函数
     */
    builder.addCase(delayDecrease.pending.type, (state: State): void => {
      state.waiting = true;
    });

    /**
     * 处理异步 Action 执行完毕的 reducer 函数
     */
    builder.addCase(delayDecrease.fulfilled.type, (state: State, action: PayloadAction<number>): void => {
      state.waiting = false;
      state.value -= action.payload;
      if (state.value <= 0) {
        state.value = 0;
      }
    });
  }
});

// 获取 Action
const { increase, decrease, setWaiting } = slice.actions;

// 导出 slice 对象
export default slice.reducer;

/**
 * 异步增加进度的 Action
 */
const asyncIncrease = (payload: number) => (dispatch: Dispatch<UnknownAction>) => {
  setTimeout(() => {
    dispatch(increase(payload));
    dispatch(setWaiting(false));
  }, 2000);
};

/**
 * 异步减少进度的 Action
 */
const asyncDecrease = (payload: number) => (dispatch: Dispatch<UnknownAction>) => {
  setTimeout(() => {
    dispatch(decrease(payload));
    dispatch(setWaiting(false));
  }, 2000);
};


type RunDispatchFunc = (dispatch: Dispatch<any>, value: number) => void;

/**
 * 根据选项返回不同的 dispatch 处理函数
 */
export const getExecutors = (actionType: string): [RunDispatchFunc, RunDispatchFunc] => {
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
    ];
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
    ];
  case 'async_type2':
    return [
      (dispatch: Dispatch<any>, value: number) => {
        dispatch(delayIncrease(value));
      },
      (dispatch: Dispatch<any>, value: number) => {
        dispatch(delayDecrease(value));
      }
    ];
  default:
    throw Error(`Invalid action type ${actionType}`);
  }
};
