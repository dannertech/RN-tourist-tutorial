import React, { Component } from 'react';
import { Text, TouchableHighlight, View, FlatList } from 'react-native';

export default class Results extends Component {
_keyExtractor = (item, index) => index;

_renderItem = () => {
    return(
        <TouchableHighlight>
            <View>
                <Text>{item.title}</Text>
            </View>
        </TouchableHighlight>
    )
}
    render(){
        return(
            <FlatList
            data={this.props.listings}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        )
    }
}