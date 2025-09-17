import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import AlertsScreen from '../screens/AlertsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Map: MapScreen,
  Alerts: AlertsScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(TabNavigator);