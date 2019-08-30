import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import MapView from 'react-native-maps';
import styles from './styles/styles'

export default class App extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Sensor 1',
        description: 'Detalhes',
        latitude: -27.2106710,
        longitude: -49.6362700,
      },
      {
        id: 2,
        title: 'Sensor 2',
        description: 'Detalhes',
        latitude: -27.2006710,
        longitude: -49.6382700,
      },
      {
        id: 3,
        title: 'Sensor 3',
        description: 'Detalhes',
        latitude: -27.2008710,
        longitude: -49.6332700,
      },
      {
        id: 4,
        title: 'Sensor 4',
        description: 'Detalhes',
        latitude: -27.2068710,
        longitude: -49.6285700,
      },
      {
        id: 5,
        title: 'Sensor 5',
        description: 'Detalhes',
        latitude: -27.2066710,
        longitude: -49.6364700,
      },
    ]
  };

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