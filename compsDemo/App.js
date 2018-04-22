/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

    StackNavigator,

} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppHome from './AppHome';
import AppDetail from './AppDetail';
import AppButton from './AppButton';
import  AppModel from  './AppModel';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const MainStack = StackNavigator({
    Home: {
        screen: AppHome,
    },
    Details: {
        screen: AppDetail,
    },

    ButtonS:{
      screen: AppButton,
    },

},

{
    initialRouteName: 'Home',

    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    },

}

);



const RootStack = StackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: AppModel,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);



export default class App extends Component {
  render() {
    return (
        <RootStack/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
