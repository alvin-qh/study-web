import { type RouteSectionProps } from '@solidjs/router';
import { type JSX } from 'solid-js';

import Nav from '@/components/Nav.tsx';

const App = (props: RouteSectionProps): JSX.Element => (
  <>
    <Nav />
    <div>
      {props.children}
    </div>
  </>
);

export default App;
