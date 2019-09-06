/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import {
  Provider
} from 'react-redux'
import ReduxThunk from 'redux-thunk';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import trapReducer from "./src/store/reducers/trapReducer";
import MainNavigator from "./src/navigators/MainNavigator";

const rootReducer = combineReducers({
  trap: trapReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  )
}
