import React, { useCallback, Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import firebase from '../../Firebase';

const Signup = ({history}) => {
  const handleSignup = useCallback(async event => {
    event.preventDefault();
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

  return(
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
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
  )
}

export default withRouter(Signup);