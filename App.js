import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'
import InitialConfig from "./src/pages/InitialConfig";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar style="auto"/>

				<InitialConfig/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#c31c4a',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});