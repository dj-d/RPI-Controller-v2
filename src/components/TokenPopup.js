import React, {Component} from 'react'
import {Modal, StyleSheet, View, TextInput, Text, TouchableOpacity} from "react-native";

import Api from "../api/routes";

import formStyles from "../styles/formStyles";

class TokenPopup extends Component {
	dataToSend = this.props.data

	state = this.props.state

	setModalVisible = (visible) => {
		this.setState({modalVisible: visible})
	}

	login = async () => {
		console.log(this.dataToSend)

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
			<View>
				<Modal
					animation='slide'
					transparent={true}
					visible={modalVisible}
				>
					<View style={styles.modalSubContainer}>
						<Text>
							The token for access has been sent to {this.dataToSend.email}
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
			</View>
		)
	}
}

export default TokenPopup

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
