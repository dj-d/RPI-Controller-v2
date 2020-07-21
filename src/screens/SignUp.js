import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import loginSignUpStyles from "../styles/loginSignUpStyles";

import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'

function SignUp(props) {
	const navigation = useNavigation()

		return (
			<View style={styles.container}>
				<Logo/>

				<FormSignUp {...props} nav={navigation} />

				<View style={styles.alternativeContainer}>
					<Text style={styles.alternativeText}>Already have an account?</Text>

					<TouchableOpacity onPress={() => props.nav.navigate("Login")}>
						<Text style={styles.alternativeButton}> Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		);

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
