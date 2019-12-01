import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LogoutButton from '../../components/LogoutButton'

export default class Home extends Component {

    static navigationOptions = {
		headerLeft: LogoutButton,
    };
    
	render() {
        
 		return (
			<View>
                <Text>Home Page</Text>
            </View>
		);
  }
}

const styles = StyleSheet.create({});