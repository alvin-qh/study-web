import type React from 'react';
import { useState } from 'react';

import css from './JSX.module.scss';

function FunctionComponent(): React.JSX.Element {
  return (
    <div className={css['function-component']}>
      <span>Function Component</span>
    </div>
  );
}

export function JSXView(): React.JSX.Element {
  const VariableElement = (
    <div className={css['variable-element']}>
      <span>Variable Element</span>
    </div>
  );

  const [enable, setEnable] = useState<boolean>(true);

  return (
    <div className={css['basic-jsx']}>
      <FunctionComponent />

      <hr />

      {VariableElement}

      <hr />

      <div className={css.condition}>
        <label>
          <input type='checkbox' checked={enable} onChange={() => { setEnable(!enable); }} />
          <div>
            {enable ? 'Enabled' : 'Disabled'}
          </div>
        </label>
      </div>
    </div>
  );
}
