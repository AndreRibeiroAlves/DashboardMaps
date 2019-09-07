import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Modal} from 'react-native';

import { Callout } from 'react-native-maps';

import styles from 'styles/styles';
import MapView from 'react-native-maps';
import { connect } from 'react-redux'
import { openModal, changeMarker } from 'screens/ModalActions'

export class MapViewMarker extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.state.modalVisible = false;
    }
  
    _handleButtonPress = () => {
      this.setModalVisible(true);
    };
  
    setModalVisible = (visible) => {
      this.setState({modalVisible: visible});
    }

    render(){
        this.title = this.props.title;
        this.description = this.props.description;
        this.id = this.props.id;
        this.coordinate = this.props.coordinate;
        this.marker = this.props.marker;
        this.parent = this.props.parent;
        const key = this.id;
        return(
            <MapView.Marker
                ref={mark => this.marker.mark = mark}
                title={this.title}
                description={this.description}
                key={this.id}
                coordinate={this.coordinate}
                parent={this.parent}
                onCalloutPress={key => this.props.openModal(key)}
                onPress={key => this.props.changeMarker(key)}
                /*image={require('library/img/perfil.png')}*/
            >
                {/*<MapView.Callout tooltip style={styles.customView}>
                    <View >
                        <Text>{this.title}{"\n"}{this.description}</Text>
                        <Text>{this.title}{"\n"}{this.description}</Text>
        </View>
                </MapView.Callout>*/}
            </MapView.Marker>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      selectedMarkerID: state.modal.selectedMarkerID,
      modalEnabled: state.modal.modalEnabled,
    };
};

const MVConnect = connect(mapStateToProps,{openModal, changeMarker})(MapViewMarker);

export default MVConnect;