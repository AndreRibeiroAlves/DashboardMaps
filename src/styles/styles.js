import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  
    modalBackgroundStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      margin: 20,
      backgroundColor: '#ecf0f1',
    },

    innerContainerTransparentStyle: {
      backgroundColor: '#fff',
      padding: 20,
    },

    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  
    mapView: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  
    placesContainer: {
      width: '100%',
      maxHeight: 82,
    },
  
    place: {
      width: (width-40),
      maxHeight: 200,
      backgroundColor: '#FFF',
      marginHorizontal: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 20,
    },
  
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
  
    description: {
      color: '#999',
      fontSize: 12,
      marginTop: 5,
    },

    iconStyle: {

      width: 30,
      height: 30,
      justifyContent: 'flex-end',
      alignItems: 'center',
      tintColor: '#fff'

    },

    containerList: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: '#F5FCFF',
    },
    
    topHeading: {
      paddingLeft: 10,
      fontSize: 20,
    },

    header: {
      padding: 10,
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0091EA'
    },

    headerText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
    },

    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },

    text: {
      fontSize: 16,
      color: '#000000',
      padding: 10,
    },

    content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },

    /*icon_circle: {
      width: 30,
      height: 30,
      borderRadius: 50,
      marginLeft: 16,
      marginTop: 16,
      background: rgba(255,255,255,.7),
      alignItems: 'center',
      float: left,
    },*/

  });

  export default styles;