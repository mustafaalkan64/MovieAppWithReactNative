import React from 'react';
import {
	createBottomTabNavigator
} from "react-navigation-tabs";

import { createAppContainer } from 'react-navigation';

// native base
import { Icon } from 'native-base';

// auth stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AuthStack = createBottomTabNavigator(
	{
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				title: 'Sign In',
				tabBarIcon: ({ tintColor }) => <Icon name="log-in" style={{ color: tintColor }} />
			}
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: {
				title: 'Sign Up',
				tabBarIcon: ({ tintColor }) => <Icon name="person-add" style={{ color: tintColor }} />
			}
		}
	},
	{
		initialRouteName: 'SignIn',
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171f33'
			}
		}
	}
);

export default createAppContainer(AuthStack);
