import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import color from '../constants/colors'

import Logo from '../components/Logo'
import FormSignUp from '../components/FormSignUp'

class SignUp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo/>

				<FormSignUp/>

				<View style={styles.signInContainer}>
					<Text style={styles.signInText}>Already have an account?</Text>

					<TouchableOpacity onPress={() => this.props.nav.navigate("Login")}>
						<Text style={styles.signInButton}> Sign in</Text>
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
		backgroundColor: color.primary.pink,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	signInContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	signInText: {
		color: color.secondary.text,
		fontSize: 16
	},

	signInButton: {
		color: color.primary.green,
		fontSize: 16,
		fontWeight: '500'
	}
});
