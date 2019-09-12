import React from 'react';

import ResultsScreen from './Screens/Results';
import SearchScreen from './Screens/Search';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
    Search: SearchScreen,
    Results: ResultsScreen,
  })
  
  
  const appContainer = createAppContainer(TabNavigator);

  export default appContainer;
