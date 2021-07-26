import { Switch } from "@blueprintjs/core";
import { FormEvent, HTMLAttributes, useState } from "react";

interface ConditionProp<T> extends HTMLAttributes<T> {
  name: string;
  gender: string;
}

/**
 * 基本条件渲染，根据条件渲染不同的 JSX 片段
 */
const Welcome = ({ name, gender, ...props }: ConditionProp<HTMLDivElement>): JSX.Element => {
  // 根据分支语句进行条件渲染
  /*
    let Greeting: JSX.Element;
    if (gender === 'M') {
      Greeting = (<b>Mr.</b>);
    } else {
      Greeting = (<b>Mis.</b>);
    }
  */

  // 通过三元表达式进行条件渲染
  const Greeting = gender === "M" ? (<b>Mr.</b>) : (<b>Mis.</b>);

  return (
    <div {...props}>
      Welcome {Greeting} {name}
    </div>
  );
}

const Gender = ({ name, gender, ...props }: ConditionProp<HTMLDivElement>): JSX.Element => (
  <p {...props}>
    {name}'s gender is: {(gender === "M" && <b>Male</b>) || (gender === "F" && <b>Female</b>)}
  </p>
)

const ConditionRender = (): JSX.Element => {
  // 定义一组 state hook
  const [gender, setGender] = useState("M");

  // 根据事件对象获取选择值
  const getGender = (e: FormEvent<HTMLInputElement>): string => {
    return e.currentTarget.checked ? "F" : "M"
  }

  return (
    <div className="py-5">
      <Switch
        className="mb-6"
        large={true}
        labelElement={<b>Choose</b>}
        innerLabel="M"
        innerLabelChecked="F"
        onChange={e => setGender(getGender(e))}
      />
      <Welcome
        className="text-lg"
        name="Alvin"
        gender={gender}
      />
      <Gender
        className="text-lg"
        name="Alvin"
        gender={gender}
      />
    </div>
  );
}

export default ConditionRender;
