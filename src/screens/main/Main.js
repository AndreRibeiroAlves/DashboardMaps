import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button, Modal} from 'react-native';
import { UrlTile } from 'react-native-maps';

import MapView from 'react-native-maps';
import styles from 'styles/styles';
import Sensores from 'objects/Sensores';
import ListView from 'library/components/ListViewExpandable';
import MapViewMarker from 'library/components/MapViewMarker'
import MapStyle from 'styles/MapStyle'
import Dashboard from '../dashboard/Dashboard';

import { connect } from 'react-redux'
import { closeModal,changeMarker,openModal } from '../ModalActions'

export class Main extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;
    this.region = this.getInitialRegion();

    /*this.onRegionChange = this.onRegionChange.bind(this);*/
  }
  
  _mapReady = () => {
    this.state.markers[0].mark.showCallout();
  };
  
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
          onMapReady={this._mapReady}
          customMapStyle={MapStyle()}
        >

          {/* Markers do Mapa */}
          {this.state.markers.map(mar => (
            /*https://stackoverflow.com/questions/39654594/marker-click
              -event-on-react-native-maps-not-working-in-react-ios*/
              
              <MapView.Marker
                ref={mark => mar.mark = mark}
                title={mar.title}
                description={mar.description}
                key={mar.id}
                coordinate={{
                  latitude: mar.latitude,
                  longitude: mar.longitude,
                }}
                parent={mar.parent}
                onCalloutPress={()=>this.props.openModal(mar.id)}
                onPress={()=>this.props.changeMarker(mar.id)}
              >
                  
              </MapView.Marker>
          ))}

        </MapView>
        
        {/*Painel Inferior da tela*/}
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const place = (e.nativeEvent.contentOffset.x > 0)
              ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, latitudeDelta, longitudeDelta, mark } = this.state.markers[place];

            
            this.mapView.animateToRegion({
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta,
            }, 500);

            setTimeout(() => {
              mark.showCallout();
            }, 500)
          }}
        >
        { this.state.markers.map(marker => (
          /* Dashboard será alocado aqui */
          <ScrollView key={marker.id} style={styles.place}>
            <Text style={styles.title}>{ marker.title }</Text>
            <Text style={styles.title}>{ this.props.selectedMarkerID }</Text>
            {/*<Button onPress={()=> this.props.navigation.navigate('Dashboard') or <ModalMap/>} title='Dashboard' />*/}
            {/*<Text style={styles.description}>{ place.description }</Text>*/}
          </ScrollView>
        )) }

        </ScrollView>

          <Modal
            animationType='fade'
            transparent={true}
            visible={this.props.modalEnabled}
            onRequestClose={() => this.props.closeModal()}
            >
                <Dashboard TelaMapa={this} /*data={this.state.markers[0]}*//>

          </Modal>

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

const MainConnect = connect(mapStateToProps,{closeModal,changeMarker,openModal})(Main);

export default MainConnect;