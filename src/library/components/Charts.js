import React, { Component } from 'react';
import styles from 'styles/styles';

import {
  View,
  Text,
  Dimensions,
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
} from 'react-native-chart-kit'

export function LineChartMid (props){
    return (
      <View>
        <Text>
          Bezier Line Chart
        </Text>
        <LineChart
          data={{
            labels: ['Min','Mid','Max'],
            datasets: [{
              data: [
                12,
                (12+36)/2,
                36,
              ]
            }]
          }}
          width={Dimensions.get('window').width*0.7} // from react-native
          height={182}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'lightgray',
            backgroundGradientTo: 'silver',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 20) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 6,
            }
          }}
          bezier
          style={{
            marginVertical: 4,
            borderRadius: 6,
          }}
        />
      </View>
    );
  };
  
  export function LineChartMid1 (props){
    return (
      <Text style={styles.text}>
          {props.id}. {props.item.type}.
          {props.item.values.map((item,key) => ( 
            <Text key={key} style={styles.text}>
              {key}. {item.max}. {item.min}
            </Text>))
          }
      </Text>
    );
  };

  export class LineChartSingleValue extends Component{
    render(){
      return (
          <Text style={styles.text}>
              {this.props.id}. {this.props.item.type}. 
                {this.props.item.values.map((item,key) => ( 
                  <Text key={key} style={styles.text}>
                    {item.key}. {item.value}
                  </Text>))
                }
          </Text>
        );
      };
  };
  
  export function DognutChartMultipleValues (props){
    return (
      <Text style={styles.text}>
          {props.id}. {props.item.type}.
            {props.item.values.map((item,key) => ( 
              <Text key={key} style={styles.text}>
                {item.key}. {item.value}. {item.gas}
              </Text>))
            }
      </Text>
    );
  };
  


/*https://cmichel.io/charts-in-react-native-svg-and-d3-js
https://www.npmjs.com/package/react-native-chart-kit
https://www.npmjs.com/package/react-native-svg-charts
https://live.hopu.eu/#/dashboard/ies-felipe-de-borbon:SmartSpot
https://www.instamobile.io/react-native-tutorials/react-native-charts/
https://reactnativeexample.com/tag/chart/*/