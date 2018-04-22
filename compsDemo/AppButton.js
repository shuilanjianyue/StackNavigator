import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
} from 'react-native';




const onpressTest = () => {
    Alert.alert(
        '温馨提示',
        '我是Alert',
        [
            {text: '确定', onPress: () => console.log('Ask me later pressed')},
            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: '其他', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    );
}


export default class AppButton extends Component {

    static  navigationOptions = {
        title:'按钮',
        headerLeft:'',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} >
                    我是按钮界面
                </Text>


                <Button
                        title = "我是按钮快点击"
                        color = "red"
                        onPress = {onpressTest}

                >

                </Button>

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