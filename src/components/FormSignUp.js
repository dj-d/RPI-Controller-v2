import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import Api from '../api/routes'

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

	async sendData() {
		let res = await Api.signUp(this.data)

		if (res.valid) {
			await AsyncStorage.setItem('apiKey', res.info)

			// TODO: Change destination from login to main page
			// TODO: Add successful operation

			this.props.nav.navigate('Login')
		} else {
			console.error("signup error")

			// TODO: Make error popup
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Name"
					onChangeText={(name) => this.data.name = name}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Surname"
					onChangeText={(surname) => this.data.surname = surname}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
					onChangeText={(username) => this.data.username = username}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					onChangeText={(email) => this.data.email = email}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(password) => this.data.password = password}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Confirm password"
					secureTextEntry={true}
				/>

				<TouchableOpacity style={styles.button} onPress={() => this.sendData()}>
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	...formStyles
})
