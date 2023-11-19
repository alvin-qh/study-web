import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { Popover } from "@blueprintjs/core";
import Loading from "./components/loading";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { BasicMenu, HookMenu, ReduxMenu } from "./menu";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navbar fixedToTop={true} className="bp3-dark shadow-md">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="font-bold">Study React</Navbar.Heading>
        <Navbar.Divider />
        <Button icon="home" text="Home" onClick={() => navigate("/")} className="focus:outline-none" />
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
  )
}

const Body = () => {
  const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/home"));
  const BasicHello = lazy(() => import(/* webpackChunkName: "basic-hello" */ "./pages/basic/hello"));
  const Basicelement = lazy(() => import(/* webpackChunkName: "basic-element" */ "./pages/basic/component"));
  const BasicState = lazy(() => import(/* webpackChunkName: "basic-state" */ "./pages/basic/state"));
  const BasicEvent = lazy(() => import(/* webpackChunkName: "basic-event" */ "./pages/basic/event"));
  const BasicCondition = lazy(() => import(/* webpackChunkName: "basic-condition" */ "./pages/basic/condition"));
  const BasicLoop = lazy(() => import(/* webpackChunkName: "basic-loop" */ "./pages/basic/loop"));
  const BasicStateUp = lazy(() => import(/* webpackChunkName: "basic-state-up" */ "./pages/basic/state-up"));

  const HookPreview = lazy(() => import(/* webpackChunkName: "hook-preview" */ "./pages/hook/preview"));
  const HookState = lazy(() => import(/* webpackChunkName: "hook-state" */ "./pages/hook/state"));
  const HookEffect = lazy(() => import(/* webpackChunkName: "hook-effect" */ "./pages/hook/effect"));
  const HookContext = lazy(() => import(/* webpackChunkName: "hook-context" */ "./pages/hook/context"));
  const HookReducer = lazy(() => import(/* webpackChunkName: "hook-reducer" */ "./pages/hook/reducer"));
  const HookCallback = lazy(() => import(/* webpackChunkName: "hook-callback" */ "./pages/hook/callback"));
  const HookMemo = lazy(() => import(/* webpackChunkName: "hook-memo" */ "./pages/hook/memo"));
  const HookRef = lazy(() => import(/* webpackChunkName: "hook-ref" */ "./pages/hook/ref"));
  const HookImperativeHandle = lazy(() => import(/* webpackChunkName: "hook-imperative-handle" */ "./pages/hook/imperative-handle"));
  const HookLayoutEffect = lazy(() => import(/* webpackChunkName: "hook-layout-effect" */ "./pages/hook/layout-effect"));
  const HookCustom = lazy(() => import(/* webpackChunkName: "hook-custom" */ "./pages/hook/custom"));

  const ReduxBasic = lazy(() => import(/* webpackChunkName: "redux-basic" */ "./pages/redux/basic"));
  const ReduxToolkit = lazy(() => import(/* webpackChunkName: "redux-toolkit" */ "./pages/redux/toolkit"));
  const Middleware = lazy(() => import(/* webpackChunkName: "redux-middleware" */ "./pages/redux/middleware"));

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
  )
}

const App = () => (
  <BrowserRouter>
    <div className="main">
      <Nav />
      <Body />
    </div>
  </BrowserRouter>
);

export default App;
