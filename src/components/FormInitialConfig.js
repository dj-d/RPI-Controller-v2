import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import formStyles from '../styles/formStyles'

export default class FormSignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Host"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Port"
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Other path"
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Save</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	...formStyles
})
