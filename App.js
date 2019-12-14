import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from './src/WelcomeScreen';
import UserLogin from './src/UserLogin';
import OperatorLogin from './src/OperatorLogin';
import UserNavigationScreen from './src/UserNavigationScreen';
import OperatorUserList from './src/OperatorUserList';
import Chat from './src/Chat';
import ListUsers from './src/ListUsers';
import EmergencyServicesChat from './src/EmergencyServicesChat';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      //header: null,
      //title:'User Login'
    },
  },
  OperatorLogin: {
    screen: OperatorLogin,
    navigationOptions: {
      // header: null,
      // title:'Operator Login'
    },
  },
  UserNavigationScreen: {
    screen: UserNavigationScreen,
    navigationOptions: {
      // header: null,
    },
  },
  OperatorUserList: {
    screen: OperatorUserList,
    navigationOptions: {
      // header: null,
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      // header: null,
    },
  },
  EmergencyServicesChat: {
    screen: EmergencyServicesChat,
    navigationOptions: {
      //header: null,
    },
  },
  ListUsers: {
    screen: ListUsers,
    navigationOptions: {
      // header: null,
    },
  },
});
const AppContainer = createAppContainer(AppNavigator);
