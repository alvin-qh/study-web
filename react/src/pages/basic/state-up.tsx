import { type IconName, InputGroup, Intent, type MaybeElement } from '@blueprintjs/core';
import { type JSX, useRef, useState } from 'react';

/**
 * 华氏度转摄氏度
 */
function toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

/**
 * 摄氏度转华氏度
 */
function toFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

/**
 * 温度类型和转换函数的对应关系
 */
const transfersMap = {
  C: toCelsius,
  F: toFahrenheit
};

/**
 * 温度输入组件的属性
 */
interface TemperatureInputProp {
  type: 'C' | 'F'
  temperature: Temperature
  className?: string
  icon?: IconName | MaybeElement
  onChange?: (type: string, value: number) => void
  intent?: Intent
}

/**
 * 温度值类型
 */
interface Temperature {
  type: string
  value: number
}

/**
 * 温度输入组件
 */
const TemperatureInput = ({ ...props }: TemperatureInputProp): JSX.Element => {
  const {
    type,
    temperature,
    className,
    icon,
    onChange,
    intent
  } = props;

  // 输入组件的引用
  const inputGroupRef = useRef<HTMLInputElement>(null);

  // 温度转换函数
  const transferFn = transfersMap[type];

  /**
   * 转换温度
   */
  const changeTemperature = (temp: Temperature): string => {
    if (temp.type !== type) { // 温度类型不同时，返回转换后的结果
      return transferFn(temp.value).toString();
    }

    if (inputGroupRef.current?.value) { // 当前文本框有值时，返回当前文本框的值
      return inputGroupRef.current.value;
    }

    // 返回缺省值
    return Number.isNaN(temp.value) ? '' : temp.value.toString();
  };

  return (
    <div className={className}>
      <InputGroup
        large={true}
        value={changeTemperature(temperature)}
        leftIcon={icon}
        inputRef={inputGroupRef}
        onChange={(e) => onChange?.(type, parseFloat(e.currentTarget.value))}
        intent={intent}
      />
    </div>
  );
};


const BasicStateUp = (): JSX.Element => {
  const [temperature, setTemperature] = useState<Temperature>({ type: 'C', value: 0 });

  return (
    <div className="px-4 py-6">
      <div>
        <div>摄氏度：</div>
        <TemperatureInput
          type="C"
          className="w-1/4"
          icon="heatmap"
          temperature={temperature}
          onChange={(type, value) => { setTemperature(() => ({ type, value })); }}
          intent={Intent.PRIMARY}
        />
      </div>
      <div className="mt-4">
        <div>华氏度：</div>
        <TemperatureInput
          type="F"
          className="w-1/4"
          icon="heatmap"
          temperature={temperature}
          onChange={(type, value) => { setTemperature(() => ({ type, value })); }}
          intent={Intent.WARNING}
        />
      </div>
    </div>
  );
};

export default BasicStateUp;
