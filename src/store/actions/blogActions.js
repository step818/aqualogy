import { storage } from '../../config/fbConfig';
import { database } from 'firebase';
import FileUploader from "react-firebase-file-uploader";

export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const snippet = blog.content.substr(0,149);
    const headerImg = blog.file;
    firestore.collection('blogs').add({
      ...blog,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      snippet: snippet,
      headerImg: headerImg
    })
    // .then((headerImg) => {
    //   storage.ref('images')
    //     .child(headerImg)
    //     .getDownloadURL()
    //     .then((url) => {
    //       dispatch ({ type: 'UPLOAD_IMAGE', url });
    //     });
    //   })
    .then(() => {
      dispatch({ type: 'CREATE_BLOG', blog });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err });
    })
    
  }
};