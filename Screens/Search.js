import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import HouseImage from '../Images/tourist-home-image.png';


export default class Search extends Component {
    
    render(){
        return(
            <View>
                <Image source={HouseImage}></Image>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name or postcode</Text>
                <TextInput placeholder="Search" style={styles.searchBar}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 25
    },
    searchBar: {
        textAlign: 'center',
        borderWidth: 5,
    }
})