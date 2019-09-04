import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button} from 'react-native';
import { UrlTile } from 'react-native-maps';

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
          customMapStyle={MapStyle()}
          onMapReady={this._mapReady}
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
                coordinate={{
                  latitude: mar.latitude,
                  longitude: mar.longitude,
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
            <Button onPress={()=> this.props.navigation.navigate('Dashboard')} title='Dashboard' />
            {/*<Text style={styles.description}>{ place.description }</Text>*/}
            <ListView/>
          </ScrollView>
        )) }

        </ScrollView>

      </View>
    );
  }
}