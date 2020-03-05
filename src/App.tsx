import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import Camera from './components/Camera';
import Level from './components/Level';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen text-center">
        <h1 className="text-6xl font-bold text-white text-shadow-md">Camera studio</h1>
        <Camera />
        <Level />
        <div className="mt-4 text-white">
          Made with love with React + Tailwindcss
        </div>
      </div>
    </Provider>
  );
}

export default App;
