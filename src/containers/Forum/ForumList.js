import React from 'react';
import ForumDetails from './ForumDetails';
// import { Link } from 'react-router-dom';

const ForumList = ({forums}) => {
  return (
    <div className="project-list section">
      { forums && forums.map(forum => {
        return (
          <div key={forum.id}>
            <ForumDetails forum={forum} />
          </div>
        )
      })}
    </div>
  )
}

export default ForumList;