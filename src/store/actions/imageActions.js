import { storageRef } from '../../config/fbConfig';

export const uploadImage = (blogImage) => {
  return (dispatch, getState, { getFirestore }
    ) => {
      const firestore = getFirestore();
      // create an Id to match each image with its rightful blog
      // const blogId = getState().firestore.ordered.blogs.id;
      try{
        const metadata = {
          contentType: "image/jpeg"
        };
        const uploadTask =  storageRef
          .child("images/" + blogImage.name)
          .put(blogImage, metadata);

        uploadTask.on(
          "state_changed",
          (snapshot) => {

          },
          (error) => {

          },
          (complete) => {

          }
        )
        
      } catch (err) {
        console.log(err);
      }
    };
}