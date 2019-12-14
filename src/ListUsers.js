import React, {Component} from 'react';
import {
  SafeAreaView,TouchableOpacity,View,Image,
  ScrollView,Text,TouchableWithoutFeedback,FlatList, SnapshotViewIOS
} from 'react-native';
import { List, ListItem } from "react-native-elements"
// import * as firebase from 'firebase';
import firebase from './firebaseConfig';

class ListUsers extends React.Component {
    constructor() {
        super();
        items=[];
        state = {

            email: '',
        };

        database = firebase.database();

      }
    // componentWillMount(){
    //     var fire = firebase.database().ref('Users/');
    //     fire.once('value').then(Snapshot => {
    //         // this.setState({
    //         //     email:Snapshot.val()
    //         // })
    //         const ghgh = Snapshot.val();
    //         this.email=ghgh.email
    //         console.log("hjh",this.email)
    //     })
    // }
    // var playersRef = firebase.database.ref("Users/")
    // console.log("details : " + playersRef);

    componentWillMount() {

        database.ref('UUIDS').on('value',(snap)=>{


            snap.forEach((data)=>{
                items.push({
                    key:data.key,
                    data:data.val(),
                });
            })

            this.forceUpdate();
        });
    }

    actionOnRow(item) {

        this.props.navigation.navigate('Chat', {
            something: item.key,
            subject: item.data.email,
        });

        console.log('Selected Item :',item);
     }

    render() {
    return (
        <SafeAreaView>
            <View >

            <FlatList
        data={items}
        renderItem={({ item }) => (

            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <ListItem
                    title={item.data.email}
            subtitle={item.key}
          />
</TouchableWithoutFeedback>

        )}
      />

            </View>
        </SafeAreaView>
        );
      }
}
export default ListUsers
