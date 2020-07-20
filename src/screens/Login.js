import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import color from '../constants/colors'

import Logo from '../components/Logo'
import FormLogin from '../components/FormLogin'

class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormLogin/>

				<View style={styles.signUpContainer}>
					<Text style={styles.signUpText}>Don't have an account yet?</Text>

					<TouchableOpacity onPress={() => this.props.nav.navigate("SignUp")}>
						<Text style={styles.signUpButton}> Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default function (props) {
	const navigation = useNavigation()

	return (
		<Login {...props} nav={navigation} />
	)

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.primary.pink,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	signUpContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	signUpText: {
		color: color.secondary.text,
		fontSize: 16
	},

	signUpButton: {
		color: color.primary.green,
		fontSize: 16,
		fontWeight: '500'
	}
});
