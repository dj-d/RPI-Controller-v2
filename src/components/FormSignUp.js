import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import formStyles from "../styles/formStyles";

export default class FormSignUp extends Component {
	data = {
		name: '',
		surname: '',
		username: '',
		email: '',
		password: ''
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// TODO: Add check of password
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Name"
					onChangeText={(name) => this.setState({name: name})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Surname"
					onChangeText={(surname) => this.setState({surname: surname})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
					onChangeText={(username) => this.setState({username: username})}
				/>
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
				<TextInput
					style={styles.textInput}
					placeholder="Confirm password"
					secureTextEntry={true}
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
