import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions} from 'react-native';

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
        this.place = this.props.place;
        return(
            <MapView.Marker
                ref={mark => this.place.mark = mark}
                title={this.title}
                description={this.description}
                key={this.id}
                coordinate={this.coordinate}
            />
        )
    }
}