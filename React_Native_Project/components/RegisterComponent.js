import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirm: '',
        };
    }


    onRegister() {
        const { username, password, password_confirm } = this.state;

        Alert.alert('Credentials', `${username} + ${password} + ${password_confirm}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Enter your Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Enter your Email'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password_confirm}
                    onChangeText={(password_confirm) => this.setState({ password_confirm })}
                    placeholder={'confirm your password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Register'}
                    style={styles.input}
                    onPress={this.onRegister.bind(this)}
                />
            </View>
        );
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
