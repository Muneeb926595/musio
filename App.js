/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';

import Store from './src/store/index.js';
import Application from './src/Application';

let App: () => React$Node = () => {
  return (
    <Provider store={Store}>
      <Application />
    </Provider>
  );
};

export default App;
