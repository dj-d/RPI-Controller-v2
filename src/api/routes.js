import { AsyncStorage } from 'react-native'

/**
 *
 *
 * @returns {Promise<*>}
 */
async function getHost() {
	return await AsyncStorage.getItem("conSettings")
		.then((data) => {
			let json = JSON.parse(data)

			return 'http://' + json.host + ':' + json.port + json.otherPath
		});
}

/**
 *
 *
 * @returns {Promise<boolean>}
 */
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

/**
 *
 *
 * @param data
 * @returns {Promise<any>}
 */
async function signUp(data) {
	return (await fetch(await getHost() + '/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})).json()
}

/**
 *
 *
 * @param data
 * @returns {Promise<any>}
 */
async function otpRequest(data) {
	return (await fetch(await getHost() + '/otp_request', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})).json()
}

/**
 *
 *
 * @param data
 * @returns {Promise<any>}
 */
async function login(data) {
	return await fetch(await getHost() + '/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).json()
}

/**
 *
 *
 * @param data
 * @returns {Promise<void>}
 */
async function changePassword(data) {
	// TODO
}

/**
 *
 *
 * @param data
 * @returns {Promise<void>}
 */
async function resetPassword(data) {
	// TODO
}

/**
 *
 *
 * @param data
 * @returns {Promise<void>}
 */
async function device(data) {
	// TODO
}


/**
 * Export functions
 */
export default {
	connectionTest
}