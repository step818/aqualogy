import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';
import { signUp } from '../../store/actions/authActions';
import classes from './Signup.module.css';

class Signup extends Component {
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
    this.props.signUp(this.state)
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div style={{height: '1000px'}}>
        <form onSubmit={this.handleSubmit} className={classes.formBounds}>
          <h5 className="grey-text text-darken-3">Sign up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className={classes.displayName}>
            <label htmlFor="displayName">Display Name</label>
            <input type="displayName" id="displayName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} required/>
          </div>
          <div className={classes.dateInput}>
            <label htmlFor="DOB">Birth Date</label>
            <input type="date" id="DOB" onChange={this.handleChange} required/>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="gender" required>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="goal">What is your current main goal?</label>
            <input type="text" id="goal" onChange={this.handleChange} required/>
          </div>
          {/* Email notifications here. Might have to create state for it. */}
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-3">Sign up</button>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.firebase.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);


















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