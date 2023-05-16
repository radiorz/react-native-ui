import * as React from 'react';

import { Provider, components, Dimension } from 'react-native-ui';

export default function App() {
  return (
    <Provider dimension={new Dimension()}>
      <components.Text />
    </Provider>
  );
}
