import { IconName, MaybeElement, Menu, MenuItem } from "@blueprintjs/core";
import React, { useMemo } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

class MenuItemData {
  readonly icon: IconName | MaybeElement;
  readonly text: string;
  readonly path: string;

  constructor(icon: IconName | MaybeElement, text: string, path: string) {
    this.icon = icon;
    this.text = text;
    this.path = path;
  }
}

class MenuData {
  readonly items: Array<MenuItemData>;
  private readonly basePath: string;

  constructor(basePath: string, items: Array<MenuItemData>) {
    if (basePath.endsWith("/")) {
      basePath = basePath.substring(0, basePath.length - 1);
    }
    this.basePath = basePath;
    this.items = items;
  }

  render(navigate: NavigateFunction): React.JSX.Element {
    return (
      <Menu>
        {
          this.items.map(item => (
            <MenuItem
              icon={item.icon}
              text={item.text}
              onClick={() => navigate(`${this.basePath}${item.path}`)}
              key={item.text}
            />
          ))
        }
      </Menu>
    );
  }
}

export const BasicMenu = () => {
  const navigate = useNavigate();

  const menu = useMemo(() => (
    new MenuData("/basic", [
      new MenuItemData("book", "Hello World", "/hello?name=Alvin"),
      new MenuItemData("box", "Component", "/component"),
      new MenuItemData("star", "State", "/state"),
      new MenuItemData("archive", "Event", "/event"),
      new MenuItemData("fork", "Condition", "/condition"),
      new MenuItemData("repeat", "Loop", "/loop"),
      new MenuItemData("upload", "State Up", "/state-up"),
    ]).render(navigate)
  ), [navigate]);

  return menu;
};

export const HookMenu = () => {
  const navigate = useNavigate();

  const menu = useMemo(() => (
    new MenuData("/hook", [
      new MenuItemData("unresolve", "Preview", "/preview"),
      new MenuItemData("right-join", "State", "/state"),
      new MenuItemData("left-join", "Effect", "/effect"),
      new MenuItemData("manually-entered-data", "Context", "/context"),
      new MenuItemData("send-to-graph", "Reducer", "/reducer"),
      new MenuItemData("chevron-backward", "Callback", "/callback"),
      new MenuItemData("history", "Memo", "/memo"),
      new MenuItemData("flow-end", "Ref", "/ref"),
      new MenuItemData("repeat", "Imperative Handle", "/imperative-handle"),
      new MenuItemData("control", "Layout Effect", "/layout-effect"),
      new MenuItemData("series-configuration", "Custom", "/custom"),
    ]).render(navigate)
  ), [navigate])

  return menu;
}

export const ReduxMenu = () => {
  const navigate = useNavigate();

  const menu = useMemo(() => (
    new MenuData("/redux", [
      new MenuItemData("path", "Basic", "/basic"),
      new MenuItemData("wrench", "Toolkit", "/toolkit"),
      new MenuItemData("inheritance", "Middleware", "/middleware"),
    ]).render(navigate)
  ), [navigate])

  return menu;
}
