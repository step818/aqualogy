export const createAppt = (appt) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('appointments').add({
      ...appt,
      firstName: profile.firstName,
      lastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BLOG', appt });
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err });
    })
    
  }
};