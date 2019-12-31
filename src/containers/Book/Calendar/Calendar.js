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
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  weekdays = moment.weekdays();  // ["Sunday", "Monday", "Tuesday", ... ]
  weekdaysShort = moment.weekdaysShort();  // ["Sun", "Mon", "Tue", ... ]
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  }
  month = () => {
    return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
    return this.state.dateContext.get("date");
  }
  currentDay = () => {
    return this.state.dateContext.format("D");
  }
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');  // Day of week 0...1...5...6
    return firstDay;
  }

  
  render() {
    // Map the weekdays, i.e. Sun, Mon, Tue, Wed, ... as <td>
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className={classes.weekDay}>{day}</td>
      )
    });
    
    return(
      <div className={classes.calendarContainer}>
        <table className={classes.calendar}>
          <thead>
            <tr className={classes.calendarHeader}>

            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;