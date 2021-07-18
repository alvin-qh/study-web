import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadModule from './components/Load';

const App = () => (
  <Router>
    <Route path="/" component={loadModule(import(/* webpackChunkName: "home" */ "@pages/Home"))}>
    </Route>
  </Router>
);

export default App;
