import React from 'react';
import {TouchableWithoutFeedback, Image, Linking} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from './FirebaseSDK';
import CustomActions from './CustomActions';

export default class Chat extends React.Component {
  // const {params} = this.props.navigation.state;

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      title: 'Chat',
      headerTitleStyle: {color: 'black', fontSize: 20},
      headerStyle: {backgroundColor: 'white'},
      headerLeft: null,
      headerRight: (
        <TouchableWithoutFeedback
          style={{height: 45, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            Linking.openURL('tel:119');
          }}>
          <Image
            style={{height: 36, width: 36, margin: 25}}
            source={require('./assets/call_button.png')}
          />
        </TouchableWithoutFeedback>
      ),
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

  renderActions = props => {
    return <CustomActions {...props} onSend={firebaseSDK.send} />;
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.send}
        user={this.user}
        renderActions={this.renderActions}
      />
    );
  }

  componentDidMount() {
    firebaseSDK.refOn(
      this.props.navigation.state.params.subject,
      this.props.navigation.state.params.something,
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
        this.props.navigation.state.params.something,
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
