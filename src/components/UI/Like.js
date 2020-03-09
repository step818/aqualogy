import React, { Component } from 'react';
import classes from './Like.module.css';

const like = (props) => (
    <button 
      onClick={props.clicked}
      className={[classes.Button, classes[props.btnType]].join(' ')}>
        Like
    </button>
);

export default like;