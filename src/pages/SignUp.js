import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'

export default class SignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormSignUp/>

				<View style={styles.signupContainer}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<Text style={styles.signupButton}> Sign in</Text>
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