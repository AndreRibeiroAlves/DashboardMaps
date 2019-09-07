import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button, Modal} from 'react-native';

import styles from 'styles/styles';
import ListView from 'library/components/ListViewExpandable';
import { connect } from 'react-redux'
import { closeModal } from '../ModalActions'

export class Dashboard extends Component {
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
          <Text>{this.props.selectedMarkerID}</Text>

          {/*<View style={{padding:30, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            <ScrollView>*/}
                <ListView/>
            {/*</ScrollView>
          </View>*/}

          {/*<Button title='close'
            onPress={this.props.closeModal()}/>*/}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return{
      selectedMarkerID: state.modal.selectedMarkerID,
      modalEnabled: state.modal.modalEnabled,
    };
};

const DashboardConnect = connect(mapStateToProps,{closeModal})(Dashboard);

export default DashboardConnect;