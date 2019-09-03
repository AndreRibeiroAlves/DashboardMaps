import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

export default class CustomDrawer extends Component{

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{width: '100%', height: 75, alignItems: 'center',
                      justifyContent: 'center', marginTop: 25}}>
          <Image source={require('library/img/perfil.png')} 
                 style={{width: 65, height:65}}/>
          <Text style={{color: '#FFF', marginTop: 10, fontSize: 17}}>
            Bem vindo!
          </Text>
        </View>

        <ScrollView style={{marginTop: 20 }}>
          <DrawerItems {...this.props} />
        </ScrollView>

          <View style={{marginTop: 20, width: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#24C2CB'}} 
                              underlayColor="transparent"
                              onPress={()=> { 
                                this.props.navigation.navigate('Contato') 
                              }}>
              <Text style={{margin: 10, color: '#FFF', textAlign: 'center'}}>
                Contato
              </Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}
