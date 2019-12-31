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

  weekdays = moment.weekdays();  // ["Sunday", "Monday", "Tuesday", ... "Sat"]
  weekdaysShort = moment.weekdaysShort();  // ["Sun", "Mon", "Tue", ... "Sat"]
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

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className={classes.emptySlot}>
          {""}
        </td>
      );
    }
    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay()) ? `${classes.currentDay}` : `${classes.day}`;
      daysInMonth.push(
        <td key={d} className={className} >
          <span>{d}</span>
        </td>
      );
    }
    console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    console.log("rows: ", rows);

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i*100}>
          {d}
        </tr>
      );
    })

    return(
      <div className={classes.calendarContainer} style={this.style}>
        <table className={classes.calendar}>
          <thead>
            <tr className={classes.calendarHeader}>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;