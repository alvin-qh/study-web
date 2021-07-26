import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import Loading from '@components/loading';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { MainMenu } from './menu';

const Nav = () => {
  const history = useHistory();

  return (
    <Navbar fixedToTop={true} className="bp3-dark shadow-md">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="font-bold">Study React</Navbar.Heading>
        <Navbar.Divider />
        <Button icon="home" text="Home" onClick={() => history.push('/')} className="focus:outline-none" />
        <Popover2
          interactionKind="hover"
          content={MainMenu()}
          placement="bottom-start"
          minimal={true}>
          <Button icon="code" text="Basic" />
        </Popover2>
      </Navbar.Group>
    </Navbar>
  )
}

const Body = () => {
  const Home = lazy(() => import(/* webpackChunkName: "home" */ "@pages/home"));
  const BasicHello = lazy(() => import(/* webpackChunkName: "basic-hello" */ "@pages/basic/hello"));
  const BasicComponent = lazy(() => import(/* webpackChunkName: "basic-component" */ "@/pages/basic/component"));
  const BasicState = lazy(() => import(/* webpackChunkName: "basic-state" */ "@pages/basic/state"));
  const BasicEvent = lazy(() => import(/* webpackChunkName: "basic-state" */ "@pages/basic/evnet"));
  const BasicCondition = lazy(() => import(/* webpackChunkName: "basic-condition" */ "@/pages/basic/condition"));
  const BasicLoop = lazy(() => import(/* webpackChunkName: "basic-loop" */ "@pages/basic/loop"));

  return (
    <div
      className="container mx-auto bg-gradient-to-b from-gray-100 to-gray-150 px-4 py-14 border-gray-600 shadow-lg min-h-screen">
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/basic/hello" component={BasicHello} />
          <Route path="/basic/component" component={BasicComponent} />
          <Route path="/basic/state" component={BasicState} />
          <Route path="/basic/event" component={BasicEvent} />
          <Route path="/basic/condition" component={BasicCondition} />
          <Route path="/basic/loop" component={BasicLoop} />
        </Switch>
      </Suspense>
    </div>
  )
}

const App = () => (
  <Router>
    <div className="main">
      <Nav />
      <Body />
    </div>
  </Router>
);

export default App;
