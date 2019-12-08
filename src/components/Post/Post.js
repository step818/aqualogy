import React from 'react';

const post = (props) => {
  

  return(
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
          <div className="Title">{props.title}</div>
          <div>{props.snippet}</div>
          <div>{props.date}</div>
          <div>{props.timeToRead}</div>
      </div>
    </article>
  );
};

export default post;