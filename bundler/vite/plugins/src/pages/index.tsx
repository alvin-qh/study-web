import { type JSX, createSignal } from 'solid-js';

/* eslint-disable import/no-absolute-path */
import viteLogo from '/vite.svg';
import solidLogo from '@/assets/solid.svg';

import css from './index.module.scss';

const Home = (): JSX.Element => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class={css.logo} alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class={`${css.logo} ${css.solid}`} alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class={css.card}>
        <button onClick={() => setCount(c => c + 1)}>
          count is
          {' '}
          {count()}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p class={css.readTheDocs}>
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
};

export default Home;
