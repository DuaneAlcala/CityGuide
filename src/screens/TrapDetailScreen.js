import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import {useSelector} from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const TrapDetailScreen = props => {
  const id = props.navigation.getParam('id');
  const trap = useSelector(state => state.trap.traps.find((t) => t.id === id));

  let lat = trap.lat;
  let long = trap.long;

  const mapCoords = {
    initialCoordinates: {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0121
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.location}>
        <Icon name="md-pin" size={24}/>
        <Text style={styles.locationDetail}>{trap.location}, {trap.country}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Details</Text>
        <Text>{trap.details}</Text>
      </View>

      <View style={styles.mapView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={mapCoords.initialCoordinates}
        >
        <Marker
          coordinate={
            {
              latitude: lat,
              longitude: long
            }
          }
        />
        </MapView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    margin: 20
  },
  location: {
    flexDirection: 'row'
  },
  locationDetail: {
    marginLeft: 10,
    fontSize: 18
  },
  descriptionTitle: {
    fontSize: 18,
    marginBottom: 5
  },
  description: {
    marginTop: 25
  },
  mapView: {
    width: "100%",
    alignItems: "center",
    marginTop: 30
  },
  map: {
    width: "90%",
    height: 250
  }
});

TrapDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('name')
  };
};

export default TrapDetailScreen;
