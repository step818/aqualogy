import React, { Component } from 'react';

class SignupInfo extends Component {

  state = {
    userInfo: {
      userName: "",
      firstName: "",
      lasName: "",
      email: "",
      DOB: "",
      firstGoal: "",
      secondGoal: "",
      formIsValid: ""
    }
  }

  callBackFunction = (childData) => {
    let email = this.state.userInfo.email;
    this.setState({userInfo: childData});
  }

  render() {
    return (
      <div>
        <p>This is the signup Info page</p>
      </div>
    );
  }
}

export default SignupInfo;