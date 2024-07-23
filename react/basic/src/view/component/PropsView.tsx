import React, { useEffect, useState } from 'react';

import css from './Props.module.scss';

export type FormFieldType = 'text' | 'number' | 'select' | 'radio' | 'checkbox' | 'textarea';

export type FormFieldDataType = number | string | number[] | string[];

export interface FormField {
  label: string
  type: FormFieldType
  choose?: number[] | string[]
}

export type FormDefinition = Record<string, FormField>;

export type FormData = Record<string, FormFieldDataType>;

export interface FormProps {
  definition: FormDefinition
  data?: FormData
}

const Form = ({ definition, data }: FormProps): React.JSX.Element => {
  const [fields, setFields] = useState<React.JSX.Element[]>([]);
  const [formData, setFormData] = useState<FormData>(data ?? {});

  useEffect(() => {
    console.log(JSON.stringify(formData, null, 2));
  }, [formData]);

  useEffect(() => {
    setFields(
      Object.keys(definition).map((name) => {
        const def = definition[name];

        let elem: React.JSX.Element;

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
        case 'textarea':
        default:
          throw new Error('Invalid form field type');
        }

        return (
          <div key={name} className={css['form-field']}>
            {elem}
          </div>
        );
      })
    );
  }, [definition, formData]);

  useEffect(() => {
    setFormData(data ?? {});
  }, [data]);

  return (
    <form className={css.form}>
      {fields}
    </form>
  );
};

export const PropsView = (): React.JSX.Element => {
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
    }
  });

  const [data, setData] = useState<FormData>({
    name: '',
    age: 18,
    gender: 'Male',
    career: 'Student'
  });

  return (
    <div className={css.props}>
      <div>
        <textarea
          onChange={(e) => {
            try {
              setDefinition(JSON.parse(e.target.value) as FormDefinition);
            } catch (er) {
              console.error(er);
              setDefinition({});
            }
          }}>{JSON.stringify(definition, null, 2)}</textarea>
      </div>
      <div className={css.arrow}>
        <span>→</span>
      </div>
      <div>
        <Form definition={definition} data={data} />
      </div>
      <div className={css.arrow}>
        <span>←</span>
      </div>
      <div>
        <textarea
          onChange={(e) => {
            try {
              setData(JSON.parse(e.target.value) as FormData);
            } catch (er) {
              console.error(er);
              setData({});
            }
          }}>{JSON.stringify(data, null, 2)}</textarea>
      </div>
    </div>
  );
};
