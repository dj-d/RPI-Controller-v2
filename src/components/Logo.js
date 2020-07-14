import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const screen = Dimensions.get("screen");
// const window = Dimensions.get("window");

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
		width: screen.width / 2,
		height: screen.width / 2
	},

	text: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	}
})
