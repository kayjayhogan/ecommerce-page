import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDaRAXoGuz_Kqd-TdaTMVG2D_Iye-lb-CI",
  authDomain: "ecommerce-db-f6482.firebaseapp.com",
  databaseURL: "https://ecommerce-db-f6482.firebaseio.com",
  projectId: "ecommerce-db-f6482",
  storageBucket: "",
  messagingSenderId: "466523515506",
  appId: "1:466523515506:web:08937bca4157c4f03170eb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;