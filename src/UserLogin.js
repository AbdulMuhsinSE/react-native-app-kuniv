import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebaseSDK from  "./FirebaseSDK";

export default class UserLogin extends React.Component {
	static navigationOptions = {
		title: 'Operator Login'
	};

	state = {
		name: '',
		email: '',
		password: '',
		avatar: ''
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
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		this.props.navigation.navigate('ListUsers', {
			
		});
	};

	loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

	componentDidMount() {
		// const ref = firebase.database().ref('Users')
		// ref.orderByChild('hours').on('child_added', snapshot => {
		//   this.state.highScoreList.push({
		// 	id: snapshot.key,
		// 	hours: snapshot.val().hours,
		// 	name: snapshot.val().name
		//   });
		// });
	  }

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test@gmail.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Button
					title="Login"
					style={styles.buttonText}
					onPress={this.onPressLogin}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 16,
		marginLeft: 16,
		fontSize: 16
	},
	nameInput: {
		height: 16 * 2,
		margin: 16,
		paddingHorizontal: 16,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: 16
	},
	buttonText: {
		marginLeft: 16,
		fontSize: 42
	}
});