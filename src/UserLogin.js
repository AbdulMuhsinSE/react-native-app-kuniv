import React from 'react';
import firebaseSDK from './FirebaseSDK';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class UserLogin extends React.Component {
  static navigationOptions = {
    title: 'Operator Login',
  };

  state = {
    name: '',
    email: '',
    password: '',
    avatar: '',
  };

  onPressLogin = async () => {
    const user = {
      //name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      //avatar: this.state.avatar
    };

    const response = firebaseSDK.login(
      user,
      this.loginSuccess,
      this.loginFailed,
    );
  };

  loginSuccess = () => {
    this.props.navigation.push('ListUsers', {
      subject: this.state.email.replace('@test.com', ''),
    });
  };

  loginFailed = () => {
    alert(
      'Login failure. Please make sure you have the correct credentials and try again.',
    );
  };

  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/cotton/64/000000/user-male--v4.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={this.onChangeTextEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/pastel-glyph/64/000000/key--v2.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={this.onChangeTextPassword}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onPressLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
