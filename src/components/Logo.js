import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Image from "react-native-web/dist/exports/Image";

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/raspberry-pi.png')}
				/>

				<Text style={styles.text}>RPI - Controller</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},

	image: {
		width: 100,
		height: 100
	},

	text: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	}
})