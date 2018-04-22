import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import LoginTitle from './LogoTitle';

export default class AppHome extends Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: <LoginTitle />,
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="模态视图"
                    color="#ffffff"
                />
            ),
            headerRight: (
                <Button onPress={() => {alert('nihao')}} title="你好" color="#ffffff" />
            ),
        };
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                //传值
                      onPress = {() => this.props.navigation.navigate('Details', {
                          itemId:86,
                          otherParam: 'anything you want here',
                      }
                      )
                      }>
                   跳到详情页
                </Text>

            </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});