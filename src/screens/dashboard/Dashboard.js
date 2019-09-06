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

    return (
      /* Tela Principal */

      <View style={[modalStyle, modalBackgroundStyle]}>
        <View style={innerContainerTransparentStyle}>
          <Text>Informações</Text>

          {/*<View style={{padding:30, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            <ScrollView>*/}
                <ListView/>
            {/*</ScrollView>
          </View>*/}

          <Button title='close'
            onPress={TelaMapa.setModalVisible.bind(TelaMapa, false)}/>
        </View>
      </View>
    );
  }
}