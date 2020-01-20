import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GameScreen from '../screens/GameScreen/GameScreen';
import SummaryScreen from '../screens/SummaryScreen/SummaryScreen';

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
