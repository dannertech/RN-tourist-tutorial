

import ResultsScreen from '../Screens/Results';
import SearchScreen from '../Screens/Search';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const tabNavigator = createBottomTabNavigator({
    Search: SearchScreen,
    Results: ResultsScreen
})

const tabs = createAppContainer(tabNavigator);

export default tabs;