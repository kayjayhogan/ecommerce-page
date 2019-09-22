import React from 'react';
import Login from '../../Components/Login/Login.jsx';
import Signup from '../../Components/Signup/Signup.jsx';
import './AuthPage.scss';

const AuthPage = () => (
  <div className='auth-page'>
    <Login />
    <Signup />
  </div>
);

export default AuthPage;