import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, Button, TouchableOpacity, Image} from 'react-native';

import styles from 'styles/styles';
import Sensores from 'objects/Sensores'
import ListView from 'library/components/ListViewExpandable';
import { connect } from 'react-redux'
import { closeModal } from '../ModalActions'

import {LineChartMid,LineChartSingleValue,DognutChartMultipleValues} from 'library/components/Charts';

export class Dashboard extends Component {
  constructor(){
    super();
    this.state = new Sensores().estado;

  }

  render() {

    const selectedMarker = this.state.markers[this.props.selectedMarkerID-1];
    return (
      /* Tela Principal */

      <View style={[styles.modalStyle]}>
        <ScrollView style={styles.innerContainerTransparentStyle}>

          <Text style={styles.topHeading,{color:'white', fontWeight: 'bold',}}>Informações</Text>          
          {CONTENT.map((item, key) => (

          <ItemComponent
            key={item.category_name}
            item={item}
          />
          
          ))}
        </ScrollView>
        <Button title='close'
          onPress={()=>this.props.closeModal()}/>
      </View>
    );
  }
}

class ItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
  }

  render() {
    return (
        <View style={{paddingBottom:20}}>
          
          {/*Header*/}
          <TouchableOpacity>
            <Text style={styles.headerText}>{this.props.item.category_name}</Text>
          </TouchableOpacity>

          <ScrollView>

            {/*Conteudo do ListView*/}
            {this.props.item.items.map((item, key) => (

              <TouchableOpacity
                key={key}
                style={styles.contentList}
                onPress={() => alert('Id: ' + item.id + ' type: ' + item.type)}>

                {  this.props.item.type == 1 ? 
                      <LineChartMid id={key} item={item}/>
                    : this.props.item.type == 2 ?
                      <DognutChartMultipleValues id={key} item={item}/>
                    : this.props.item.type == 3 ?
                      <LineChartSingleValue id={key} item={item}/>
                    : 
                      <Text style={styles.text}>
                        {key}. {item.type}
                      </Text>
                  } 

                <View style={styles.separator} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
    );
  }
}

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Temperatura',
    type: 1,
    image_link: 'https://live.hopu.eu/images/icon-sensor-noise.png',
    items: [
      { id: 1, type: 'line_chart', values: [{id: 1, max: 25.47, min: 24.02}] }
    ],
  },
  {
    isExpanded: false,
    category_name: 'Humidade',
    type: 1,
    image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
    items: [
      { id: 1, type: 'line_chart', values: [{id: 1, max: 64.45, min: 50.47}] }
    ],
  },
  {
    isExpanded: false,
    category_name: 'Gases',
    type: 2,
    image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
    items: [
      { id: 1, type: 'dognut_chart', values: [
          {id: 1, value: 56.45, gas: 'O3'},
          {id: 2, value: 19.36, gas: 'NO2'},
          {id: 3, value: 51.44, gas: 'SO2'},
          {id: 4, value: 9.87, gas: 'CO'}
        ]
      }
    ],
  },
  {
    isExpanded: false,
    category_name: 'Ruído',
    type: 3,
    image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
    items: [
      { id: 1, type: 'line_chart', values: [{id: 1, value: 15.44}] }
    ],
  },
  {
    isExpanded: false,
    category_name: 'Bateria',
    type: 3,
    image_link: 'https://live.hopu.eu/images/icon-sensor-crowd_monitoring.png',
    items: [
      { id: 1, type: 'line_chart', values: [{id: 1, value: 10}] }
    ],
  },
];


const mapStateToProps = (state) => {
    return{
      selectedMarkerID: state.modal.selectedMarkerID,
      modalEnabled: state.modal.modalEnabled,
    };
};

const DashboardConnect = connect(mapStateToProps,{closeModal})(Dashboard);

export default DashboardConnect;