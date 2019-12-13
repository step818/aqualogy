import React, { Component } from 'react'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    DOB: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="DOB">Birth Date</label>
            <input type="date" id="DOB" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;


















// import React, { useCallback, Component } from 'react';
// import { Button } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';
// import firebase from '../../Firebase';

// const Signup = ({history}) => {
//   const handleSignup = useCallback(async event => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;
//     try {
//       await firebase
//         .auth()
//         .createUserWithEmailAndPassword(email.value, password.value);
//       history.push("/");
//     } catch (error) {
//       alert(error);
//     }
//   }, [history]);

//   return(
//     <div>
//       <h1>Sign up</h1>
//       <form onSubmit={handleSignup}>
//         <label>
//           Email
//           <input name="email" type="email" placeholder="Your Email" />
//         </label>
//         <label>
//           Password
//           <input name="password" type="password" placeholder="Password" />
//         </label>
//         <Button type="submit">Sign Up</Button>
//       </form>
//     </div>
//   )
// }

// export default withRouter(Signup);