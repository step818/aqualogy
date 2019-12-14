export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('blogs').add({
      ...blog,
      timeToRead: 5,
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err });
    })
    
  }
};