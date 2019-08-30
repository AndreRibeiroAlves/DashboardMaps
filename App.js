import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import MapView from 'react-native-maps';
import styles from './styles/styles';
import Sensores from './Sensores';

export default class App extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;
  }

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={styles.container}>
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
          { this.state.places.map(place => (
            <MapView.Marker
              ref={mark => place.mark = mark}
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
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const place = (e.nativeEvent.contentOffset.x > 0)
              ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, mark } = this.state.places[place];

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 500);

            setTimeout(() => {
              mark.showCallout();
            }, 500)
          }}
        >
          { this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text style={styles.title}>{ place.title }</Text>
              <Text style={styles.description}>{ place.description }</Text>
            </View>
          )) }
        </ScrollView>
      </View>
    );
  }
}