import React, { Component } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    TextH1: {
      fontSize: 30,
      margin: 10,
      margin: 'auto',
    },
  });

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }
    componentDidMount() {
        this.getCountry()
    }
    getCountry = async () => {
        try {
            const result = await fetch(`http://restcountries.eu/rest/v2/all`)
            const countries = await result.json()
            this.setState({ countries })
        } catch (error) {
            console.error(error)
        }
    }
    
    renderItem({ item }) {
        console.log(item)
        return (
            <View style={styles.TextH1}>
                <Text>Country : {item.name}</Text>
                <Text>Capital : {item.capital}
                    {"\n"}
                    {"\n"}
                </Text>
                <Image
                    source={{ uri: ` ${ item.flag }` }}
                    style={{ width: 200, height: 100 }} />
                
            </View>
        );
    }
    render() {
        return (
            <FlatList
                data={this.state.countries}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );

    };
      
}