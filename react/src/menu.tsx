import { Menu, MenuItem } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';

export const MainMenu = () => {
  const history = useHistory();

  return (
    <Menu>
      <MenuItem
        icon="book"
        text="Hello World"
        onClick={() => history.push("/basic/hello?name=Alvin")}
      />
      <MenuItem
        icon="box"
        text="Component"
        onClick={() => history.push("/basic/component")}
      />
      <MenuItem
        icon="star"
        text="State"
        onClick={() => history.push("/basic/state")}
      />
      <MenuItem
        icon="archive"
        text="Event"
        onClick={() => history.push("/basic/event")}
      />
      <MenuItem
        icon="fork"
        text="Condition"
        onClick={() => history.push("/basic/condition")}
      />
      <MenuItem
        icon="repeat"
        text="Loop"
        onClick={() => history.push("/basic/loop")}
      />
    </Menu>
  )
};
