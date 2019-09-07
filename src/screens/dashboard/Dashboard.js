import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button,TouchableOpacity} from 'react-native';

import styles from 'styles/styles';
import Sensores from 'objects/Sensores'
import ListView from 'library/components/ListViewExpandable';
import { connect } from 'react-redux'
import { closeModal } from '../ModalActions'

export class Dashboard extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;

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

    const selectedMarker = this.state.markers[this.props.selectedMarkerID-1];
    return (
      /* Tela Principal */

      <View style={[modalStyle, modalBackgroundStyle]}>
        <View style={innerContainerTransparentStyle}>
          <Text>Informações</Text>
          <Text>{selectedMarker.title}</Text>

          {/*<View style={{padding:30, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            <ScrollView>*/}
                <ListView/>
            {/*</ScrollView>
          </View>*/}

          <Button title='close'
            onPress={()=>this.props.closeModal()}/>
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