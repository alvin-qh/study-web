import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import State from "./type";

/**
 * 创建 Slice 对象
 */
const slice = createSlice({
  name: 'processor',
  initialState: { value: 0, waiting: false } as State,
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
  }
});

// 获取 Action
export const { increase, decrease, setWaiting } = slice.actions;

// 导出 slice 对象
export default slice.reducer;
