import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import styles from 'styles/styles';

export default class Dashboard extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      /* Tela Principal */
      <View style={styles.container}>
        <Text>{'OLÁ'}</Text>
      </View>
    );
  }
}