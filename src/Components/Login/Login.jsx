import React from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import './Login.scss';

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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return(<div className='login'>
      <h2>I already have an account.</h2>
      <span>Log in with your email and password.</span>
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
        <input type='submit' value='Submit Form'/>
      </form>
    </div>);
  }
}

export default Login;

