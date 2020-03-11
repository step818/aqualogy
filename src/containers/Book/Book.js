import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppt } from '../../store/actions/apptActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';
// import { Redirect } from 'react-router-dom';
import classes from './Book.module.css';
import ApptSummary from './ApptSummary';
import { Jumbotron } from 'react-bootstrap';
import jumboBG from '../../assets/img/jumboBG.jpg'

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
    // We call a confirmation. If 'confirmed', then continue, else break
    this.props.createAppt(this.state);
    this.props.history.push('/');
  }

  handleFirstClick = (e) => {
    e.preventDefault();
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  render() {
    const { auth } = this.props;
    const { appointments } = this.props;
    if (!auth.uid) {
      return ( 
        <div style={{ height: '1000px'}}>
          <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
            <h1 className={classes.Header}>Book Appt.</h1>
          </Jumbotron>
          <h1 className={classes.sorry}>Sorry, but you must sign in to do that.</h1>
        </div> );
    }
    // let confirmationView = confirmationView ? the alert with buttons for true or false : null;
    let apptSummary = null;
    if(this.props.appointments) {
      apptSummary = <ApptSummary
                      appointments={appointments} />;
    }
    return (
      <div>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1 className={classes.Header}>Book Appt.</h1>
        </Jumbotron>
        {apptSummary}
        <form onSubmit={this.handleSubmit} className={classes.formBounds}>
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
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          {/* <div>
            <Calendar style={style} width="302px"
              onDayClick={(e, day)=> this.onDayClick(e, day)}  />
          </div> */}
          <div className={classes.TimeSlotsTitle}>
            <p>The below dates and times are unvailable time slots</p>
          </div>
          <div className={classes.TimeSlots}>
            <ul>
              {this.props.appointments && this.props.appointments.map(appt => {
                return (
                  <li key={appt.id}>
                    <span>{moment(appt.date).format("MMM-DD-YYYY")}</span>
                    <span>{" "+ appt.time}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="input-field">
            <label className="when" htmlFor="date">When</label>
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
        {/* {confirmationView} */}
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