export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const snippet = blog.content.substr(0,149);
    const image = blog.image;
    firestore.collection('blogs').add({
      ...blog,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      snippet: snippet,
      image: image,
      comments: {}
    }).then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err });
    })
    
  }
};

export const createComment = (blog) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('blogs').add({
      ...blog,
      comment: {
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
        content: { }
      }
    }).then(() => {
      dispatch({ type: 'CREATE_COMMENT', blog });
    }).catch((err) => {
      dispatch({ type: 'CREATE_COMMENT_ERROR', err });
    })

  }
};
