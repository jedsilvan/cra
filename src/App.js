import React from 'react';
import Provider from './context/Provider';
import Root from './layout';

function App() {
  return (
    <Provider>
        <Root />
    </Provider>
  );
}

export default App;
