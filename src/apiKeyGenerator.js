function generate(email, password) {
	let sha256 = require('js-sha256').sha256;

	let hashString = email + password + email.split('@')[0]

	return sha256(hashString)
}

export default {
	generate
}
