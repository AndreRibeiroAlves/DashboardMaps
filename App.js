import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from 'screens/main/Main';
import Dashboard from 'screens/dashboard/Dashboard'
import CustomDrawer from 'library/components/CustomDrawer';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from 'screens/Reducers'

let store = createStore(Reducers);

const Navegador = createDrawerNavigator({
  Main: {
    screen: Main
  },
  Dashboard:{
    screen: Dashboard
  }
});

const AppContainer = createAppContainer(Navegador);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
          <AppContainer/>
      </Provider>
    );
  }
}

/*https://riptutorial.com/react-native/example/29660/transparent-modal-example
https://expo.io/snacks/@react-navigation*/
