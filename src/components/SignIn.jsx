import React, { Component } from 'react';
import { signInWithPopup, signInWithRedirect, signInWithPhoneNumber} from '../firebase';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign In" />
        <button onClick={()=>signInWithRedirect()}>Sign In With Google Round&Back</button>
        <button onClick={()=>signInWithPopup()}>Sign In With Google Popup</button>
        <button onClick={()=>signInWithPhoneNumber()}>Sign In With sign In With PhoneNumber</button>
        {/* <button onClick={()=>signInWithGithub()}>Sign In With sign In With Github</button> */}
      </form>
    );
  }
}

export default SignIn;
