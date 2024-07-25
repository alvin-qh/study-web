import React, { useEffect, useState } from 'react';

import css from './Props.module.scss';

// 定义表单字段类型
type FormFieldType = 'text' | 'number' | 'select' | 'radio' | 'checkbox' | 'textarea';

// 定义表单字段值类型
type FormFieldDataType = number | string | number[] | string[];

// 定义表单字段
interface FormField {
  label: string
  type: FormFieldType
  choose?: number[] | string[]
}

// 定义表单
type FormDefinition = Record<string, FormField>;

// 定义表单值
type FormData = Record<string, FormFieldDataType>;

// 定义表单组件属性
//
// 在 JSX 语法中, 一个组件的属性即为传递给表示该组件函数的参数, 参数类型为一个包含 Key/Value 对象,
// 每个 Key 表示组件的一个属性
//
// 对于 JSX, 可以使用函数类型的 Key 作为属性, 即表示该组件的一个"事件"
interface FormProps {
  // 表单定义
  definition: FormDefinition
  // 表单值
  data?: FormData
  // 表单内容改变事件函数
  onChange: (data: FormData) => void
}

// 定义 `<Form>` 组件, 并为组件传递 `FormProps` 属性
const Form = ({ definition, data, onChange }: FormProps): React.JSX.Element => {
  // 定义响应式状态值, 表示表单各个字段的 JSX 集合
  const [fields, setFields] = useState<React.JSX.Element[]>([]);

  // 定义响应式状态值, 表示表单值
  const [formData, setFormData] = useState<FormData>(data ?? {});

  // 当表单值属性发生变化后, 将该属性值保存到响应式状态中
  useEffect(() => { setFormData(data ?? {}); }, [data]);

  // 当表单值发生变化后, 调用 `onChange` 事件, 将表单值发送到父组件
  useEffect(() => { onChange(formData); }, [formData, onChange]);

  // 当表单值属性或表单定义属性发生变化后, 重新渲染表单
  useEffect(() => {
    // 将各个表单字段存储为 JSX 集合
    setFields(
      Object.keys(definition).map((name) => {
        let elem: React.JSX.Element;

        const def = definition[name];

        // 根据表单字段类型生成表单字段 JSX
        switch (def.type) {
        case 'text':
          elem = (
            <label className={css.label}>
              <div>{def.label}</div>
              <input
                name={name}
                type={def.type}
                value={(formData[name] ?? '') as string}
                onChange={(e) => { setFormData({ ...formData, [name]: e.target.value }); }}
              />
            </label>
          );
          break;
        case 'number':
          elem = (
            <label className={css.label}>
              <div>{def.label}</div>
              <input
                name={name}
                type={def.type}
                value={(formData[name] ?? '') as string}
                onChange={(e) => { setFormData({ ...formData, [name]: e.target.value }); }}
              />
            </label>
          );
          break;
        case 'select':
          elem = (
            <label className={css.label}>
              <div>{def.label}</div>
              <select
                name={name}
                value={(formData[name] ?? '') as string}
                onChange={(e) => { setFormData({ ...formData, [name]: e.target.value }); }}
              >
                {
                  (def.choose ?? []).map((item) => (
                    <option key={item}>{item}</option>
                  ))
                }
              </select>
            </label>
          );
          break;
        case 'radio':
          elem = (
            <div className={css.label}>
              <div>{def.label}</div>
              {
                (def.choose ?? []).map((item) => (
                  <label key={item} className={css['radio-group']}>
                    <input
                      name={name}
                      type="radio"
                      value={item}
                      checked={formData[name] === item}
                      onChange={(e) => { setFormData({ ...formData, [name]: e.target.value }); }}
                    />
                    <div>{item}</div>
                  </label>
                ))
              }
            </div>
          );
          break;
        case 'checkbox':
          elem = (
            <div className={css.label}>
              <div>{def.label}</div>
              {
                (def.choose ?? []).map((item) => (
                  <label key={item} className={css['checkbox-group']}>
                    <input
                      name={name}
                      type='checkbox'
                      value={item}
                      checked={(formData[name] as unknown[]).includes(item)}
                      onChange={(e) => {
                        const vals = (formData[name] as unknown[]).filter((it) => it !== e.target.value);
                        if (e.target.checked) {
                          vals.push(e.target.value);
                        }
                        setFormData({ ...formData, [name]: vals as unknown as FormFieldType });
                      }}
                    />
                    <div>{item}</div>
                  </label>
                ))
              }
            </div>
          );
          break;
        case 'textarea':
          elem = (
            <label className={css.label}>
              <div>{def.label}</div>
              <textarea
                value={formData[name] as string}
                onChange={(e) => { setFormData({ ...formData, [name]: e.target.value }); }}
              ></textarea>
            </label>
          );
          break;
        default:
          throw new Error('Invalid form field type');
        }

        // 生成一个表单字段 JSX
        return (
          <div key={name} className={css['form-field']}>
            {elem}
          </div>
        );
      })
    );
  }, [definition, formData]);

  // 生成表单 JSX
  return (
    <form className={css.form}>
      {fields}
    </form>
  );
};

// 定义页面组件
export const PropsView = (): React.JSX.Element => {
  // 表单定义, 存储到响应式状态中
  const [definition, setDefinition] = useState<FormDefinition>({
    name: {
      type: 'text',
      label: 'Name'
    },
    age: {
      type: 'number',
      label: 'Age'
    },
    gender: {
      type: 'radio',
      label: 'Gender',
      choose: ['Male', 'Female']
    },
    career: {
      type: 'select',
      label: 'Career',
      choose: ['', 'Student', 'Teacher', 'Employee']
    },
    hobbies: {
      type: 'checkbox',
      label: 'Hobbies',
      choose: ['Sing', 'Dance', 'Rap', 'Basketball']
    },
    remark: {
      type: 'textarea',
      label: 'Remark'
    }
  });

  // 表单值, 存储到响应式状态中
  const [data, setData] = useState<FormData>({
    name: '',
    age: 18,
    gender: 'Male',
    career: 'Student',
    hobbies: ['Sing', 'Rap'],
    remark: 'Hello'
  });

  return (
    <div className={css.props}>
      <div>
        {/* 文本框, 用于展示表单定义 JSON, 当文本框内容变化后, 根据文本框 JSON 内容重新渲染表单组件 */}
        <textarea
          onChange={(e) => {
            try {
              setDefinition(JSON.parse(e.target.value) as FormDefinition);
            } catch (er) {
              setDefinition({});
            }
          }} value={JSON.stringify(definition, null, 2)}></textarea>
      </div>
      <div className={css.arrow}>
        <span>→</span>
      </div>
      <div>
        {/* 渲染表单组件 */}
        <Form definition={definition} data={data} onChange={(d) => {
          setData(d);
          console.log(data);
        }} />
      </div>
      <div className={css.arrow}>
        <span>←</span>
      </div>
      <div>
        {/* 文本框, 用于展示表单值 JSON, 当文本框内容变化后, 根据文本框 JSON 内容重新渲染表单组件 */}
        <textarea
          onChange={(e) => {
            try {
              setData(JSON.parse(e.target.value) as FormData);
            } catch (er) {
              setData({});
            }
          }} value={JSON.stringify(data, null, 2)}></textarea>
      </div>
    </div>
  );
};
