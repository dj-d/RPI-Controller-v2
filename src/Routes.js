import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login'
import SignUp from './pages/SignUp'

export default class Routes extends Component {
	render() {
		return(
			<Router>
				<Stack key="root">
					<Scene key="login" component={Login} title={"Login"}/>
					<Scene key="signup" component={SignUp} title={"SignUp"}/>
				</Stack>
			</Router>
		)
	}
}