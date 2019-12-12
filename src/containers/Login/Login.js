import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import firebase from '../../Firebase';
import { AuthContext } from '../../Auth';
import auth2 from '../../auth2';
import { Button } from 'react-bootstrap';

const Login = ({ history }, props) => {

  const handleLogin = useCallback(
    async (event, props) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/forum");
        this.props.isLoggedIn();
        console.log("User logged in!");
      } catch (error) {
        alert(error);
      }
    }, [history]);

  const { currentUser } = useContext(AuthContext);

  if(currentUser) {
    console.log(currentUser);
    console.log("logged in - Login");
    return <Redirect to="/forum" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default withRouter(Login);