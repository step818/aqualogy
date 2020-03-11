import React from 'react';
import moment from 'moment';
import PostFmReply from './Reply/PostFmReply';
// import ForumReplyList from './Reply/ForumReplyList';
import Like from '../../components/UI/Like';
import { FacebookShareButton, EmailShareButton, RedditShareButton, LinkedinShareButton, FacebookIcon, EmailIcon, RedditIcon, LinkedinIcon, TwitterShareButton, TwitterIcon } from 'react-share';

const ForumDetails = ({forum}) => {
  // const id = props.match.params.id;
  const shareUrl = "http://localhost:3000/forum";
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
        <div>
          <Like /><p>{forum.likes}</p>
          <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true} style={{marginRight: '10px'}}/></FacebookShareButton>
          <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round={true} style={{marginRight: '10px'}}/></TwitterShareButton>
          <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round={true} style={{marginRight: '10px'}}/></LinkedinShareButton>
          <RedditShareButton url={shareUrl}><RedditIcon size={32} round={true} style={{marginRight: '10px'}}/></RedditShareButton>
          <EmailShareButton url={shareUrl}><EmailIcon size={32} round={true}/></EmailShareButton>
          <PostFmReply />
          {/* <ForumReplyList  /> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default ForumDetails;