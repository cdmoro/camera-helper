import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import Camera from './components/Camera';
import Footer from './components/Footer';
import Controls from './components/Controls';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen text-center">
        <h1 className="text-6xl font-bold text-white text-shadow-md mb-3">Exposure triangle for dummies</h1>
        <Camera />
        <Controls />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
