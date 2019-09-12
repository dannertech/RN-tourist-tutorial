/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import Tabs from './config/Navigation';
 import {StyleSheet} from 'react-native';

 export default class App extends Component {
   render(){
     return(
       <Tabs style={styles.container}/>
     )
   }
 }

 const styles = StyleSheet.create({
   container :{
     flex: 1,
   }
 })