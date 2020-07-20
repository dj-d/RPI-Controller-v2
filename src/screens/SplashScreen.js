import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Logo from '../components/Logo'
import Api from "../api/routes";

class SplashScreen extends Component {
	async componentDidMount() {
		// TODO: To improve when the host is not correct
		let connTest = await Api.connectionTest()

		if (connTest === true) {
			this.props.nav.navigate("Login")
		} else {
			this.props.nav.navigation("Configuration")
		}
	}

	render() {
		return (
			<View style={styles.primary}>
				<View style={styles.container}>
					<Logo/>

					<ActivityIndicator size="large" color="rgba(106, 191, 75, 0.9)"/>

				</View>
			</View>
		);
	}
}

export default function (props) {
	const navigation = useNavigation()

	return (
		<SplashScreen {...props} nav={navigation}/>
	)
}

const styles = StyleSheet.create({
	primary: {
		backgroundColor: '#c31c4a',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1 / 3
	}
})
