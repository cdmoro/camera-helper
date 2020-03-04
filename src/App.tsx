import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import Camera from './components/Camera';
import Level from './components/Level';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen">
        <Camera />
        <Level />
      </div>
    </Provider>
  );
}

export default App;
