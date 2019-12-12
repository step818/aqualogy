import React, { useCallback, Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import firebase from '../../Firebase';

class Signup extends Component {

  handleSignup = (history) => useCallback(async event => {
    event.preventDefault();
    console.log("something!");
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  render() {
    return(
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSignup}>
          <label>
            Email
            <input name="email" type="email" placeholder="Your Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);