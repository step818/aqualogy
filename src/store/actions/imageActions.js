import { storage } from '../../config/fbConfig';

export const uploadImage = (blogImage) => {
  return (dispatch, getState, { getFirestore }
    ) => {

      storage.child(`profile/${new Date().getTime()}`).put(blogImage).then((snapshot) => {
      
      })
        .getDownloadURL().then((url) => this.setState({avatarUrl: url}))
        .then(() => {
          dispatch({ type: 'UPLOAD_IMAGE_SUCCESS', blogImage });
      }).catch((err) => {
        dispatch({ type: 'UPLOAD_IMAGE_ERROR', err });
      })
  }
};
      
      // create an Id to match each image with its rightful blog
      // const blogId = getState().firestore.ordered.blogs.id;
    //   try{
    //     const metadata = {
    //       contentType: "image/jpeg"
    //     };
    //     const uploadTask =  storageRef
    //       .child("images/" + blogImage.name)
    //       .put(blogImage, metadata);

    //     uploadTask.on("state_changed",
    //       // (snapshot) => {
    //       //   let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       //   dispatch({ type: 'UPLOADING', payload: Math.floor(progress) });
    //       // },
    //       (error) => {
    //         dispatch({ type: 'UPLOADING_FAIL', payload: error });
    //       },
    //       () => {
    //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //           dispatch({ type: 'UPLOAD SUCCESS' });
    //           firestore.collection("data").doc("user").update({
    //             image_url: downloadURL
    //           }).catch(err => {
    //             console.log(err);
    //           });
    //         });
    //         })
    //       } catch (err) {
    //     console.log(err);
    //   }
    // };