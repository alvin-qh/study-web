import { configure, addDecorator } from '@storybook/react';

configure(require.context('../storybooks', true, /\.(js|tsx?)$/), module);
