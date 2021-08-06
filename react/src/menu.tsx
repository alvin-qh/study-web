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
        text="Effect"
        onClick={() => push("/hook/effect")}
      />
      <MenuItem
        icon="manually-entered-data"
        text="Context"
        onClick={() => push("/hook/context")}
      />
      <MenuItem
        icon="send-to-graph"
        text="Reducer"
        onClick={() => push("/hook/reducer")}
      />
      <MenuItem
        icon="chevron-backward"
        text="Callback"
        onClick={() => push("/hook/callback")}
      />
      <MenuItem
        icon="history"
        text="Memo"
        onClick={() => push("/hook/memo")}
      />
      <MenuItem
        icon="flow-end"
        text="Ref"
        onClick={() => push("/hook/ref")}
      />
      <MenuItem
        icon="series-configuration"
        text="Custom"
        onClick={() => push("/hook/custom")}
      />
    </Menu>
  );
}
