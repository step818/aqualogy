import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Notifications extends React.Component {
  render() {
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
  return {
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Notifications);