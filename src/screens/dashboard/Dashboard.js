import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button, Modal} from 'react-native';

import styles from 'styles/styles';
import ListView from 'library/components/ListViewExpandable';

export default class Dashboard extends Component {
  constructor(){
    super();
  }

  render() {

    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    var modalStyle = {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      margin: 20,
      backgroundColor: '#ecf0f1',
    };
    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};

    TelaMapa = this.props.TelaMapa;
    const marker = this.props.marker;

    return (
      /* Tela Principal */

      <View style={[modalStyle, modalBackgroundStyle]}>
        <View style={innerContainerTransparentStyle}>
          <Text>Informações</Text>
          <Text>{marker}</Text>
          <ListView/>

          <Button title='close'
            onPress={TelaMapa.onCloseModal.bind(TelaMapa)}/>
        </View>
      </View>
    );
  }
}