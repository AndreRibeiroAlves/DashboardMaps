import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Modal} from 'react-native';

import { Callout } from 'react-native-maps';

import styles from 'styles/styles';
import MapView from 'react-native-maps';
import Dashboard from 'screens/dashboard/Dashboard';

export default class MapViewMarker extends Component{

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
        return(
            <View>

                <MapView.Marker
                    ref={mark => this.marker.mark = mark}
                    title={this.title}
                    description={this.description}
                    key={this.id}
                    coordinate={this.coordinate}
                    onCalloutPress={this._handleButtonPress}
                    /*image={require('library/img/perfil.png')}*/
                >
                    {/*<MapView.Callout tooltip style={styles.customView}>
                        <View >
                            <Text>{this.title}{"\n"}{this.description}</Text>
                            <Text>{this.title}{"\n"}{this.description}</Text>
                        </View>
                    </MapView.Callout>*/}
                </MapView.Marker>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}
                    >
                    <Dashboard TelaMapa={this} />

                </Modal>

            </View>
        )
    }
}