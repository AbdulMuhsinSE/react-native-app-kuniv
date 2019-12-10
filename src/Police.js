import React from 'react';
import {
  SafeAreaView,TouchableOpacity,
  ScrollView,
  View,Image,Text,Button,Alert,ActivityIndicator
} from 'react-native';

import firebaseSDK from  "./FirebaseSDK";
let styles = {
    scroll: {
      backgroundColor: 'transparent',
    },
  
  
      instaButton: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
       // backgroundColor: '#1D7AE5',
        borderRadius: 30,
        borderColor: "rgba(255,255,255,0.7)",
        margin: 20, 
      },
  createaccountButton: {
      flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#707070'
  },
  createaButton: {
    flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  //backgroundColor:'#707070'
},
container: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column'
},
  textaccountButton: {
    marginTop: 20,
   
    margin:4, 
  },
    safeContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
  };
  
class WelcomeScreen extends React.Component {

 
  state = {
		email: 'police@test.com',
		password: '12345678',
    avatar: '',
    showIndicator:false
	};

  handleCreateOperatorPress = () => {
        this.props.navigation.navigate('OperatorLogin')
    };
    handleCreateUserPress = () => {
      this.props.navigation.navigate('UserLogin')
  };
  handleInstaPress= () => {
  
};
onPressLogin = async () => {
  this.setState({
    showIndicator: true
  });
  const user = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    avatar: this.state.avatar
  };

  const response = firebaseSDK.login(
    user,
    this.loginSuccess,
    this.loginFailed
  );
};

loginSuccess = () => {
  console.log('login successful, navigate to chat.');
 
  this.props.navigation.navigate('Chat', {
    something: '1gp3qmtNvTX2c1RfWbJ3abnZEzy1',
});

  // 1gp3qmtNvTX2c1RfWbJ3abnZEzy1
};

loginFailed = () => {
  alert('Login failure. Please tried again.');
};

onPressLoginHosptal = async () => {
  this.setState({
    showIndicator: true
  });
  const user = {
    email: 'hospital@test.com',
    password: '12345678',
  };

  const response = firebaseSDK.login(
    user,
    this.loginSuccessh,
    this.loginFailed
  );
};

loginSuccessh = () => {
  console.log('login successful, navigate to chat.');
  
  this.props.navigation.navigate('Chat', {
    something: 'BpHJeIdySBWqxQQWSKL7VZSKH9G2',
});
  // BpHJeIdySBWqxQQWSKL7VZSKH9G2
};

onPressLoginFire = async () => {
  this.setState({
    showIndicator: true
  });
  const user = {
    email: 'fire@test.com',
    password: '12345678',
  };

  const response = firebaseSDK.login(
    user,
    this.loginSuccessf,
    this.loginFailed
  );
};

loginSuccessf = () => {
  console.log('login successful, navigate to chat.');
  
  this.props.navigation.navigate('Chat', {
    something: 'ajdJnt2pvHaevqigesjxf9BaDJa2',
});

// ajdJnt2pvHaevqigesjxf9BaDJa2
};

loginFailed = () => {
  alert('Login failure. Please tried again.');
};

    render() {
      if(this.state.showIndicator){
        return (
          <View style={styles.container}>
            {/*Code to show Activity Indicator*/}
            <ActivityIndicator size="large" color="#0000ff" />
            {/*Size can be large/ small*/}
          </View>
        );  
      }else{
        return (
          <SafeAreaView style={styles.safeContainer}>
           
               
            
       
          <View style={styles.createaccountButton}>
            <TouchableOpacity onPress={this.onPressLogin} style={{ height: 50 ,alignItems: 'center', justifyContent: 'center',}}>
              <View style={{borderRadius: 10,backgroundColor:'white'}}>
              <Text style={{
               borderColor: "#707070",color:'#707070',fontSize:22,width:200,height:50, textAlign: 'center',padding:10,
               }} > POLICE</Text>
               </View>
            </TouchableOpacity>
          </View>
          <View style={styles.createaButton}>
            <TouchableOpacity onPress={this.onPressLoginHosptal}style={{ height: 50 ,alignItems: 'center', justifyContent: 'center',}}>
            <View style={{borderRadius: 10,backgroundColor:'#707070'}}>
              <Text style={{
               borderColor: "#707070",color:'white',fontSize:22,width:200,height:50, textAlign: 'center',padding:10,
               }} > HOSPITAL</Text>
               </View>             
            </TouchableOpacity>

          </View>
          <View style={styles.createaccountButton}>
            <TouchableOpacity onPress={this.onPressLoginFire}style={{ height: 50 ,alignItems: 'center', justifyContent: 'center',}}>
              <View style={{borderRadius: 10,backgroundColor:'white'}}>
              <Text style={{
               borderColor: "#707070",color:'#707070',fontSize:22,width:200,height:50, textAlign: 'center',padding:10,
               }} > FIRE STATION</Text>
               </View>
            </TouchableOpacity>
          </View>
           
          </SafeAreaView>
        );
      }
    }
    }
export default WelcomeScreen;