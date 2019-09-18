import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
