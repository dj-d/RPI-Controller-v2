import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal} from 'react-native';

import Api from '../api/routes'
import ApiKey from '../apiKeyGenerator'

import formStyles from "../styles/formStyles";
import color from "../constants/colors";

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
				this.setModalVisible(true)
			} else {
				// TODO: Add error popup

				console.error("Login error: ", res.info)
			}
		} else {
			// TODO: Add error popup

			console.error("Empty data")
		}
	}

	login = async () => {
		// TODO: Add Splash screen between

		this.setModalVisible(!this.state.modalVisible)

		let res = await Api.login(this.dataToSend)

		if (res.valid) {
			this.props.nav.navigate("SplashScreen")
		} else {
			// TODO: Add error popup

			console.error("Login error: ", res.info)
		}
	}

	render() {
		const {modalVisible} = this.state

		return (
			<View style={styles.container}>
				<Modal
					animation='slide'
					transparent={true}
					visible={modalVisible}
				>
					<View style={styles.modalSubContainer}>
						<Text>
							The token for access has been sent to {this.localData.email}

							Insert the token
						</Text>
						<TextInput
							keyboardType='numeric'
							style={styles.textInput}
							onChangeText={(otp) => this.dataToSend.otp = otp}
						/>

						<TouchableOpacity style={styles.button} onPress={() => this.login()}>
							<Text>Send</Text>
						</TouchableOpacity>
					</View>
				</Modal>

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
