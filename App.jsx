/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/appNavigation';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
