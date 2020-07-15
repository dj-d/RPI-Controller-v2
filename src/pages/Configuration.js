import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo'
import FormInitialConfig from "../components/FormInitialConfig";

export default class Configuration extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormInitialConfig />

				<View style={styles.textContainer}>
					<Text style={styles.textText}>Welcome to DJD-Framework</Text>
				</View>
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

	textContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	textText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	}
});
