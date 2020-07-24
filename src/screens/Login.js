import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import loginSignUpStyles from "../styles/loginSignUpStyles";

import Logo from '../components/Logo'
import FormLogin from '../components/FormLogin'

function Login(props) {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Logo/>

			<FormLogin {...props} nav={navigation} />

			<View style={styles.alternativeContainer}>
				<Text style={styles.alternativeText}>Don't have an account yet?</Text>

				<TouchableOpacity onPress={() => props.nav.navigate("SignUp")}>
					<Text style={styles.alternativeButton}> Sign up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

}

export default function (props) {
	const navigation = useNavigation()

	return (
		<Login {...props} nav={navigation}/>
	)

}

const styles = StyleSheet.create({
	...loginSignUpStyles
});
