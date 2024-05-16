import { A } from '@solidjs/router';
import { type JSX } from 'solid-js';

import css from './Nav.module.scss';

const Nav = (): JSX.Element => (
  <ul class={css.pages}>
    <li><A href="/">Home</A></li>
    <li><A href="/About">About</A></li>
  </ul>
);

export default Nav;
