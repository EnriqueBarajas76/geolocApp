import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Location from'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

export default function App() {
  const [locacion, setLocacion] =useState({})

  const buscarLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return Alert.alert('No hay permisos para la geolocalización')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location)
    setLocacion(location)
  }
  useEffect(() => {
    buscarLocation()
  },[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
        {
          locacion.coords ?
          <Marker 
            coordinate={locacion.coords}
            title="Mi hubicación"
            description = 'Aquí estoy'
          />
          : null  
        }
            
      </MapView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
