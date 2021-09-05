import { Button, Intent, ProgressBar } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import { getExectors, selectIntent, selectIsWaiting, selectValue } from "./process";

/**
 * 进度条属性
 */
type ProcessProps = {
  actionType: string;
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

  const [inc, dec] = getExectors(actionType);

  return (
    <div className="flex justify-between px-2">
      <Button
        intent={Intent.PRIMARY}
        large={true}
        loading={isWaiting}
        onClick={() => dec(dispatch, 0.1)}
        disabled={value === 0 || isWaiting}
        className="focus:outline-none"
      >
        -
      </Button>
      <Button
        intent={Intent.PRIMARY}
        large={true}
        loading={isWaiting}
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
