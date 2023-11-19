import { type JSX } from 'react';
import { Link, Outlet } from 'react-router-dom';

// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';

import reactLogo from '../assets/react.svg';
import css from './Root.module.scss';

const Root = (): JSX.Element => (
  <>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className={css.logo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className={`${css.logo} ${css.react}`} alt="React logo" />
      </a>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
    <div>
      <Outlet />
    </div>
  </>
);

export default Root;
