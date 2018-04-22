import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';




export default class AppModel extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} >
                    模态界面
                </Text>

                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />

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