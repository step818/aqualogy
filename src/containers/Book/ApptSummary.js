import React from 'react';

import Button from '../../components/UI/Button/Button';

class ApptSummary extends React.Component {
  
  componentWillUpdate() {
    console.log('ApptSummary Will update');
  }

  // Pass propse as a summary of the name, number, date, time

  render() {

  const appointmentSummary = (<div>{this.props.appointments.name}</div>)
    return(
      <div style={{color: 'white'}}>
        <h3>Your appointment</h3>
        {appointmentSummary}
        <p>Fill this in with props to show what they chose.</p>
        <p>Please confirm to submit your appointment</p>
        <Button btnType="Success" clicked={this.props.apptContinued}>Confirm</Button>
      </div>
    );
  }
};

export default ApptSummary;