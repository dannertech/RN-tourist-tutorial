/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Text } from 'react-native';
import Results from './Screens/Results';
import Search from './Screens/Search';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render(){
    return(
      <Text>This is the Homepage!</Text>
    )
  }
}
