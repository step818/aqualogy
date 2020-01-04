import { storage } from '../../config/fbConfig';
import { database } from 'firebase';

export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const snippet = blog.content.substr(0,149);
    // const headerImg = blog.files;
    firestore.collection('blogs').add({
      ...blog,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      snippet: snippet,
      // headerImg: headerImg
    })
    // .then(() => {
      // storage.child(`profile/${new Date().getTime()}`).put(headerImg).then((snapshot) => {
      //   console.log("Uploaded a file!")
      // })
    // })
    .then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err });
    })
    
  }
};