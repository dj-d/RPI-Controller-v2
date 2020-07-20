import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import formStyles from '../styles/formStyles'

class FormConfiguration extends Component{
	state = {
		host: '',
		port: '80',
		otherPath: '',
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Host"
					onChangeText={(host) => this.setState({host: host})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Port"
					onChangeText={(port) => this.setState({port: port})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Other path"
					onChangeText={(path) => this.setState({otherPath: path})}
				/>

				<TouchableOpacity style={styles.button} onPress={async () => {
					await AsyncStorage.setItem("conSettings", JSON.stringify(this.state))

					this.props.nav.navigate("SplashScreen")
				}}>
					<Text style={styles.buttonText}>Save</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default FormConfiguration

const styles = StyleSheet.create({
	...formStyles
})
