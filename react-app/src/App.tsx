import { Alignment, Button, Menu, MenuItem, Navbar } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import Loading from '@components/loading';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';



const Nav = () => {
  const history = useHistory();

  const BasicMenu = (
    <Menu>
      <MenuItem
        icon="book"
        text="Hello World"
        onClick={() => history.push("/basic/hello")}
      />
    </Menu>
  );

  return (
    <Navbar fixedToTop={true} className="bp3-dark shadow-md">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="font-bold">Study React</Navbar.Heading>
        <Navbar.Divider />
        <Button
          className="bp3-minimal focus:outline-none"
          icon="home" text="Home"
          onClick={() => history.push("/")}
        />
        <Popover2
          interactionKind="hover"
          content={BasicMenu}
          placement="bottom-start">
          <Button
            className="bp3-minimal focus:outline-none"
            icon="code"
            text="Basic"
          />
        </Popover2>
      </Navbar.Group>
    </Navbar>
  )
}

const Body = () => {
  const Home = lazy(() => import(/* webpackChunkName: "home" */ "@pages/home"));
  const BasicHello = lazy(() => import(/* webpackChunkName: "basic-hello" */ "@pages/basic-hello"));

  return (
    <div
      className="container mx-auto bg-gradient-to-b from-gray-100 to-gray-150 px-4 py-14 border-gray-600 shadow-lg min-h-screen">
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/basic/hello">
            <BasicHello name="Alvin" />
          </Route>
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
