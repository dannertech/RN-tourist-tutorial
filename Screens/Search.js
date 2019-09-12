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
                <View style={styles.flowRight}>
                <TextInput placeholder="Search" style={styles.searchBar}/>
                <Button 
                title="Go"
                onPress={() => {}}
            color='#48BBEC'
                />
                </View>
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
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    }
})