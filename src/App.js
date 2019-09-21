import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import Header from './Components/Header/Header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
