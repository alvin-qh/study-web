import { Alignment, Button, Navbar, Popover } from '@blueprintjs/core';
import { type JSX, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Loading from './components/loading';
import { BasicMenu, HookMenu, ReduxMenu } from './menu';

const Nav = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Navbar fixedToTop={true} className="bp3-dark shadow-md">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="font-bold">Study React</Navbar.Heading>
        <Navbar.Divider />
        <Button icon="home" text="Home" onClick={() => { navigate('/'); }} className="focus:outline-none" />
        <Navbar.Divider />
        <Popover
          interactionKind="hover"
          content={<BasicMenu />}
          placement="bottom-start"
          minimal={true}>
          <Button
            icon="code"
            text="Basic"
          />
        </Popover>
        <Popover
          interactionKind="hover"
          content={<HookMenu />}
          placement="bottom-start"
          minimal={true}>
          <Button
            icon="ungroup-objects"
            text="Hook"
          />
        </Popover>
        <Popover
          interactionKind="hover"
          content={<ReduxMenu />}
          placement="bottom-start"
          minimal={true}>
          <Button
            icon="exchange"
            text="Redux"
          />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
};

const Body = (): JSX.Element => {
  const Home = lazy(async () => await import(/* webpackChunkName: "home" */ './pages/home'));
  const BasicHello = lazy(async () => await import(/* webpackChunkName: "basic-hello" */ './pages/basic/hello'));
  const Basicelement = lazy(async () => await import(/* webpackChunkName: "basic-element" */ './pages/basic/component'));
  const BasicState = lazy(async () => await import(/* webpackChunkName: "basic-state" */ './pages/basic/state'));
  const BasicEvent = lazy(async () => await import(/* webpackChunkName: "basic-event" */ './pages/basic/event'));
  const BasicCondition = lazy(async () => await import(/* webpackChunkName: "basic-condition" */ './pages/basic/condition'));
  const BasicLoop = lazy(async () => await import(/* webpackChunkName: "basic-loop" */ './pages/basic/loop'));
  const BasicStateUp = lazy(async () => await import(/* webpackChunkName: "basic-state-up" */ './pages/basic/state-up'));

  const HookPreview = lazy(async () => await import(/* webpackChunkName: "hook-preview" */ './pages/hook/preview'));
  const HookState = lazy(async () => await import(/* webpackChunkName: "hook-state" */ './pages/hook/state'));
  const HookEffect = lazy(async () => await import(/* webpackChunkName: "hook-effect" */ './pages/hook/effect'));
  const HookContext = lazy(async () => await import(/* webpackChunkName: "hook-context" */ './pages/hook/context'));
  const HookReducer = lazy(async () => await import(/* webpackChunkName: "hook-reducer" */ './pages/hook/reducer'));
  const HookCallback = lazy(async () => await import(/* webpackChunkName: "hook-callback" */ './pages/hook/callback'));
  const HookMemo = lazy(async () => await import(/* webpackChunkName: "hook-memo" */ './pages/hook/memo'));
  const HookRef = lazy(async () => await import(/* webpackChunkName: "hook-ref" */ './pages/hook/ref'));
  const HookImperativeHandle = lazy(async () => await import(/* webpackChunkName: "hook-imperative-handle" */ './pages/hook/imperative-handle'));
  const HookLayoutEffect = lazy(async () => await import(/* webpackChunkName: "hook-layout-effect" */ './pages/hook/layout-effect'));
  const HookCustom = lazy(async () => await import(/* webpackChunkName: "hook-custom" */ './pages/hook/custom'));

  const ReduxBasic = lazy(async () => await import(/* webpackChunkName: "redux-basic" */ './pages/redux/basic'));
  const ReduxToolkit = lazy(async () => await import(/* webpackChunkName: "redux-toolkit" */ './pages/redux/toolkit'));
  const Middleware = lazy(async () => await import(/* webpackChunkName: "redux-middleware" */ './pages/redux/middleware'));

  return (
    <div
      className="container mx-auto bg-gradient-to-b from-gray-100 to-gray-150 px-4 py-14 border-gray-600 shadow-lg min-h-screen">
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/basic/hello" element={<BasicHello />} />
          <Route path="/basic/component" element={<Basicelement />} />
          <Route path="/basic/state" element={<BasicState />} />
          <Route path="/basic/event" element={<BasicEvent />} />
          <Route path="/basic/condition" element={<BasicCondition />} />
          <Route path="/basic/loop" element={<BasicLoop />} />
          <Route path="/basic/state-up" element={<BasicStateUp />} />

          <Route path="/hook/preview" element={<HookPreview />} />
          <Route path="/hook/state" element={<HookState />} />
          <Route path="/hook/effect" element={<HookEffect />} />
          <Route path="/hook/context" element={<HookContext />} />
          <Route path="/hook/reducer" element={<HookReducer />} />
          <Route path="/hook/callback" element={<HookCallback />} />
          <Route path="/hook/memo" element={<HookMemo />} />
          <Route path="/hook/ref" element={<HookRef />} />
          <Route path="/hook/imperative-handle" element={<HookImperativeHandle />} />
          <Route path="/hook/layout-effect" element={<HookLayoutEffect />} />
          <Route path="/hook/custom" element={<HookCustom />} />

          <Route path="/redux/basic" element={<ReduxBasic />} />
          <Route path="/redux/toolkit" element={<ReduxToolkit />} />
          <Route path="/redux/middleware" element={<Middleware />} />
        </Routes>
      </Suspense>
    </div>
  );
};

const App = (): JSX.Element => (
  <BrowserRouter>
    <div className="main">
      <Nav />
      <Body />
    </div>
  </BrowserRouter>
);

export default App;
