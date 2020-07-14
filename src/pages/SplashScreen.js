import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import Logo from '../components/Logo'

function SplashScreen() {
	return (
		<View style={styles.container}>
			<Logo/>
			<ActivityIndicator size="large" color="rgba(106, 191, 75, 0.9)"/>
		</View>
	);
}

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1/3
	}
})
