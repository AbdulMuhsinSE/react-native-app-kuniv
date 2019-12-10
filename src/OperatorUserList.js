import React from 'react';
import {
  SafeAreaView,TouchableOpacity,View,Image,
  ScrollView,Text,TouchableWithoutFeedback,FlatList
} from 'react-native';
import {ListItem,SearchBar} from 'react-native-elements'

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
  ]
let styles = {
    scroll: {
      backgroundColor: 'transparent',
    },
    safeContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    contentContainer: {
        paddingLeft: 15,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
      },
    TextColor: {
        color: 'grey',
        fontSize: 18,
        paddingRight: 15,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        textAlign: 'left', // <-- the magic
        //fontWeight: 'bold',
        fontSize: 23,
        marginTop: 30,
        marginLeft:20,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        //fontFamily: "Montserrat",
    },
    createaccountButton: {
        //marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        //margin: 20, 
        width:100,
        borderRadius: 30,
        borderColor: "grey",
         borderWidth: 1,

      },
      createsocailButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        borderRadius: 30,
        borderColor: "grey",
        //borderTopColor: '#1D7AE5',
         borderWidth: 1,
         justifyContent: 'space-between',

      },
      arrowbuttonContainer: {
        paddingTop: 18,
        margin: 8,
        flexDirection:'row-reverse'
    },
    arrowbuttonListView: {
        height:630,
        backgroundColor:'white'
       
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 20,
     
      },
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:20,
      },
  };


class OperatorUserList extends React.Component {
    state = {
        search: '',
      };
   
     
     constructor(props) {
        super(props);
        
     }
     updateSearch = search => {
        this.setState({ search });
      };
    

     keyExtractor = (item, index) => index.toString()

   renderItem = ({ item }) => (
    <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    
     bottomDivider
     chevron
    />
    )
   
    render() {
      const { search } = this.state;

    return (
          <SafeAreaView style={styles.safeContainer}> 
            <View style={styles.arrowbuttonListView}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={list}
             renderItem={this.renderItem}
             />
           </View>
          </SafeAreaView>
        );
      }
    }
export default OperatorUserList