import { Menu, MenuItem } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';

export const BasicMenu = () => {
  const push = useHistory().push;

  return (
    <Menu>
      <MenuItem
        icon="book"
        text="Hello World"
        onClick={() => push("/basic/hello?name=Alvin")}
      />
      <MenuItem
        icon="box"
        text="Component"
        onClick={() => push("/basic/component")}
      />
      <MenuItem
        icon="star"
        text="State"
        onClick={() => push("/basic/state")}
      />
      <MenuItem
        icon="archive"
        text="Event"
        onClick={() => push("/basic/event")}
      />
      <MenuItem
        icon="fork"
        text="Condition"
        onClick={() => push("/basic/condition")}
      />
      <MenuItem
        icon="repeat"
        text="Loop"
        onClick={() => push("/basic/loop")}
      />
      <MenuItem
        icon="upload"
        text="State Up"
        onClick={() => push("/basic/stateup")}
      />
    </Menu>
  )
};

export const HookMenu = () => {
  const push = useHistory().push;

  return (
    <Menu>
      <MenuItem
        icon="unresolve"
        text="Preview"
        onClick={() => push("/hook/preview")}
      />
      <MenuItem
        icon="right-join"
        text="State"
        onClick={() => push("/hook/state")}
      />
      <MenuItem
        icon="left-join"
        text="Effect Hook"
        onClick={() => push("/hook/effect-hook")}
      />
      <MenuItem
        icon="manually-entered-data"
        text="Effect Hook"
        onClick={() => push("/hook/hook-rule")}
      />
    </Menu>
  );
}
