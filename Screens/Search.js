import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class Search extends Component {
    render(){
        return(
            <Text style={styles.description}>This is the Search page</Text>
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