import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '@components/Loading';

const Home = lazy(() => import(/* webpackChunkName: "home" */ "@pages/Home"));

const App = () => (
  <Router>
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
