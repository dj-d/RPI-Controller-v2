import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import loginSignUpStyles from "../styles/loginSignUpStyles";

import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'

class SignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormSignUp/>

				<View style={styles.alternativeContainer}>
					<Text style={styles.alternativeText}>Already have an account?</Text>

					<TouchableOpacity onPress={() => this.props.nav.navigate("Login")}>
						<Text style={styles.alternativeButton}> Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default function (props) {
	const navigation = useNavigation()

	return (
		<SignUp {...props} nav={navigation}/>
	)
}

const styles = StyleSheet.create({
	...loginSignUpStyles
});
