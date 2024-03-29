import React, { type JSX } from 'react';
import { useLocation } from 'react-router-dom';

const Content = (): JSX.Element => React.createElement(
  'p',
  {
    className: 'text-lg text-gray-600 p-6',
    align: 'center'
  },
  'The world is busy. Who is not busy? May you laugh and be busy and seek the joy of life.'
);

const BasicHello = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search);

  return (
    <>
      <h1 className="text-center text-3xl font-bold py-10">
        Hello {params.get('name') ?? 'World'}
      </h1>
      <Content />
    </>
  );
};

export default BasicHello;
