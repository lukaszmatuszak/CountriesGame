import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GameScreen from '../screens/HomeScreen/GameScreen';
import SummaryScreen from '../screens/HomeScreen/SummaryScreen';

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      Game: GameScreen,
      Summary: SummaryScreen
    },
    {
      initialRouteName: 'Home'
    }
  )
);

export default Navigation;
