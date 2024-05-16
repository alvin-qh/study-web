import { A } from "@solidjs/router";
import { createEffect, createSignal, Index, type JSX, Show } from "solid-js";

import { type MenuItem } from "@/types";

import AIcon from "./AIcon";
import css from "./ANav.module.scss";

const AMenu = (props: {
  items: MenuItem[]
  visible?: boolean
}): JSX.Element => {
  const [visible, setVisible] = createSignal(true);

  createEffect(() => {
    setVisible(() => props.visible ?? true);
  });

  return (
    <ul classList={{
      [css["menu-block"]]: true,
      [css["menu-visible"]]: !visible()
    }}>
      <Index each={props.items ?? []}>
        {(item) => <AMenuItem item={item()} />}
      </Index>
    </ul>
  );
};

const AMenuItem = (props: {
  item: MenuItem
}): JSX.Element => {
  const { item } = props;

  const [folded, setFolded] = createSignal(true);

  const hasChildren = (item.children ?? false) as boolean;

  const onFoldClicked = (e: Event): void => {
    setFolded(prev => !prev);
  };

  return (
    <li>
      {((item.path ?? "").length > 0) && (<A href={item.path ?? ""}>{item.label}</A>)}
      {((item.path ?? "").length === 0) && (<span>{item.label}</span>)}
      <Show when={hasChildren}>
        <AMenu items={item.children!} visible={!folded()} />
        <div class={css["drop-icon"]} onClick={e => { onFoldClicked(e); }} aria-hidden="true">
          <AIcon name={folded() ? "caret-left" : "caret-down"} effect={true} />
        </div>
      </Show>
    </li>
  );
};

const ANav = (props: {
  menuItems: MenuItem[]
}): JSX.Element => {
  const { menuItems = [] } = props;

  return (
    <nav class={css.menu}>
      <div class={css.title}>功能列表</div>
      <AMenu items={menuItems} />
    </nav>
  );
};

export default ANav;
