import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import TokenPopup from "./TokenPopup";

import Api from '../api/routes'

import formStyles from "../styles/formStyles";

export default class FormSignUp extends Component {
	dataSignUp = {
		name: '',
		surname: '',
		username: '',
		email: '',
		password: ''
	}

	dataLogin = {
		email: '',
		api_key: '',
		otp: ''
	}

	state = {
		modalVisible: false
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// TODO: Add check of password
	}

	setModalVisible = (visible) => {
		this.setState({modalVisible: visible})
	}

	async sendData() {
		let res = await Api.signUp(this.dataSignUp)

		if (res.valid) {
			await AsyncStorage.setItem('apiKey', res.info)

			// TODO: Change destination from login to main page
			// TODO: Add successful operation

			await this.otpRequest()
		} else {
			console.error("signup error")

			// TODO: Make error popup
		}
	}

	otpRequest = async () => {
		if (this.dataSignUp.email.length > 0) {

			this.dataLogin.email = this.dataSignUp.email
			this.dataLogin.api_key = await AsyncStorage.getItem('apiKey')

			let res = await Api.otpRequest(this.dataLogin)

			if (res.valid) {
				this.setModalVisible(true)
			} else {
				// TODO: Add error popup

				console.error("SigUp login error 1: ", res.info)
			}
		} else {
			// TODO: Add error popup

			console.error("Empty data")
		}
	}

	render() {
		const {modalVisible} = this.state

		return (
			<View style={styles.container}>
				{
					modalVisible === true ?
						<TokenPopup data={this.dataLogin} state={this.state} nav={this.props.nav}/>
						:
						null
				}

				<TextInput
					style={styles.textInput}
					placeholder="Name"
					onChangeText={(name) => this.dataSignUp.name = name}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Surname"
					onChangeText={(surname) => this.dataSignUp.surname = surname}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
					onChangeText={(username) => this.dataSignUp.username = username}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					onChangeText={(email) => this.dataSignUp.email = email}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(password) => this.dataSignUp.password = password}
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
