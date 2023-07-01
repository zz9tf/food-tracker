import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/AppNavigation'


import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
      <StatusBar style="auto" />
    </Provider>
  )
}

export default App;