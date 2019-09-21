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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // if data for user doesn't exist
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create user
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch(err) {
      console.log('Error creating user: ', err);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;