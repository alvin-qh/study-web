import { type JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const App = (): JSX.Element => (
  <RouterProvider
    router={routes}
    fallbackElement={<p>Loading...</p>} />
);

export default App;
