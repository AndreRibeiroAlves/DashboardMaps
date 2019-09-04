import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import styles from 'styles/styles';
import ListView from 'library/components/ListViewExpandable';

export default class Dashboard extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      /* Tela Principal */
      <View style={{padding:30, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <ScrollView>
            <ListView/>
        </ScrollView>
      </View>
    );
  }
}