import { Button, Intent, ProgressBar } from "@blueprintjs/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

type State = {
  value: number;
}

const slice = createSlice({
  name: 'simpleMiddleware',
  initialState: { value: 0 } as State,
  reducers: {
    increase: (state: State, action: PayloadAction<number>): void => {
      state.value += action.payload;
      if (state.value >= 1) {
        state.value = 1;
      }
    },
    decrease: (state: State, action: PayloadAction<number>): void => {
      state.value -= action.payload;
      if (state.value <= 0) {
        state.value = 0;
      }
    }
  }
});

const selectValue = (state: any) => {
  const simpleState = state.simple as State;
  return simpleState.value;
}

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

const { increase, decrease } = slice.actions;
export const reducer = slice.reducer;



const ProcessButton = (): JSX.Element => {
  const dispatch = useDispatch();
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

const ProcessBar = (): JSX.Element => {
  const value = useSelector(selectValue);
  const intent = useSelector(selectIntent);

  return (
    <ProgressBar
      intent={intent}
      className="mt-6 h-4"
      value={value}
    />
  );
}


const SimpleMiddleware = (): JSX.Element => {
  return (
    <div>
      <ProcessButton />
      <ProcessBar />
    </div>
  );
}

export default SimpleMiddleware;
