/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Router from './src/Router'
import {Provider} from 'mobx-react'
import store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router />
      </Provider>
    );
  }
}