import React from 'react';
import ForumDetails from './ForumDetails';
import ForumReplyDetails from './ForumReplyDetails';
// import { Link } from 'react-router-dom';

const ForumReplyList = ({forums}) => {
  return (
    <div className="project-list section">
      { forums && forums.map(forum => {
        return (
          <div key={forum.id}>
            <ForumReplyDetails forum={forum} />
          </div>
        )
      })}
    </div>
  )
}

export default ForumReplyList;