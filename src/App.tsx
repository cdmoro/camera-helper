import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux';

import Camera from './components/Camera';
import Footer from './components/Footer';
import Controls from './components/Controls';
import { ReactComponent as GithubLogo} from './assets/github.svg'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App h-screen text-center">
        <h1 className="text-6xl font-bold text-white text-shadow-md mb-3 font-dancing">
          The exposure triangle
        </h1>
        <Camera />
        <Controls />
        <Footer />
        <a 
          href="https://github.com/cdmoro/camera-helper-react" 
          className="github-corner" 
          aria-label="View source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo />
        </a>
      </div>
    </Provider>
  );
}

export default App;
