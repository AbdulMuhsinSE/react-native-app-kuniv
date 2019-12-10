import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from './src/WelcomeScreen';
import UserLogin from './src/UserLogin';
import OperatorLogin from './src/OperatorLogin';
import Police from './src/Police';
import OperatorUserList from './src/OperatorUserList';
import Chat from './src/Chat';
import ListUsers from './src/ListUsers';

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
  Police: {
    screen: Police,
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

  ListUsers: {
    screen: ListUsers,
    navigationOptions: {
      // header: null,
    },
  },
});
const AppContainer = createAppContainer(AppNavigator);
