import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button, Modal} from 'react-native';
import { UrlTile } from 'react-native-maps';

import MapView from 'react-native-maps';
import styles from 'styles/styles';
import Sensores from 'objects/Sensores';
import ListView from 'library/components/ListViewExpandable';
import MapViewMarker from 'library/components/MapViewMarker'
import MapStyle from './MapStyle'

class ModalMap extends Component{

  render(){  

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

    return(
      <Modal
        animationType='fade'
        transparent={true}
        visible={TelaMapa.state.modalVisible}
        onRequestClose={() => TelaMapa.setModalVisible(false)}
        >

        <View style={[modalStyle, modalBackgroundStyle]}>
          <View style={innerContainerTransparentStyle}>
            <Text>Informações</Text>
            <ListView/>
            <Button title='close'
              onPress={TelaMapa.setModalVisible.bind(TelaMapa, false)}/>
          </View>
        </View>

      </Modal>
    );
  }
}

export default class App extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;
    this.state.modalVisible = false;
    this.region = this.getInitialRegion();

    /*this.onRegionChange = this.onRegionChange.bind(this);*/
  }
  
  _handleButtonPress = () => {
    this.setModalVisible(true);
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  
  getInitialRegion() {
    const { latitude, longitude } = this.state.markers[0];
    return {
        latitude,
        longitude,
        latitudeDelta: 0.0542,
        longitudeDelta: 0.0331,
      };
  };

  /*onRegionChange(region) {
    this.setState({ region });
  }*/

  render() {
    const { latitude, longitude } = this.state.markers[0];

    return (

      /* Tela Principal */
      <View style={styles.container}>
        
        {/* Tela do Mapa */
        /* https://github.com/react-native-community/react-native-maps/blob/master/README.md */}
        <MapView
          ref={map => this.mapView = map}
          
          /*onRegionChange={this.onRegionChange}*/

          initialRegion={this.region}

          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={true}
          zoomEnabled={true}
          showsPointsOfInterest={false}
          showBuildings={false}
          customMapStyle={MapStyle()}
        >

          {/* Markers do Mapa */}
          {this.state.markers.map(mar => (
            /*https://stackoverflow.com/questions/39654594/marker-click
              -event-on-react-native-maps-not-working-in-react-ios*/
              
              <MapViewMarker
                marker={mar}
                title={mar.title}
                description={mar.description}
                key={mar.id}
                event={this._handleButtonPress}
                coordinate={{
                  latitude: mar.latitude,
                  longitude: mar.longitude,
                }}
              />
          ))}

        </MapView>

        <View style={styles.container}>
          <ModalMap TelaMapa={this}/>
        </View>

      </View>
    );
  }
}