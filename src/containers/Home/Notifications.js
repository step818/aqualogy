import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

class Notifications extends React.Component {
  render() {
    if (!this.props.auth.uid) {
      return ( <Redirect to={"/"} /> );
    }
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul>
              {this.props.notifications && this.props.notifications.map(notif => {
                return (
                  <li key={notif.id}>
                    <span className="pink-text">{notif.user} </span>
                    <span>{notif.content}</span>
                    <span>{notif.schedule}</span>
                    <span>Contact info: Email: {notif.email}, Phone Number: {notif.phoneNumber}</span>
                    <span>Description: {notif.description}</span>
                    <div className="grey-text note-date">
                      {moment(notif.time.toDate()).fromNow()}
                    </div>
                  </li>
                )
              
              })}
            </ul>
          </div>
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
    {collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Notifications);