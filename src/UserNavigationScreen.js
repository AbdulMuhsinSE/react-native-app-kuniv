import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import uuid from 'uuid';

import firebaseSDK from './FirebaseSDK';

let styles = {
  scroll: {
    backgroundColor: 'transparent',
  },
  createaccountButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#707070',
  },
  createaButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'#707070'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textaccountButton: {
    marginTop: 20,

    margin: 4,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
};

class UserNavigationScreen extends React.Component {
  state = {
    showIndicator: false,
  };

  navigate = (userID, subject, recipient) => {
    this.props.navigation.push('Chat', {
      something: userID,
      subject: subject,
      recipient: recipient,
    });
  };

  onPressLogin = async () => {
    this.setState({
      showIndicator: true,
    });

    let userInfo = {
      userID: uuid.v4(),
      recipient: '1gp3qmtNvTX2c1RfWbJ3abnZEzy1',
      subject: 'police',
    };

    firebaseSDK.createNewChat(userInfo, () =>
      this.navigate(userInfo.userID, userInfo.subject, userInfo.recipient),
    );
  };
  onPressLoginHosptal = async () => {
    this.setState({
      showIndicator: true,
    });

    let userInfo = {
      userID: uuid.v4(),
      recipient: 'BpHJeIdySBWqxQQWSKL7VZSKH9G2',
      subject: 'hospital',
    };

    firebaseSDK.createNewChat(userInfo, () =>
      this.navigate(userInfo.userID, userInfo.subject, userInfo.recipient),
    );
  };

  onPressLoginFire = async () => {
    this.setState({
      showIndicator: true,
    });

    let userInfo = {
      userID: uuid.v4(),
      recipient: 'ajdJnt2pvHaevqigesjxf9BaDJa2',
      subject: 'fire',
    };

    firebaseSDK.createNewChat(userInfo, () =>
      this.navigate(userInfo.userID, userInfo.subject, userInfo.recipient),
    );
  };
  render() {
    if (this.state.showIndicator) {
      return (
        <View style={styles.container}>
          {/*Code to show Activity Indicator*/}
          <ActivityIndicator size="large" color="#0000ff" />
          {/*Size can be large/ small*/}
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.createaccountButton}>
            <TouchableOpacity
              onPress={this.onPressLogin}
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{borderRadius: 10, backgroundColor: 'white'}}>
                <Text
                  style={{
                    borderColor: '#707070',
                    color: '#707070',
                    fontSize: 22,
                    width: 200,
                    height: 50,
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  {' '}
                  POLICE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.createaButton}>
            <TouchableOpacity
              onPress={this.onPressLoginHosptal}
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{borderRadius: 10, backgroundColor: '#707070'}}>
                <Text
                  style={{
                    borderColor: '#707070',
                    color: 'white',
                    fontSize: 22,
                    width: 200,
                    height: 50,
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  {' '}
                  HOSPITAL
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.createaccountButton}>
            <TouchableOpacity
              onPress={this.onPressLoginFire}
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{borderRadius: 10, backgroundColor: 'white'}}>
                <Text
                  style={{
                    borderColor: '#707070',
                    color: '#707070',
                    fontSize: 22,
                    width: 200,
                    height: 50,
                    textAlign: 'center',
                    padding: 10,
                  }}>
                  {' '}
                  FIRE STATION
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }
  }
}
export default UserNavigationScreen;
