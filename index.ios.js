/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/index'
type Props = {}
type State = {}
export default class testRn extends Component<Props, State> {
  render() {
    return (
        <App/>
    );
  }
}


AppRegistry.registerComponent('testRn', () => testRn);
