import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

class Home extends Component {

  render () {
    return(
      <div>
        <p>This is the home page!</p>
        <Link to="/admin">Admin</Link>
        {/* <Button bssStyle="primary">Boobie</Button> */}
      </div>
    );
  }
}

export default Home;