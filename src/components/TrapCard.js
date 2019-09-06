import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TrapCard = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.cardItem}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name="md-pin" size={16} />
          <Text style={styles.location}>{props.location}, {props.country}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>{props.details}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  cardItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 125,
    margin: 20
  },
  icon: {
    height: 20
  },
  title: {
    fontSize: 24
  },
  container: {
    padding: 10
  },
  locationContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10
  },
  location: {
    fontSize: 14,
    marginLeft: 5
  }
});

export default TrapCard;
