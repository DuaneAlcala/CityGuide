import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';

import GuideHeaderButton from '../components/GuideHeaderButton';
import TrapCard from "../components/TrapCard";

const DiscoverScreen = props => {
  const traps = useSelector(state => state.trap.traps);

  return (
    <FlatList
      data={traps}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <TrapCard
          name={itemData.item.name}
          location={itemData.item.location}
          country={itemData.item.country}
          details={itemData.item.details}
          onSelect={() => {props.navigation.navigate('TrapDetail', {name: itemData.item.name, id: itemData.item.id})}}
        />
      )}
    />
  )
};

DiscoverScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Discover Tourist Traps',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={GuideHeaderButton}>
        <Item
          title='Add A Trap'
          iconName={'md-add'}
          onPress={() => {
            navigationData.navigation.navigate('AddTrap')
          }}/>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({

});

export default DiscoverScreen
