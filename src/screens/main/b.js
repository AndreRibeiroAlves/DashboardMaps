import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import MapView from 'react-native-maps';
import styles from 'styles/styles';
import Sensores from 'objects/Sensores';
import ListView from 'library/components/ListViewExpandable';
import MapViewMarker from 'library/components/MapViewMarker'
import MapStyle from './MapStyle'

export default class App extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;
    this.region = this.getInitialRegion();
    this._mapReady();

    /*this.onRegionChange = this.onRegionChange.bind(this);*/
  }

  _mapReady = () => {
    this.state.markers[0].mark.showCallout();
  };
  
  getInitialRegion() {
    return {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      } = this.state.markers[0];
  };

  /*onRegionChange(region) {
    this.setState({ region });
  }*/

  render() {
    return (

      /* Tela Principal */
      <View style={styles.container}>
        
        {/* Tela do Mapa */}
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
          onMapReady={this._mapReady}
        >

          {/* Markers do Mapa */}
          {this.state.markers.map(marker => (
            /*https://stackoverflow.com/questions/39654594/marker-click
              -event-on-react-native-maps-not-working-in-react-ios*/
              <MapViewMarker
                marker
                title={marker.title}
                description={marker.description}
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
              />
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

            const { latitude, longitude, mark } = this.state.markers[place];

            this.mapView.animateToCoordinate({
              latitude,
              longitude
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
            {/*<Text style={styles.description}>{ place.description }</Text>*/}
            {/*<ListView/>*/}
          </ScrollView>
        )) }

        </ScrollView>

      </View>
    );
  }
}