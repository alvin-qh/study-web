import { Alignment, Navbar } from '@blueprintjs/core';
import Loading from '@components/Loading';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Home = lazy(() => import(/* webpackChunkName: "home" */ "@pages/Home"));

const App = () => (
  <div className="main">
    <Navbar fixedToTop={true} className="bp3-dark shadow-md">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="font-bold">Study React</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
    <div className="container mx-auto bg-gradient-to-b from-gray-100 to-gray-150 px-4 py-14 border-gray-600 shadow-lg min-h-screen">
      <Router>
        <Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  </div>
);

export default App;
