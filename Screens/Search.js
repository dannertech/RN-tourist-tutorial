import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, Button, ActivityIndicator, Image } from 'react-native';
import HouseImage from '../Images/tourist-home-image.png';


export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchString: 'london',
            isLoading: false,
            message: ''
        };
    }
    
    _onSearchTextChanged = (event) => {
        console.log('_onSearchTextChanged');
        this.setState({ searchString: event });
        console.log('Current: ' + this.state.searchString+', Next:' + event.nativeEvent.text);
    }

 _onSubmit = () => {
     //get search string 
    const searchString = this.state.searchString
     //add search string to url
    const query = 'https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=' + searchString;
     //perform fetch request
     fetch(query)
        .then((response) => response.json())
        .then(json => this._handleResponse(json.response))
        .catch(error =>
            this.setState({
                isLoading: false,
                message: 'Something bad happened' + error
            })
        )
 
 
    }
    _onSubmit = () => {
        this.setState({ isLoading: true })
        const query = 'https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=' + this.state.searchString;
        fetch(query)
         .then(response => response.json())
         .then(json => this._handleResponse(json.response))
         .catch(error =>
             this.setState({
                 isLoading: false,
                 message: 'Something bad happened' + error
             })
             )
             
    }


   _handleResponse = (response) => {
       this.setState({ isLoading: false, message: ''})
       if (response.application_response_code.substr(0,1) == '1'){
           console.log('Properties found: ' + response.listings.length);

       } else {
           this.setState({ message: 'Location not recognized; please try again.'})
       }
   }

    render(){
        console.log('SearchPage.render');  
        const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null ;                                 
        return(
            <View>
                <Image source={HouseImage}></Image>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name or postcode</Text>
                <View style={styles.flowRight}>
                <TextInput placeholder="Search via name or postcode" style={styles.searchBar} value={this.state.searchString} onChange={this._onSearchTextChanged}/>
                <Button 
                title="Go"
                onPress={this._onSubmit}
            color='#48BBEC'
                />
                </View>
                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>
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