import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import HouseImage from '../Images/tourist-home-image.png';


export default class Search extends Component {
    
    render(){
        return(
            <View>
                <Image source={HouseImage}></Image>
                <Text>Search for houses to buy!</Text>
                <Text>Search by place-name or postcode</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65
    }
})