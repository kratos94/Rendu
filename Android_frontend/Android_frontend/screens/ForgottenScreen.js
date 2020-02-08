import React, {Component} from "react";
import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
export default class ForgottenScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    onForgotten() {
        const { email } = this.state;

        Alert.alert('Credentials', `${email}`);
    }
    render(){
        return(
        <View style={styles.container}>
            <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={'Enter your Email'}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
            title={'Remember my password'}
            style={styles.input}
            onPress={this.onForgotten.bind(this)}
            />
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});