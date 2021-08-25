import { Button, Intent, ProgressBar } from "@blueprintjs/core";
import { AnyAction, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

/**
 * 当前 Reducer 的 State 类型
 */
type State = {
  value: number;
  waiting: boolean;
}

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


/**
 * 获取当前进度的 Selector
 */
const selectValue = (state: any) => {
  const processState = state.process as State;
  return processState.value;
}

/**
 * 获取当前进度的 Intent 值
 */
const selectIntent = (state: any) => {
  const processState = state.process as State;
  return processState.value < .3
    ? Intent.PRIMARY
    : (
      processState.value < .8
        ? Intent.SUCCESS
        : Intent.DANGER
    );
}

const selectIsWaiting = (state: any) => {
  const processState = state.process as State;
  return processState.waiting;
}

// 获取 Action
const { increase, decrease, setWaiting } = slice.actions;

// 获取 Reducer 对象
export const reducer = slice.reducer;


/**
 * 异步增加进度的 Action
 */
const asyncIncrease = (payload: number) => (dispatch: Dispatch<AnyAction>) => {
  setTimeout(() => {
    dispatch(increase(payload));
    dispatch(setWaiting(false));
  }, 2000);
}

/**
 * 异步减少进度的 Action
 */
const asyncDecrease = (payload: number) => (dispatch: Dispatch<AnyAction>) => {
  setTimeout(() => {
    dispatch(decrease(payload));
    dispatch(setWaiting(false));
  }, 2000);
}

/**
 * 进度条属性
 */
type ProcessProps = {
  actionType: string;
}

type RunDispatchFunc = (dispatch: Dispatch<any>, value: number) => void;

/**
 * 根据选项返回不同的 dispatch 处理函数
 */
const chooseActionType = (actionType: string): [RunDispatchFunc, RunDispatchFunc] => {
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


/**
 * 更加进度的按钮
 */
const ProcessButton = ({ actionType }: ProcessProps): JSX.Element => {
  const dispatch = useDispatch();

  // 获取进度值
  const value = useSelector(selectValue);
  // 获取等待状态
  const isWaiting = useSelector(selectIsWaiting);

  const [inc, dec] = chooseActionType(actionType);

  return (
    <div className="flex justify-between px-2">
      <Button
        intent={Intent.PRIMARY}
        large={true}
        onClick={() => dec(dispatch, 0.1)}
        disabled={value === 0 || isWaiting}
        className="focus:outline-none"
      >
        -
      </Button>
      <Button
        intent={Intent.PRIMARY}
        large={true}
        onClick={() => inc(dispatch, 0.1)}
        disabled={value === 1 || isWaiting}
        className="focus:outline-none"
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
const Processor = ({ actionType }: ProcessProps): JSX.Element => {
  return (
    <div>
      <ProcessButton actionType={actionType} />
      <ProcessBar />
    </div>
  );
}

export default Processor;
