import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import formStyles from '../styles/formStyles'

class FormConfiguration extends Component{
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

				<TouchableOpacity style={styles.button} onPress={() => this.props.nav.navigate("SplashScreen")}>
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
