import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Map = props => {

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View style={styles.button}>
        <Button title="Locate Tourist Trap" onPress={() => {}} />
      </View>
    </View>
  )
};

styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    marginVertical: 20,
  },
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  }
});


export default Map;
