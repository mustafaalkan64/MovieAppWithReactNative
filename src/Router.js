import React from 'react';
import {
	createBottomTabNavigator
} from "react-navigation-tabs";

import { createAppContainer, 
		 createSwitchNavigator  
} from 'react-navigation';

import { createStackNavigator
} from 'react-navigation-stack';

// native base
//import { Icon } from 'native-base';
import { Icon } from 'react-native-elements'

// auth loading
import AuthLoading from './screens/AuthLoading';
// app stack
import Home from './screens/Home';
import Detail from './screens/Detail';

// auth stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';


const AppStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Home',
		}
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			title: 'Detail',
		}
	}
});

const AuthStack = createBottomTabNavigator(
	{
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				title: 'Sign In',
				tabBarIcon: () => <Icon name='filter' color='#fff' />
			}
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: {
				title: 'Sign Up',
				tabBarIcon: () => <Icon name='person-add' color='#fff' />
			}
		}
	},
	{
		initialRouteName: 'SignUp',
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171f33'
			}
		}
	}
);

const SwitchNavigator = createSwitchNavigator(
	{
		AuthLoading: {
			screen: AuthLoading
		},
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
	}
);

export default createAppContainer(SwitchNavigator);
