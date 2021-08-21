import { Button, Intent, ProgressBar } from "@blueprintjs/core";
import { AnyAction, createSlice, Dispatch, Middleware, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

/**
 * 当前 Reducer 的 State 类型
 */
type State = {
  value: number;
}

/**
 * 创建 Slice 对象
 */
const slice = createSlice({
  name: 'simpleMiddleware',
  initialState: { value: 0 } as State,
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
    }
  }
});


/**
 * 获取当前进度的 Selector
 */
const selectValue = (state: any) => {
  const simpleState = state.simple as State;
  return simpleState.value;
}

/**
 * 获取当前进度的 Intent 值
 */
const selectIntent = (state: any) => {
  const simpleState = state.simple as State;
  return simpleState.value < .3
    ? Intent.PRIMARY
    : (
      simpleState.value < .8
        ? Intent.SUCCESS
        : Intent.DANGER
    );
}

// 获取 Action
const { increase, decrease } = slice.actions;

// 获取 Reducer 对象
export const reducer = slice.reducer;


/**
 * 更加进度的按钮
 */
const ProcessButton = (): JSX.Element => {
  const dispatch = useDispatch();

  // 获取进度值
  const value = useSelector(selectValue);

  return (
    <div className="flex justify-between px-2">
      <Button
        intent={Intent.PRIMARY}
        large={true}
        onClick={() => dispatch(decrease(.1))}
        disabled={value === 0}
      >
        -
      </Button>
      <Button
        intent={Intent.PRIMARY}
        large={true}
        onClick={() => dispatch(increase(.1))}
        disabled={value === 1}
      >
        +
      </Button>
    </div>
  );
}


/**
 * 显示进度的组件
 */
const ProcessBar = (): JSX.Element => {
  const value = useSelector(selectValue);

  // 获取进度条的 Intent
  const intent = useSelector(selectIntent);

  return (
    <ProgressBar
      intent={intent}
      className="mt-6 h-4"
      value={value}
    />
  );
}

/**
 * 组件
 */
const SimpleMiddleware = (): JSX.Element => {
  return (
    <div>
      <ProcessButton />
      <ProcessBar />
    </div>
  );
}

export default SimpleMiddleware;


/**
 * 定义 Redux Middleware，用于记录每次 dispatch 的日志
 */
export const simpleLoggerMiddleware: Middleware =
  (store: MiddlewareAPI<Dispatch<AnyAction>, any>) =>
    (next: Dispatch<AnyAction>) => (action: AnyAction) => {
      console.group(action.type);

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

