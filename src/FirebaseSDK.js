import * as firebase from 'firebase';
import uuid from 'uuid';

const config = {
  apiKey: 'AIzaSyDh4Wbt28NVvgbDomqlvDoqJzB2yLfEYM0',
  authDomain: 'dbsaveme.firebaseapp.com',
  databaseURL: 'https://dbsaveme.firebaseio.com',
  projectId: 'dbsaveme',
  storageBucket: 'dbsaveme.appspot.com',
  messagingSenderId: '637483749186',
  appId: '1:637483749186:web:4f317e8ed811a9b49b02db',
  measurementId: 'G-2LZB6TDEQS',
  // apiKey: "AIzaSyCW3jLOrxfjqYZABBfKY_-BIWxHSteGLIc",
  // authDomain: "demochatapp-57716.firebaseapp.com",
  // databaseURL: "https://demochatapp-57716.firebaseio.com/",
  // projectId: "demochatapp-57716",
  // storageBucket: "demochatapp-57716.appspot.com",
  // messagingSenderId:  "744857511221"
};

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log('firebase apps already running...');
    }
  }

  login = async (user, success_callback, failed_callback) => {
    console.log('logging in');
    const output = await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        this.login(user);
      } catch ({message}) {
        console.log('Failed:' + message);
      }
    } else {
      console.log('Reusing auth...');
    }
  };

  createAccount = async user => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(
        function() {
          console.log(
            'created user successfully. User email:' +
              user.email +
              ' name:' +
              user.name,
          );
          var userf = firebase.auth().currentUser;
          userf.updateProfile({displayName: user.name}).then(
            function() {
              console.log(
                'Updated displayName successfully. name:' + user.name,
              );
              alert(
                'User ' +
                  user.name +
                  ' was created successfully. Please login.',
              );
            },
            function(error) {
              console.warn('Error update displayName.');
            },
          );
        },
        function(error) {
          console.error(
            'got error:' + typeof error + ' string:' + error.message,
          );
          alert('Create account failed. Error: ' + error.message);
        },
      );
  };

  uploadImage = async uri => {
    console.log('got image to upload. uri:' + uri);
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('avatar')
        .child(uuid.v4());
      const task = ref.put(blob);

      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {
            /* noop but you can track the progress here */
          },
          reject /* this is where you would put an error callback! */,
          () => resolve(task.snapshot.downloadURL),
        );
      });
    } catch (err) {
      console.log('uploadImage try/catch error: ' + err.message); //Cannot load an empty url
    }
  };

  updateAvatar = url => {
    //await this.setState({ avatar: url });
    var userf = firebase.auth().currentUser;
    if (userf != null) {
      userf.updateProfile({avatar: url}).then(
        function() {
          console.log('Updated avatar successfully. url:' + url);
          alert('Avatar image is saved successfully.');
        },
        function(error) {
          console.warn('Error update avatar.');
          alert('Error update avatar. Error:' + error.message);
        },
      );
    } else {
      console.log("can't update avatar, user is not login.");
      alert('Unable to update avatar. You must login first.');
    }
  };

  onLogout = user => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign-out successful.');
      })
      .catch(function(error) {
        console.log('An error happened when signing out');
      });
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('Chats/');
  }

  parse = snapshot => {
    const {createdAt: numberStamp, text, user} = snapshot.val();
    const timestamp = new Date(numberStamp);
    const chat = {
      timestamp,
      text,
      user,
    };
    return chat;
  };

  refOn = (subject, user_id, callback) => {
    this.ref
      .child(subject)
      .child(user_id)
      .child('messages')
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  };

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];

      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      firebase
        .database()
        .ref(`Chats/${user.subject}/${user.id}/messages/`)
        .push(message);
    }
  };

  sendEmergency = messages => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];

      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      firebase
        .database()
        .ref(`Chats/${user.subject}/${user._id}/messages/`)
        .push(message);
    }
  };

  createNewChat = (userInfo, onsuccess) => {
    let info = userInfo;

    firebase
      .database()
      .ref('Chats/' + info.subject + '/' + info.userID)
      .set({
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(_ => {
        onsuccess();
      })
      .catch(error => alert(error));
  };

  refOff() {
    this.ref.off();
  }
}

const firebaseSvc = new FirebaseSDK();
export default firebaseSvc;
