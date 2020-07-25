import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

import TokenPopup from "./TokenPopup";

import Api from '../api/routes'
import ApiKey from '../apiKeyGenerator'

import formStyles from "../styles/formStyles";
import color from "../constants/colors";

// TODO: Add the possibility to close the modal with the back button

export default class FormLogin extends Component {
	localData = {
		email: '',
		password: ''
	}

	dataToSend = {
		email: '',
		api_key: '',
		otp: ''
	}

	state = {
		modalVisible: false
	}

	setModalVisible = (visible) => {
		this.setState({modalVisible: visible})
	}

	otpRequest = async () => {
		if (this.localData.email.length > 0 && this.localData.password.length > 0) {

			this.dataToSend.email = this.localData.email

			this.dataToSend.api_key = ApiKey.generate(this.localData.email, this.localData.password)

			let res = await Api.otpRequest(this.dataToSend)

			if (res.valid) {
				await AsyncStorage.setItem('apiKey', res.info)

				this.setModalVisible(true)
			} else {
				// TODO: Add error popup

				console.error("Login error 1: ", res.info)
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
						<TokenPopup data={this.dataToSend} state={this.state} nav={this.props.nav}/>
						:
						null
				}

				<TextInput
					style={styles.textInput}
					placeholder="Email"
					onChangeText={(email) => this.localData.email = email}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(password) => this.localData.password = password}
				/>

				<TouchableOpacity style={styles.button} onPress={() => this.otpRequest()}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	...formStyles,

	// TODO: Change modal style
	modalSubContainer: {
		margin: 20,
		backgroundColor: 'rgba(106, 191, 75, 1)',
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
})
