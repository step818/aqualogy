export const createForum = (forum) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('forums').add({
      ...forum,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_FORUM', forum });
    }).catch((err) => {
      dispatch({ type: 'CREATE_FORUM_ERROR', err });
    })
    
  }
};