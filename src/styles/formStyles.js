import color from "../constants/colors";

export default {
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	textInput: {
		width: 300,
		height: 40,
		backgroundColor: color.secondary.box,
		borderRadius: 25,
		marginVertical: 5,
		paddingHorizontal: 15,
		// underlineColorAndroid: 'rgba(0, 0, 0, 0)',
		fontSize: 16,
		color: color.secondary.text,
		// placeholderTextColor: 'rgba(255, 255, 255, 0.7)'
	},

	button: {
		width: 300,
		height: 40,
		backgroundColor: color.primary.green,
		borderRadius: 25,
		marginVertical: 5
	},

	buttonText: {
		fontSize: 16,
		fontWeight:'500',
		color: color.secondary.text,
		textAlign: 'center',
		paddingVertical: 12
	}
}
