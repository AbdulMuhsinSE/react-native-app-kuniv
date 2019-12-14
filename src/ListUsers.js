import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  SnapshotViewIOS,
} from 'react-native';
import {List, ListItem} from 'react-native-elements';
// import * as firebase from 'firebase';
import firebase from './firebaseConfig';
import firebaseSDK from './FirebaseSDK';

class ListUsers extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      database: firebase.database(),
      items: [],
      subject: '',
    };
  }

  componentDidMount() {
    this.state.subject = this.props.navigation.state.params.subject;
    this.state.database.ref('Chats/' + this.state.subject).on('value', snap => {
      this.state.items = [];
      snap.forEach(data => {
        this.state.items.push({
          key: data.key,
          data: data.val().toString(),
        });
      });

      this.forceUpdate();
    });
  }

  actionOnRow(item) {
    this.props.navigation.navigate('EmergencyServicesChat', {
      something: firebaseSDK.uid,
      subject: this.state.subject,
      recipient: item.key,
    });

    console.log('Selected Item :', item);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <FlatList
            data={this.state.items}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>
                <ListItem title={item.key} subtitle={item.data.createdAt} />
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default ListUsers;
