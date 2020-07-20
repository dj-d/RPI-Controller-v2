import * as React from 'react';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./src/screens/SplashScreen";
import Configuration from "./src/screens/Configuration";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					height: 0
				}
			}}>
				<Stack.Screen name="Configuration" component={Configuration} options={{title: ''}}/>
				<Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: '' }}/>
				<Stack.Screen name="Login" component={Login} options={{title: ''}} />
				<Stack.Screen name="SignUp" component={SignUp} options={{title: ''}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App
