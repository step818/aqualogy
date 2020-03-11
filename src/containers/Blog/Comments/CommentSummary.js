import React from 'react';
import moment from 'moment';

const CommentSummary = ({blog}) => {

  return (
    <div className="z-depth-0">
      <div className="card indigo lighten-5">
        <div className="card-content black-text text-darken-5">
          <br/>
          <p>This is where the summary will be.</p>
          <p>Posted by Jack Crack</p>
          <p>Click to read more...</p>
        </div>
      </div>
    </div>
  );
}

export default CommentSummary;