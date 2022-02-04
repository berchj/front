import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class SignInForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subtitle}>please sign in into your account:</Text>
                <TextInput placeholder="example@mail.com" style={styles.TextInput}></TextInput>
                <TextInput secureTextEntry={true} placeholder="enter password" style={styles.TextInput}></TextInput>
                <Button color="#EDDEE6" style={styles.button} title="Sign in"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
    },
    TextInput: {
        width: '90%',
        height: 30,
        backgroundColor: "#FFF7EC",
        borderRadius: 50,
        margin: 5,
        padding: 1,
        textAlign: 'center'

    },
    subtitle: {
        fontSize: 20,
        width: '90%',
        color: '#FFF7EC',
        fontWeight: '200',
        margin: 1
    },
    button:{
        
    }   
})
export default SignInForm