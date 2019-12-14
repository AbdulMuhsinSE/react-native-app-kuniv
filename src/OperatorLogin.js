import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,Image,Text,Button,Alert
} from 'react-native';
import {TextField} from 'react-native-material-textfield';

let styles = {
    scroll: {
      backgroundColor: 'transparent',

    },

    container: {
    margin: 20,
    marginTop: Platform.select({ ios: 8, android: 32 }),
    flex: 1,
    },

    contentContainer: {
      padding: 8,
    },
    arrowbuttonContainer: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
margin:30,
      backgroundColor:'#707070',
      borderRadius: 10,
      },
    buttonContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    },
    textContainer: {
        textAlign: 'center', // <-- the magic
        fontSize: 28,
        marginTop: 30,
        marginLeft:20,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    textContainerone: {
      textAlign: 'center', // <-- the magic
      fontSize: 18,
      marginTop: 30,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    textButton: {
      textAlign: 'center', // <-- the magic
      fontSize: 18,
      justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:20,
      },
      instaButton: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D7AE5',
        borderRadius: 30,
        borderColor: "rgba(255,255,255,0.7)",
        margin: 20,
      },
  createaccountButton: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 30,
    borderColor: 'grey',
    //borderTopColor: '#1D7AE5',
     borderWidth: 1,
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

  let defaults = {
    username: '',
    password: '',
  };
class OperatorLogin extends React.Component {
    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitUserName = this.onSubmitUserName.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);


        this.usernameRef = this.updateRef.bind(this, 'username');
        this.passwordRef = this.updateRef.bind(this, 'password');

        this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

        this.state = {
          secureTextEntry: true,
          ...defaults,
        };
      }


      onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
          let ref = this[name];

          if (ref && ref.isFocused()) {
            delete errors[name];
          }
        }

        this.setState({ errors });
      }

      onChangeText(text) {
        ['username', 'password']
          .map((name) => ({ name, ref: this[name] }))
          .forEach(({ name, ref }) => {
            if (ref.isFocused()) {
              this.setState({ [name]: text });
            }
          });
      }
      onSubmitUserName() {
        this.username.focus();
      }

      onSubmitPassword() {
        this.password.focus();
      }
      onSubmit() {
        let errors = {};

        ['username', 'password']
          .forEach((name) => {
            let value = this[name].value();

            if (!value) {
              errors[name] = 'Should not be empty';
            } else {
              if ('password' === name && value.length < 6) {
                errors[name] = 'Too short';
              }
              else{
                this.props.navigation.navigate('ListUsers');
              }
            }
          });

        this.setState({ errors });
      }
      updateRef(name, ref) {
        this[name] = ref;
      }

      renderPasswordAccessory() {
        let { secureTextEntry } = this.state;

        let name = secureTextEntry?
          'visibility':
          'visibility-off';
      }



    render() {
        let { errors = {}, secureTextEntry, ...data } = this.state;

            let { username, password } = data;
            let defaultEmail = `${username || ''}${password || ''}`
              .replace(/\s+/g, '_')
              .toLowerCase();

        return (
          <SafeAreaView style={styles.safeContainer}>
            <ScrollView
              style={styles.scroll}es
              contentContainerStyle={styles.contentContainer.jhf}
              keyboardShouldPersistTaps='handled'
            >
              <View style={styles.buttonContainer}>
             {/* <Image source={require('../assests/logo.png')} /> */}
             </View>
            <Text  numberOfLines={1} style={styles.textContainer}>Operator Login </Text>
            <View style={styles.container}>

            <Text  numberOfLines={1} style={styles.textContainerone}>Username </Text>
            <TextField
                      ref={this.usernameRef}
                      defaultValue={defaultEmail}
                      keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onFocus={this.onFocus}
                      onChangeText={this.onChangeText}
                      onSubmitEditing={this.onSubmitUserName}
                      returnKeyType='next'
                      label='Username'
                      error={errors.username}
                    />
                  <Text  numberOfLines={1} style={styles.textContainerone}>Password </Text>

                    <TextField
                      ref={this.passwordRef}
                      secureTextEntry={secureTextEntry}
                      autoCapitalize='none'
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      clearTextOnFocus={true}
                      onFocus={this.onFocus}
                      onChangeText={this.onChangeText}
                      onSubmitEditing={this.onSubmitPassword}
                      returnKeyType='done'
                      label='Password'
                      error={errors.password}
                      //title='Choose wisely'
                      maxLength={30}
                    //   characterRestriction={20}
                    //   renderRightAccessory={this.renderPasswordAccessory}
                    />


             </View>


          <View style={styles.arrowbuttonContainer}>
          <TouchableOpacity onPress={this.onSubmit}>
              <Text style={{
               borderColor: "#707070",color:'white',fontSize:22,height:50, textAlign: 'center',padding:10,
               }} > SUBMIT</Text>
              </TouchableOpacity>


                  </View>

            </ScrollView>
          </SafeAreaView>
        );
      }
    }

export default OperatorLogin;
