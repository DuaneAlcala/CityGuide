import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Constants from "../assets/Constants";
import DiscoverScreen from "../screens/DiscoverScreen";
import AddTrapScreen from "../screens/AddTrapScreen";
import TrapDetailScreen from "../screens/TrapDetailScreen";

const MainNavigator = createStackNavigator(
  {
    Discover: DiscoverScreen,
    AddTrap: AddTrapScreen,
    TrapDetail: TrapDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Constants.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Constants.primary
    }
  }
);

export default createAppContainer(MainNavigator)
