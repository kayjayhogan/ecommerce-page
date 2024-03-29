import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import Header from './Components/Header/Header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';
import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // handle Google user auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // snapShot.data() has actual fields like displayName, email, etc.
          // snapShot itself has metadata like id and whether it exists
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        // equivalent to saying if user logged out, set currentUser to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(null, mapDispatchToProps)(App);
