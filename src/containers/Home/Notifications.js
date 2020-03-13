import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';
import classes from './Notifications.module.css';

class Notifications extends React.Component {
  render() {
    if (!this.props.auth.uid) {
      return ( <Redirect to={"/"} /> );
    }

    let  notifika = null;
    if (this.props.notifications) {
      notifika = <ul>
      {this.props.notifications && this.props.notifications.map(notif => {
        if(notif.content==='Scheduled a new appointment') {
          return (
            <li className="card red lighten-5" key={notif.id}>
              <span className="pink-text">{notif.user} </span>
              <span>{notif.content}</span>
              <span>Schedule: {notif.schedule}</span>
              <span>Contact info: Email: {notif.email}, Phone Number: {notif.phoneNumber}</span>
              <span>Description: {notif.description}</span>
              <div className="grey-text note-date">
                {moment(notif.time.toDate()).fromNow()}
              </div>
            </li>
          )
        } else  {
          return (
            <li className="card cyan lighten-5" key={notif.id}>
              <span className="pink-text">{notif.user} </span>
              <span>{notif.content}</span>
              <div className="grey-text note-date">
                {moment(notif.time.toDate()).fromNow()}
              </div>
            </li>
          )
        }
        
      
      })}
    </ul>
    // } else {
    //   notifika = <ul>
    //   {this.props.notifications && this.props.notifications.map(notif => {
    //     return (
    //       <li className="card cyan lighten-5" key={notif.id}>
    //         <span className="pink-text">{notif.user} </span>
    //         <span>{notif.content}</span>
    //         <div className="grey-text note-date">
    //           {moment(notif.time.toDate()).fromNow()}
    //         </div>
    //       </li>
    //     )
      
    //   })}
    // </ul>
    }
          
  
    return (
      <div className={classes.Notifications}>
        <div className="card-content">
          <span className={classes.Title}>Notifications</span><br/><br/>
            {notifika}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
  ])
)(Notifications);