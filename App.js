import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from 'screens/main/Main';
import Dashboard from 'screens/dashboard/Dashboard'
/*import Contato from './src/ex';*/
import CustomDrawer from 'library/components/CustomDrawer';

const Navegador = createDrawerNavigator({
  Main: {
    screen: Main
  },
  Dashboard:{
    screen: Dashboard
  }
  /*ex: {
    screen: ex
  }*/
}/*,{
  contentComponent: CustomDrawer,
  initialRouteName: 'Main',
  drawerPosition: 'left',
  //drawerWidth: 150
  drawerBackgroundColor: '#373737',
  contentOptions:{
    activeTintColor: '#24C2CB',
    activeBackgroundColor: '#FFF',
    inactiveTintColor: '#FFF',
  }
  
}*/);

const AppContainer = createAppContainer(Navegador);

export default AppContainer;

/*https://riptutorial.com/react-native/example/29660/transparent-modal-example
https://expo.io/snacks/@react-navigation*/
