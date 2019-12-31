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

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  }

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  }

  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  }

  SelectList = (props) => {
    let popup = props.data.map((data) => {
      return (
        <div key={data}>
          <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
            {data}
          </a>
        </div>
      );
    });
    return (
      <div className={classes.monthPopup}>
        {popup}
      </div>
    )
  }

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    });
  }

  MonthNav = () => {
    return (
      <span className={classes.labelMonth}
        onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
        {this.month()}
        {this.state.showMonthPopup &&
        <this.SelectList data={this.months} />
        }
      </span>
    )
  }

  showYearEditor = () => {
    this.setState({
      showYearNav: true
    });
  }

  setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    })
  }

  onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

  onKeyUpYear = (e) => {
    // e.which == 13 is for the Enter key
    if (e.which == 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false
      })
    }
  }

  YearNav = () => {
    return (
      this.state.showYearNav ?
      <input 
        defaultValue = {this.year()}
        className={classes.editorYear}
        ref={(yearInput) => {this.yearInput = yearInput}}
        onKeyUp = {(e) => this.onKeyUpYear(e)}
        onChange = {(e) => this.onYearChange(e)}
        type="number"
        placeholder="year"  /> :
      <span className={classes.labelYear}
        onDoubleClick={(e)=> { this.showYearEditor()}}>
        {this.year()}
      </span>
    )
  }

  onDayClick = (e,day) => {
    this.props.onDayClick && this.props.onDayClick(e, day);
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

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay()) ? `${classes.currentDay}` : `${classes.day}`;
      daysInMonth.push(
        <td key={d} className={className} >
          <span onClick={(e)=> {this.onDayClick(e,d)}} >{d}</span>
        </td>
      );
    }

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
              <td colSpan="5">
                <this.MonthNav />
                {" "}
                <this.YearNav />
              </td>
              <td colSpan="2" className={classes.navMonth}>
                <i className={classes.prev}
                  onClick={(e)=> {this.prevMonth()}}>
                </i>
                <i className={classes.next}
                  onClick={(e)=> {this.nextMonth()}}>
                </i>
              </td>
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