export const createAppt = (appt) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const apptId = getState().firebase.auth.uid;
    // const scheduled = getState().firestore.data.appointments;
    firestore.collection('appointments').add({
      ...appt,
      firstName: profile.firstName,
      lastName: profile.lastName,
      apptId: apptId,
      createdAt: new Date()     
    }).then(() => {
      dispatch({ type: 'CREATE_APPT', appt });
    }).catch((err) => {
      dispatch({ type: 'CREATE_APPT_ERROR', err });
    })
    
  }
};