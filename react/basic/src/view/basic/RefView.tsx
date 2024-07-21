import type React from 'react';
import { type FormEvent, useEffect, useRef, useState } from 'react';

import { useHighlight } from '@/lib/highlight';

import css from './Ref.module.scss';

type Hobby = 'Sing' | 'Dance' | 'Rap' | 'Basketball';

// 定义表单数据类型
interface FormType {
  name: string
  age: number
  gender: 'Male' | 'Female'
  hobbies?: Hobby[]
  remark?: string
}

// 定义表单组件熟悉类型
interface FormProps {
  value: FormType
  onSubmit: (value: FormType) => void
}

// 定义表单组件
const Form = ({ value, onSubmit }: FormProps): React.JSX.Element => {
  // 通过 `useRef` 函数, 定义一组引用变量, 并在 JSX 中设置其引用
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);

  const hobbiesSingRef = useRef<HTMLInputElement>(null);
  const hobbiesDanceRef = useRef<HTMLInputElement>(null);
  const hobbiesRapRef = useRef<HTMLInputElement>(null);
  const hobbiesBasketballRef = useRef<HTMLInputElement>(null);

  const remarkRef = useRef<HTMLTextAreaElement>(null);

  // 当 `value` 属性发生变化后, `useEffect` 函数执行回调
  useEffect(() => {
    // 将组件 `value` 属性中的值设置到对应的表单元素中
    nameRef.current && (nameRef.current.value = value.name);
    ageRef.current && (ageRef.current.value = `${value.age}`);

    if (genderMaleRef.current && genderFemaleRef.current) {
      if (value.gender === 'Male') {
        genderMaleRef.current.checked = true;
      } else {
        genderFemaleRef.current.checked = true;
      }
    }

    if (hobbiesSingRef.current &&
      hobbiesDanceRef.current &&
      hobbiesRapRef.current &&
      hobbiesBasketballRef.current) {
      hobbiesSingRef.current.checked = value.hobbies?.includes('Sing') ?? false;
      hobbiesDanceRef.current.checked = value.hobbies?.includes('Dance') ?? false;
      hobbiesRapRef.current.checked = value.hobbies?.includes('Rap') ?? false;
      hobbiesBasketballRef.current.checked = value.hobbies?.includes('Basketball') ?? false;
    }

    remarkRef.current && (remarkRef.current.value = value.remark ?? '');
  }, [value]);

  // 处理表单的 `onSubmit` 事件
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    // 调用组件 `onSubmit` 属性, 发出事件调用, 传递表单数据
    onSubmit({
      name: nameRef.current!.value,
      age: parseInt(ageRef.current!.value, 10),
      gender: genderMaleRef.current!.checked ? 'Male' : 'Female',
      hobbies: [
        hobbiesSingRef.current!.checked ? 'Sing' : undefined,
        hobbiesDanceRef.current!.checked ? 'Dance' : undefined,
        hobbiesRapRef.current!.checked ? 'Rap' : undefined,
        hobbiesBasketballRef.current!.checked ? 'Basketball' : undefined
      ].filter(Boolean) as Hobby[],
      remark: remarkRef.current!.value
    });
  };

  // 渲染表单值
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <div>Name</div>
        <input type="text" ref={nameRef} />
      </label>
      <label className={css.label}>
        <div>Age</div>
        <input type="number" ref={ageRef} />
      </label>
      <div className={css.label}>
        <div>Gender</div>
        <label>
          <input type="radio" name="gender" ref={genderMaleRef} value="Male" />
          <div>Male</div>
        </label>
        <label>
          <input type="radio" name="gender" ref={genderFemaleRef} value="Female" />
          <div>Female</div>
        </label>
      </div>
      <div className={css.label}>
        <div>Hobbies</div>
        <label>
          <input type="checkbox" name="hobbies" ref={hobbiesSingRef} value="Sing" />
          <div>Sing</div>
        </label>
        <label>
          <input type="checkbox" name="hobbies" ref={hobbiesDanceRef} value="Dance" />
          <div>Dance</div>
        </label>
        <label>
          <input type="checkbox" name="hobbies" ref={hobbiesRapRef} value="Rap" />
          <div>Rap</div>
        </label>
        <label>
          <input type="checkbox" name="hobbies" ref={hobbiesBasketballRef} value="Basketball" />
          <div>Basketball</div>
        </label>
      </div>
      <label className={css.label}>
        <div>Remark</div>
        <textarea ref={remarkRef}></textarea>
      </label>
      <div className={css.submit}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

// 渲染页面
export const RefView = (): React.JSX.Element => {
  // 定义状态值表示表单数据
  const [form, setForm] = useState<FormType>({
    name: 'Alvin',
    age: 18,
    gender: 'Male',
    hobbies: ['Sing', 'Dance']
  });

  // 调用钩子对指定元素内代码进行高亮
  const elem = useHighlight([form]);

  return (
    <div className={css.ref}>
      {/* 使用表单组件, 传入属性值并处理事件 */}
      <Form value={form} onSubmit={(value) => { setForm(value); }} />
      <pre>
        {/* 将高亮钩子函数返回的引用变量进行绑定, 显示 JSON 代码 */}
        <code className="language-json" ref={elem}>{JSON.stringify(form, null, 2)}</code>
      </pre>
    </div>
  );
};
