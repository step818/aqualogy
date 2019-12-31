import React, { Component } from 'react';
import moment from 'moment';
import classes from  './Calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.width = props.width || '350px';
    this.style = props.style || {};
  }

  state = {
    momentContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  weekdays = moment.weekdays();  // ["Sunday", "Monday", "Tuesday", ... ]
  weekdaysShort = moment.weekdaysShort();  // ["Sun", "Mon", "Tue", ... ]
  months = moment.months();

  
  render() {
    return(
      <div className={classes.calendarContainer}>
        <h2>Calendar</h2>
      </div>
    );
  }
}

export default Calendar;