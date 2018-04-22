import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import AppButton from "./AppButton";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class AppHome extends Component{

    static  navigationOptions = ({ navigation, navigationOptions}) => {

        const { params } = navigation.state;

        return {

            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,

        }
    };


    render() {

        const  {params} = this.props.navigation.state;
        const itemId =  params ? params.itemId :null;
        const  otherParams = params ? params.otherParam : null;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress = {() => this.props.navigation.goBack()}>
                    详情页
                </Text>
                <Text style={styles.instructions}>
                    itemId:{JSON.stringify(itemId)}
                    otherParams :{JSON.stringify(otherParams)}
                </Text>

                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                >

                </Button>

                <Text style = {styles.buttonStyles}
                      onPress = {() => this.props.navigation.navigate('ButtonS')}>
                    跳转到按钮界面
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonStyles:{

        marginTop:30,
        color:'blue',
    },
});