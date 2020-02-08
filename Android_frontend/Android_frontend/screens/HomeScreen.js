import React, { Component } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event){
        console.log(event.target);
        if(event.target.name === "email")
            this.setState({email: event.target.value});
        else if (event.target.name === "password")
            this.setState({password: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const user = {
            email:this.state.email,
            password: this.state.password

        };
        //console.log(user);
        alert("kaka !");
        API.post('login', user)
            .then(res => {
                alert("roto !");
                console.log("success");
                console.log(res);
                console.log(res.data);
                if (res.data.status === "OK") {
                    localStorage.setItem('user', JSON.stringify(res.data.data));
                    this.props.history.push("/home")
                    // guardar res.data.data en el localStorage
                    // Redirect to /
                } else {
                    alert("failed !");
                }
            })
            .catch(function(error){
                // handle error
                console.log("error")
                console.log(error);
            })
    }
  render() {
    return (
        <View style={styles.container}>
          <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
          />
          <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
          />
          <Button
              OnPress={() => this.props.navigation.navigate('Home')}
              title={'Login'}
              style={styles.input}
              onPress={this.handleSubmit.bind(this)}
          />
          {/*<Button*/}
          {/*    title ="Not registered yet"*/}
          {/*    onPress={() => {this.props.navigation.navigate('register')}}*/}
          {/*/>*/}
          <Text
              title ="Cant remember your password"
              onPress={ () => this.props.navigation.navigate('Register')}>
            Not registered yet?
          </Text>
          <Text
              title ="Cant remember your password"
              onPress={ () => this.props.navigation.navigate('Forgotten')}>
            Cant remember your password?
          </Text>
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
