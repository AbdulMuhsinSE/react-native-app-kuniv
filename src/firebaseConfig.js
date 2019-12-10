import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDh4Wbt28NVvgbDomqlvDoqJzB2yLfEYM0",
  authDomain: "dbsaveme.firebaseapp.com",
  databaseURL: "https://dbsaveme.firebaseio.com",
  projectId: "dbsaveme",
  storageBucket: "dbsaveme.appspot.com",
  messagingSenderId: "637483749186",
  appId: "1:637483749186:web:4f317e8ed811a9b49b02db",
  measurementId: "G-2LZB6TDEQS"
  // apiKey: "AIzaSyCW3jLOrxfjqYZABBfKY_-BIWxHSteGLIc",
  // authDomain: "demochatapp-57716.firebaseapp.com",
  // databaseURL: "https://demochatapp-57716.firebaseio.com/",
  // projectId: "demochatapp-57716",
  // storageBucket: "demochatapp-57716.appspot.com",
  // messagingSenderId:  "744857511221"
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    console.log("firebase apps already running...")
  }
export default firebase;
