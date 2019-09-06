import React from "react";
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

import Constants from '../assets/Constants';

const GuideHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Constants.primary}
    />
  )
};

export default GuideHeaderButton;
