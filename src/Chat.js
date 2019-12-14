import React from 'react';
import {TouchableWithoutFeedback, Image, Linking} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from './FirebaseSDK';
import CustomActions from './CustomActions';

let uuuId = '';
let subject = '';

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
      id: uuuId,
      _id: firebaseSDK.uid,
      subject: subject,
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
    uuuId = this.props.navigation.state.params.something; // outputs "Some Value"
    subject = this.props.navigation.state.params.subject;


    firebaseSDK.refOn(message => {
      let newMessage = message;
      if (
        (newMessage.user.id === uuuId ||
          newMessage.user._id === firebaseSDK.uid || newMessage.user._id === uuuId) &&
        newMessage.user.subject === subject
      ) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, newMessage),
        }));
      }
    });
  }

  componentWillUnmount() {
    firebaseSDK.refOff();
  }
}
