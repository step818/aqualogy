import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log in</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log in</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);






















// import React, { useCallback, useContext } from 'react';
// import { withRouter, Redirect } from "react-router-dom";
// import firebase from '../../Firebase';
// import { AuthContext } from '../../Auth';
// import auth2 from '../../auth2';
// import { Button } from 'react-bootstrap';

// const Login = ({ history }, props) => {

//   const handleLogin = useCallback(
//     async (event, props) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await firebase
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         history.push("/forum");
//         console.log("User logged in!");
//       } catch (error) {
//         alert(error);
//       }
//     }, [history]);

//   const { currentUser } = useContext(AuthContext);

//   if(currentUser) {
//     console.log(currentUser);
//     console.log("logged in - Login");
//     return <Redirect to="/forum" />;
//   }

//   return (
//     <div>
//       <h1>Log in</h1>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email
//           <input name="email" type="email" placeholder="Email" />
//         </label>
//         <label>
//           Password
//           <input name="password" type="password" placeholder="Password" />
//         </label>
//         <Button type="submit">Log in</Button>
//       </form>
//     </div>
//   );
// };

// export default withRouter(Login);