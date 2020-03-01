import React from 'react';
import Auth from './containers/Auth/Auth';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCWbzWIaiSV6KwZHRmlBkDR7sdlN-AgDC4",
  authDomain: "game-4af87.firebaseapp.com",
  databaseURL: "https://game-4af87.firebaseio.com",
  projectId: "game-4af87",
  storageBucket: "game-4af87.appspot.com",
  messagingSenderId: "257918894155",
  appId: "1:257918894155:web:b6426884299fff38364dce",
  measurementId: "G-T3QSHXMGLJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
