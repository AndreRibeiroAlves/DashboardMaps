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

    const selectedMarker = this.state.markers[this.props.selectedMarkerID-1];
    return (
      /* Tela Principal */

      <View style={[styles.modalStyle, styles.modalBackgroundStyle]}>
        <View style={styles.innerContainerTransparentStyle}>
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