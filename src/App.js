import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import AuthPage from './Pages/AuthPage/AuthPage.jsx';
import Header from './Components/Header/Header.jsx';
import './App.css';

function App() {
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

export default App;
