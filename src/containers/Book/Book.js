import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppt } from '../../store/actions/apptActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// import classes from './Book.module.css';
// import Calendar from './Calendar/Calendar';
// import DatePicker from 'react-datepicker';
// import Calendar from 'react-calendar';
// import { Redirect } from 'react-router-dom';

// const style = {
//   position: "relative",
//   margin: "50px auto"
// }

class Book extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createAppt(this.state);
    this.props.history.push('/');
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  render() {
    const { auth } = this.props;
    const { appointments } = this.props;
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
          {/* <div>
            <Calendar style={style} width="302px"
              onDayClick={(e, day)=> this.onDayClick(e, day)}  />
          </div> */}
          <p>The below dates and times are unvailable time slots</p>
          <ul>
          {this.props.appointments && this.props.appointments.map(appt => {
            return (
              <li key={appt.id}>
                <span>{appt.date}</span>
                <span>{appt.time}</span>
              </li>
            )
          })}
          </ul>
          <div className="input-field">
            <label htmlFor="date">When</label>
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
            <button className="btn pink lighten-1 z-depth-2">Book</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.firestore.ordered.appointments);
  return {
    auth: state.firebase.auth,
    appointments: state.firestore.ordered.appointments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAppt: (appt) => dispatch(createAppt(appt))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),firestoreConnect([
    {collection: 'appointments'}
  ])
)(Book);