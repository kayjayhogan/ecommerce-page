import React from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import CustomButton from '../CustomButton/CustomButton.jsx';
import './Login.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch(err) {
      console.log('Error signing in user: ', err);
    }
  }

  render() {
    return(<div className='login'>
      <h2>I already have an account</h2>
      <span>Log in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput 
          type='email' 
          name='email' 
          value={this.state.email} 
          handleChange={this.handleChange}
          label='Email'
          required
        />
        <FormInput 
          type='password' 
          name='password' 
          value={this.state.password} 
          handleChange={this.handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Log in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleBtn>Continue with Google</CustomButton>
        </div>
      </form>
    </div>);
  }
}

export default Login;

