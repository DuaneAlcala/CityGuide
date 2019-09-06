import React, {useState} from 'react';
import { View, FlatList, ScrollView, TextInput, Text, Button, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {HeaderButton} from "react-navigation-header-buttons";

import Constants from "../assets/Constants";
import Map from "../components/Map";
import * as trapActions from "../store/actions/trapActions";

const AddTrapScreen = props => {
  const dispatch = useDispatch();

  const [name, onNameChange] = useState('');
  const [details, onDetailChange] = useState('');
  const [location, onLocationChange] = useState('');
  const [country, onCountryChange] = useState('');

  const postTrap = () => {
    dispatch(trapActions.addTrap(new Date().toISOString(), 'u1', name, location, country, details, 37, -122))
    props.navigation.goBack();
  };

  return (
    <ScrollView>
    <View style={styles.main}>
      <View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.entry}
        onChangeText={(text) => onNameChange(text)}
      />
      </View>

      <View>
        <Text style={styles.label}>Details</Text>
        <TextInput
          style={styles.entry}
          numberOfLines={3}
          onChangeText={(text) => onDetailChange(text)}
        />
      </View>

      <View>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.entry}
          onChangeText={(text) => onLocationChange(text)}
        />
      </View>

      <View>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.entry}
          onChangeText={(text) => onCountryChange(text)}
        />
      </View>

      <View style={styles.mapContainer}>
        <Map />
      </View>

      <Button
        title="Post Trap"
        color={Constants.primary}
        onPress={() => {postTrap()}}
      />
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  main: {
    margin: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 10
  },
  entry: {
    marginBottom: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 4
  },
  mapContainer: {
    alignItems: "center"
  }
});

AddTrapScreen.navigationOptions = {
  headerTitle: 'Post A Tourist Trap'
};

export default AddTrapScreen;
