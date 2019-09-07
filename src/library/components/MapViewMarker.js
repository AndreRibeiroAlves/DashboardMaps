import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

import { Callout } from 'react-native-maps';

import styles from 'styles/styles';
import MapView from 'react-native-maps';

export default class MapViewMarker extends Component{
    constructor(props){
        super(props);
    }
    render(){
        this.title = this.props.title;
        this.description = this.props.description;
        this.id = this.props.id;
        this.coordinate = this.props.coordinate;
        this.marker = this.props.marker;
        this.event = this.props.event;
        return(
            <MapView.Marker
                ref={mark => this.marker.mark = mark}
                title={this.title}
                description={this.description}
                key={this.id}
                coordinate={this.coordinate}
                onCalloutPress={this.event(this.id)}
                /*image={require('library/img/perfil.png')}*/
            >
                {/*<MapView.Callout tooltip style={styles.customView}>
                    <View >
                        <Text>{this.title}{"\n"}{this.description}</Text>
                        <Text>{this.title}{"\n"}{this.description}</Text>
        </View>
                </MapView.Callout>*/}
            </MapView.Marker>
        )
    }
}