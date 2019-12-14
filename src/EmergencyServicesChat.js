import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from './FirebaseSDK';

export default class EmergencyServicesChat extends React.Component {
  // const {params} = this.props.navigation.state;

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'Emergency Response',
      headerTitleStyle: {color: 'black', fontSize: 20},
      headerStyle: {backgroundColor: 'white'},
      headerLeft: null,
    };
  };

  state = {
    messages: [],
  };

  get user() {
    return {
      id: this.props.navigation.state.params.something,
      _id: this.props.navigation.state.params.recipient,
      subject: this.props.navigation.state.params.subject,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.sendEmergency}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    firebaseSDK.refOn(
      this.props.navigation.state.params.subject,
      this.props.navigation.state.params.recipient,
      chat => {
        let newMessage = chat;
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, newMessage),
        }));
      },
    );
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ): void {
    if (
      this.props.navigation.state.params.something !==
      prevProps.navigation.state.params.something
    ) {
      firebaseSDK.refOn(
        this.props.navigation.state.params.subject,
        this.props.navigation.state.params.recipient,
        chat => {
          let newMessage = chat;
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, newMessage),
          }));
        },
      );
    }
  }

  componentWillUnmount() {
    firebaseSDK.refOff();
  }
}
