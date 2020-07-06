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

				<View style={styles.signupContainer}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<Text style={styles.signupButton}> Sign up</Text>
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

	signupContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	signupText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	},

	signupButton: {
		color: "#6abf4b",
		fontSize: 16,
		fontWeight: '500'
	}
});