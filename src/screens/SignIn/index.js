import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SigninForm from './SigninForm';
import {observer, inject} from 'mobx-react'

export default class SignIn extends Component {
	constructor	(props){
		super(props)
	}	
	render() {
		const {AuthStore} = this.props;
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Sign In</Title>
					</Body>
				</Header>
				<SigninForm />
			</React.Fragment>
		);
	}
}