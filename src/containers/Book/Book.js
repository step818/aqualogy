import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppt } from '../../store/actions/apptActions';
// import { Redirect } from 'react-router-dom';

class Book extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createAppt(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
// Protect routes from unauthorized users
    // if (!auth.uid) {
    //   return( <Redirect to={"/"} /> );
    // }
    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Schedule a session</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="phoneNumber">Phone number</label>
            <input id="phoneNumber" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">{auth.email}</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Book</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (appt) => dispatch(createAppt(appt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);