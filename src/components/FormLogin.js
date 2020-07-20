import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import formStyles from "../styles/formStyles";

export default class FormLogin extends Component {
	data = {
		email: '',
		password: ''
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					onChangeText={(email) => this.setState({email: email})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({password: password})}
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	...formStyles
})
