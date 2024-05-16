import { type JSX, useState } from 'react';

import css from './Home.module.scss';

export declare interface HomeProps {
  name?: string
}

const Home = (props: HomeProps): JSX.Element => {
  const { name = 'Alvin' } = props;
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{name}</h1>
      <div className={css.card}>
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={css['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
