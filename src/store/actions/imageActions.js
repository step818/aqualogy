import { storageRef } from '../../config/fbConfig';
import { getFirestore } from 'redux-firestore';

export const uploadImage = (data) => async (
dispatch,
getState,
{ getFirestore }
) => {
  
  const firestore = getFirestore();
  try {
    // Create the file metadata
    const metadata = {
      contentType: "image/jpeg"
    };

    // Upload file and metadata to the object
    const uploadTask = storageRef
      .child("images/" + data.name)
      .put(data, metadata);

      dispatch({ type: 'UPLOADING_START' });

      uploadTask.on(
        "state_changed",
        function(snapshot) {
          // Observe state change evenets such as progress, pause, and resume
          // Get task progress, including number of bytes uploaded and the total number of bytes to be uploaded
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          dispatch({ type: 'UPLOADING', payload: Math.floor(progress) });
        },
        function(error) {
          // Handle unsuccessful uploads
          dispatch({ type: 'UPLOADING_FAIL', payload: error });
        },
        function() {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            dispatch({ type: 'UPLOADING_SUCCESS' });
            firestore.collection("data").doc("user").update({
              image_url: downloadURL
            }).then(() => {
              // get the latest data
              // once the data is sent to the firestore the latest version is stored in the redux store
              get_Data(dispatch, getState, { getFirestore });
            })
            .catch(e => {
              console.log("try promise error: ", e);
            });
          });
        }
      );
  } catch (err) {
    console.log("first catch error: ", err);
  }
};

export const getData = () => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  try {
    const res = await firestore.collection("data").doc("user").get();

    const data = res.data().image_url;

    if (data) {
      dispatch({ type: 'GET_DATA', payload: data });
    } else {
      dispatch({ type: 'GET_DATA', payload: null });
    }
  } catch (e) {
    console.log("2nd catch error: ", e);
  }
};

const get_Data = async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  try {
    const res = await firestore.collection("data").doc("user").get();

    const data = res.data().image_url;

    if (data)  {
      dispatch({ type: 'GET_DATA', payload: data });
    } else {
      dispatch({ type: 'GET_DATA', payload: null });
    }
  } catch (e) {
    console.log("2nd 2nd catch error: ", e);
  }
}