
/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
//import basic react native components
import styles from './styles/styles'

class OItem extends Component {
    //Custom Component for the Expandable List
    constructor() {
      super();
    }
  
    render() {
      return (
        <View>
          {/*Header of the Expandable List Item*/}
          <TouchableOpacity
            activeOpacity={0.8}>
            <Text >{'Header'}</Text>
          </TouchableOpacity>
          <View>
            {/*Content under the header of the Expandable List Item*/}
            <TouchableOpacity
                key={1}
                style={styles.place}
                onPress={() => alert('Id: ' + 1 + ' val: ' + 2)}>
                <Text >
                  {1}. {2}
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

export default OItem