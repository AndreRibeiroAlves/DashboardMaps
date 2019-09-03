import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import MapView from 'react-native-maps';
import styles from 'styles/styles';
import Sensores from 'objects/Sensores';
import ListView from 'library/components/ListViewExpandable';
import MapViewMarker from 'library/components/MapViewMarker'

export default class App extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;
  }

  _mapReady = () => {
    this.state.markers[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.markers[0];

    return (

      /* Tela Principal */
      <View style={styles.container}>
        
        {/* Tela do Mapa */}
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={true}
          zoomEnabled={true}
          showsPointsOfInterest={false}
          showBuildings={false}
          onMapReady={this._mapReady}
        >
          {/* Markers do Mapa */}
          { this.state.markers.map(place => (
            /*https://stackoverflow.com/questions/39654594/marker-click
              -event-on-react-native-maps-not-working-in-react-ios*/
            <MapViewMarker
              marker={place}
              title={place.title}
              description={place.description}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
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

            {/*setTimeout(() => {
              mark.showCallout();
            }, 500)*/}
          }}
        >
        { this.state.markers.map(place => (
          /* Dashboard será alocado aqui */
          
          <ScrollView key={place.id} style={styles.place}>
            <Text style={styles.title}>{ place.title }</Text>
            {/*<Text style={styles.description}>{ place.description }</Text>*/}
            <ListView/>
          </ScrollView>
        )) }

        </ScrollView>

      </View>
    );
  }
}