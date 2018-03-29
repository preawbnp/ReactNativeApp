import React, { Component } from 'react';
import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import styles from '../stylesheet/Style'
import image from '../images/logo.png'
import { FormLabel, FormInput, Button } from 'react-native-elements';

class RegisterScreen extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding">
                <View>
                    <Image style={styles.logo} source={require('../images/logo.png')}/>
                    {console.log(styles.logo)}
                </View>
                
                <View style={styles.textContainer}>
                    <FormLabel>Enter Email</FormLabel>
                    <FormInput placeholder = "Type your email here"
                    inputStyle = {{
                        textAlign: 'center',
                    }}
                    containerStyle = {{ 
                        borderBottomWidth: 0 
                    }} />
                </View>

                <View style={styles.textContainer}>
                    <FormLabel>Enter Password</FormLabel>
                    <FormInput 
                        secureTextEntry = { true }
                        placeholder = "Type your password"
                        inputStyle = {{
                            textAlign: 'center',
                        }} 
                        containerStyle = {{ 
                            borderBottomWidth: 0 
                        }} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title = "Register"
                        backgroundColor = "#6caef9"
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default RegisterScreen;