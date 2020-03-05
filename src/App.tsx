import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import Camera from './components/Camera';
import Level from './components/Level';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen text-center">
        <h1 className="text-6xl font-bold text-white text-shadow-md">Camera studio</h1>
        <Camera />
        <Level />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
