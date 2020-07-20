import color from "../constants/colors";

export default {
	container: {
		backgroundColor: color.primary.pink,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	alternativeContainer: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},

	alternativeText: {
		color: color.secondary.text,
		fontSize: 16
	},

	alternativeButton: {
		color: color.primary.green,
		fontSize: 16,
		fontWeight: '500'
	}
}
