/* @refresh reload */
import './index.scss';

import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import routes from '~solid-pages';

import App from './App.tsx';

render(
  () => <Router root={App}>{routes}</Router>,
  document.getElementById('root')!
);
