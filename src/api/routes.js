import { AsyncStorage } from 'react-native'

async function getHost() {
	return await AsyncStorage.getItem("conSettings")
		.then((data) => {
			let json = JSON.parse(data)

			return 'http://' + json.host + ':' + json.port + json.otherPath
		});
}

async function connectionTest() {
	return await fetch(await getHost() + '/', {method: 'GET'})
		.then((response) => response.json())
		.then((json) => {
			return json.valid
		})
		.catch((error) => {
			console.error(error)

			return false
		})
}

async function signUp() {

}

async function otpRequest() {

}

async function login() {

}

export default {
	connectionTest
}
