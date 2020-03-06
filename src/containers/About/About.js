import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import classes from './About.module.css';
import jumboBG from '../../assets/img/jumboBG.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ backgroundImage: `url(${jumboBG}`, backgroundSize: 'cover', fontFamily: 'Courgette', color: 'lavender' }}>
          <h1 className={classes.Header}>About me</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default About;