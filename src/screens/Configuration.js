import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Logo from '../components/Logo'
import FormInitialConfig from "../components/FormConfiguration";

export default function Configuration(props) {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Logo/>

			<FormInitialConfig {...props} nav={navigation}/>

			<View style={styles.textContainer}>
				<Text style={styles.textText}>Welcome to DJD-Framework</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#c31c4a',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	textContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	textText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 16
	}
});
