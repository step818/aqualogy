import React, { Component } from 'react';

class MyCalendar extends Component {
  render() {
    return (
      <div className={classes.calendarContainer} style={this.style}>
      <table className={classes.calendar}>
        <thead>
          <tr className={classes.calendarHeader}>
            <td colSpan="5">
              <this.MonthNav />
              {" "}
              <this.YearNav />
            </td>
            <td colSpan="2" className={classes.navMonth}>
              <i className={classes.prev}
                onClick={(e)=> {this.prevMonth()}}>
              </i>
              <i className={}
                onClick={(e)=> {this.nextMonth()}}>
              </i>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {weekdays} */}
          </tr>
          {/* {trElems} */}
        </tbody>
      </table>
    </div>
    );
  }
}

export default MyCalendar;
// pass props ns astate into hre form state.firestore.data.appointmetns amd renders stuff