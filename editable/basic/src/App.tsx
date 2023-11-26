import { useRoutes } from "@solidjs/router";
import { type JSX } from "solid-js";

import ANav from "@/components/ANav";
import { menu } from "@/menu";
import { routes } from "@/routes";

import css from "./App.module.scss";

function App(): JSX.Element {
  const Routes = useRoutes(routes);

  return (
    <>
      <div class={css.container}>
        <div class={css["left-part"]}>
          <ANav menuItems={menu} />
        </div>
        <div class={css["right-part"]}>
          <div class={css["right-part-wrapper"]}>
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
