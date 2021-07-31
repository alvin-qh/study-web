import { Button, Intent, Radio, RadioGroup } from "@blueprintjs/core";
import React, { FormEvent, useContext, useState } from "react";

/**
 * 定义 Theme 类型作为 Context 对象类型
 */
type Theme = {
  intent: Intent;
  color: string;
}

/**
 * Context 对象及其初始值
 */
const theme: Theme = {
  intent: Intent.NONE,
  color: "blue"
}

// 生成 Context 对象并设置缺省值
const ThemeContext = React.createContext(theme);

/**
 * 定义 ContextSetting 组件的属性类型
 */
type ContextSettingProp = {
  // 当 Theme 值发生变化发生事件回调
  onThemesChanged: (theme: Theme) => void;
}

/**
 * Theme 设置组件
 */
const ContextSetting = ({ onThemesChanged }: ContextSettingProp): JSX.Element => {
  // 获取 Context 中设置的值
  const theme = useContext(ThemeContext);

  // 获取和设置 intent 值的 state hook
  const [intentValue, setIntentValue] = useState<Intent>(theme.intent);

  // 定义事件响应函数相应 intent radio button 选择变更
  const handleIntentChangeEvent = (e: FormEvent<HTMLInputElement>): void => {
    // 发出 theme 变更的事件
    onThemesChanged({ ...theme, intent: e.currentTarget.value as Intent });

    // 改变 intent state 值
    setIntentValue(e.currentTarget.value as Intent);
  }

  /**
   * 定义显示色彩的 Box 组件
   */
  const ColorBox = ({ backgroundColor }: { backgroundColor: string }): JSX.Element => {
    return (
      <div className={`${backgroundColor} w-5 h-5 inline-block`} />
    )
  }

  // 获取和设置 color 值的 state hook
  const [colorValue, setColorValue] = useState<string>(theme.color);

  // 定义事件响应函数相应 color radio button 选择变更
  const handleColorChangeEvent = (e: FormEvent<HTMLInputElement>): void => {
    // 发出 theme 变更的事件
    onThemesChanged({ ...theme, color: e.currentTarget.value });

    // 改变 color state 值
    setColorValue(e.currentTarget.value);
  }

  const intents = [
    Intent.NONE,
    Intent.PRIMARY,
    Intent.SUCCESS,
    Intent.WARNING,
    Intent.DANGER
  ];

  const colors = [
    "blue",
    "green",
    "yellow",
    "rose",
    "purple",
  ];

  return (
    <div className="space-y-4">
      <div>
        <p className="font-medium">Select intent:</p>
        <div className="mt-2">
          <RadioGroup
            onChange={handleIntentChangeEvent}
            selectedValue={intentValue}
          >
            {
              // 产生 intent 选择 radio buttons
              intents.map(intent => {
                return (
                  <Radio
                    label={intent.toUpperCase()}
                    value={intent}
                  />)
              })
            }
          </RadioGroup>
        </div>
      </div>
      <div>
        <p className="font-medium bg-">Select bacground color:</p>
        <div className="mt-2">
          <RadioGroup
            onChange={handleColorChangeEvent}
            selectedValue={colorValue}
          >
            {
              // 产生 color 选择 radio buttons
              colors.map(color => {
                return (
                  <Radio
                    labelElement={<ColorBox backgroundColor={`bg-${color}-400`} /> /* 渲染显示颜色的 Box 组件 */}
                    value={color}
                    className="flex items-center"
                  />
                )
              })
            }
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

/**
 * 展示 Context 值的 Button 组件
 */
const ContextButton = (): JSX.Element => {
  // 获取 Context 中设置的值
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Button
        className="focus:outline-none"
        large={true}
        intent={theme.intent}
      >
        Click me
      </Button>
    </div>
  );
}

/**
 * Text 组件的属性
 */
type ContextTextProps = {
  children: string
}

/**
 * 展示 Context 值的 Text 组件
 */
const ContextText = ({ children }: ContextTextProps): JSX.Element => {
  // 获取 Context 中设置的值
  const theme = useContext(ThemeContext);

  return (
    <p className={`text-lg text-${theme.color}-500 font-medium`}>{children}</p>
  )
}


const HookContext = (): JSX.Element => {
  // 获取和设置 theme 值的 state hook
  const [currentTheme, setCurrentTheme] = useState<Theme>();

  return (
    <div className="px-4 py-6 space-y-4">
      {/* 设置 ThemeContext 的作用域范围和初始值 */}
      <ThemeContext.Provider value={currentTheme || theme}>
        <div>
          <p className="py-1 px-2 text-lg font-medium bg-gradient-to-r from-yellow-100 to-yellow-50">
            Theme setting:
          </p>
          <div className="px-2 mt-2">
            <ContextSetting
              onThemesChanged={theme => setCurrentTheme(theme) /* 当 theme changed 事件到达后，改变 currentTheme 的 state */}
            />
          </div>
        </div>
        <div>
          <p className="py-1 px-2 text-lg font-medium bg-gradient-to-r from-sky-100 to-sky-50">
            Theme showcase:
          </p>
          <div className="px-2 mt-4 space-y-4">
            <ContextButton />
            <ContextText>
              This is text color demo.
            </ContextText>
          </div>
        </div>
      </ThemeContext.Provider>
    </div >
  );
}

export default HookContext;
