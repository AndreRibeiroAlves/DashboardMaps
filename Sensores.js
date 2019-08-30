import React, { Component } from 'react';
import MapView from 'react-native-maps';

class Sensores extends Component{
     constructor(){
         super();
         this.state = {
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
     }
     render(){
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
     }
}

export default Sensores