import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class FormLogin extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	textInput: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 25,
		marginVertical: 5,
		paddingHorizontal: 15,
		underlineColorAndroid: 'rgba(0, 0, 0, 0)',
		fontSize: 16,
		color: 'rgba(255, 255, 255, 0.7)',
		placeholderTextColor: 'rgba(255, 255, 255, 0.7)'
	},

	button: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(106, 191, 75, 0.9)',
		borderRadius: 25,
		marginVertical: 5
	},

	buttonText: {
		fontSize: 16,
		fontWeight:'500',
		color: 'rgba(255, 255, 255, 0.7)',
		textAlign: 'center',
		paddingVertical: 12
	}
})