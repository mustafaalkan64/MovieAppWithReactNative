import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SignupForm from './SignupForm';
import API_BASE from '../../constants';
import axios from 'axios'; 

export default class Signup extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Signup</Title>
					</Body>
				</Header>
				<SignupForm />
			</React.Fragment>
		);
	}
}