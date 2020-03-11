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
      createdAt: new Date(),
      replies: {}
    }).then(() => {
      dispatch({ type: 'CREATE_FORUM', forum });
    }).catch((err) => {
      dispatch({ type: 'CREATE_FORUM_ERROR', err });
    })
    
  }
};

export const createForumReply = (forum) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('forums').add({
      ...forum,
      replies: {
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
        replies: {

        }
      }
    })
  }
};

export const addLike = (forum) => {
  return (dispatch, getState, {getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const likes = getState().firebase.
    firestore.collection('forums').add({
      ...forum,
      likes: profile.likes
    }).then(() => {
      dispatch({ type: 'ADD_LIKE', forum});
    }).catch((err) => {
      dispatch({ type: 'ADD_LIKE_ERROR', err});
    })
  }
};