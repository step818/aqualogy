import React from 'react';
import moment from 'moment';

// {blog.headerImg}
const BlogSummary = ({blog}) => {
  const styles = {
    height: '7em',
    width: '100%',
  };

  return (
    <div className="z-depth-0">
      <div className="card indigo lighten-5">
        <div className="card-content black-text text-darken-5">
          {/* <div><img src={blog.headerImg || 'http://via.placeholder.com/85X1050'} alt="header" style={styles} /></div> */}
          <br/>
          <span className="card-title" style={{ fontFamily: 'Courgette', fontWeight: '750', fontSize: '25px' }}>{blog.title}</span>
          <p>By {blog.authorFirstName} {blog.authorLastName} - - - - - {moment(blog.createdAt.toDate()).calendar()}</p>
          <br/>
          <p className="black-text">{blog.snippet}...</p>
          <p>Click to read more...</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSummary;