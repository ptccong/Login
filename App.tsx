import { createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';
import HomeScreen from './component/HomeScreen';
import ProfileScreen from './component/ProfileScreen';
import register from './component/register.js';
import forgetPassWord from './component/forgetPassWord.js';

const MainNavigator = createStackNavigator({
  LOGIN: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  register:{screen: register},
  forgetPassWord:{screen :forgetPassWord}

});
 
const App = createAppContainer(MainNavigator);

export default App;
