/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import {store} from './src/redux/store';
import ScreensStack from './src/navigation';

YellowBox.ignoreWarnings(['Remote debugger']);
console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ScreensStack />
    </Provider>
  );
};
export default App;
