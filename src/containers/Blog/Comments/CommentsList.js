import React, { Component } from 'react';

import CommentSummary from './CommentSummary';

//  What argument should I be passing in here? 'comments'?
const CommentList = ({comments}) => {
  return (
    <div className="project-list section">
      <CommentSummary />
    </div>
  )
}

export default CommentList;