import colors from "../constants/colors";

export default {
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	textInput: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: 25,
		marginVertical: 5,
		paddingHorizontal: 15,
		// underlineColorAndroid: 'rgba(0, 0, 0, 0)',
		fontSize: 16,
		color: 'rgba(255, 255, 255, 0.7)',
		// placeholderTextColor: 'rgba(255, 255, 255, 0.7)'
	},

	button: {
		width: 300,
		height: 40,
		backgroundColor: colors.primary.green,
		borderRadius: 25,
		marginVertical: 5
	},

	buttonText: {
		fontSize: 16,
		fontWeight:'500',
		color: 'rgba(255, 255, 255, 0.7)',
		textAlign: 'center',
		paddingVertical: 12
	}
}
