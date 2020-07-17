import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import formStyles from "../styles/formStyles";

export default class FormSignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Name"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Surname"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Confirm password"
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	...formStyles
})
