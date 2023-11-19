import { Router, useRoutes } from '@solidjs/router';
import { type JSX } from 'solid-js';

import Nav from '@/components/Nav';
import routes from '~solid-pages';

const App = (): JSX.Element => {
  const Routes = useRoutes(routes);

  return (
    <>
      <Router>
        <Nav />
        <div>
          <Routes />
        </div>
      </Router>
    </>
  );
};

export default App;
