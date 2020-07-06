import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo'
import FormLogin from '../components/FormLogin'

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormLogin/>

				<View style={styles.signUpContainer}>
					<Text style={styles.signUpText}>Don't have an account yet?</Text>
					<Text style={styles.signUpButton}> Sign up</Text>
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

	signUpContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	signUpText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	},

	signUpButton: {
		color: "#6abf4b",
		fontSize: 16,
		fontWeight: '500'
	}
});