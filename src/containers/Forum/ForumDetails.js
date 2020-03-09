import React from 'react';
import moment from 'moment';
// import ForumReplyPost from './ForumReplyPost';
import ForumList from './ForumList';
import { FacebookShareButton, EmailShareButton, RedditShareButton, FacebookIcon } from 'react-share';
import { FacebookShareCount, RedditShareCount } from 'react-share';

const ForumDetails = ({forum}) => {
  // const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ forum.title }</span>
          <p>{ forum.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { forum.authorFirstName } {forum.authorLastName }</div>
        <div>Posted {moment(forum.createdAt.toDate()).calendar()}</div>
        <FacebookShareButton><FacebookIcon/></FacebookShareButton>
        {/* <ForumReplyPost /> */}
        {/* <ForumReplyList  /> */}
      </div>
    </div>
  </div>
  );
}

export default ForumDetails;