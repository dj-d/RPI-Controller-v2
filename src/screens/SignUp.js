import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'

class SignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormSignUp/>

				<View style={styles.signUpContainer}>
					<Text style={styles.signUpText}>Already have an account?</Text>

					<TouchableOpacity onPress={() => this.props.nav.navigate("Login")}>
						<Text style={styles.signUpButton}> Sign in</Text>
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
	container: {
		backgroundColor: '#c31c4a',
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
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	},

	signUpButton: {
		color: "#6abf4b",
		fontSize: 16,
		fontWeight: '500'
	}
});
