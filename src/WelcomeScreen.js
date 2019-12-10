import React from 'react';
import {
  SafeAreaView,TouchableOpacity,
  ScrollView,
  View,Image,Text,Button,Alert
} from 'react-native';
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
   
  handleCreateOperatorPress = () => {
        this.props.navigation.navigate('UserLogin')
    };
    handleCreateUserPress = () => {
      this.props.navigation.navigate('Police')
  };
  handleInstaPress= () => {
  
};

    render() {
        return (
          <SafeAreaView style={styles.safeContainer}>
           
               
            
       
          <View style={styles.createaccountButton}>
            <TouchableOpacity onPress={this.handleCreateUserPress}style={{ height: 50 ,alignItems: 'center', justifyContent: 'center',}}>
              <View style={{borderRadius: 10,backgroundColor:'white'}}>
              <Text style={{
               borderColor: "#707070",color:'#707070',fontSize:22,width:200,height:50, textAlign: 'center',padding:10,
               }} > USER</Text>
               </View>
            </TouchableOpacity>
          </View>
          <View style={styles.createaButton}>
            <TouchableOpacity onPress={this.handleCreateOperatorPress}style={{ height: 50 ,alignItems: 'center', justifyContent: 'center',}}>
            <View style={{borderRadius: 10,backgroundColor:'#707070'}}>
              <Text style={{
               borderColor: "#707070",color:'white',fontSize:22,width:200,height:50, textAlign: 'center',padding:10,
               }} > OPERATOR</Text>
               </View>

             
            </TouchableOpacity>
          </View>
        
           
          </SafeAreaView>
        );
      }
    }
export default WelcomeScreen;