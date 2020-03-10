export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      firebase.logout();
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNOUT_ERROR', err });
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
    let sign = null; 
    let zD = parseInt(newUser.DOB[5] + newUser.DOB[6] + newUser.DOB[8] + newUser.DOB[9]);
    if (zD >= 321 && zD <= 419) {
      sign = "Aries";
    }
    else if (zD >= 420 && zD <= 520) {
      sign = "Taurus";
    }
    else if (zD >= 521 && zD <= 620) {
      sign = "Gemini";
    }
    else if (zD >= 621 && zD <= 722) {
      sign = "Cancer";
    }
    else if (zD >= 723 && zD <= 822) {
      sign = "Leo";
    }
    else if (zD >= 823 && zD <= 922) {
      sign = "Virgo";
    }
    else if (zD >= 923 && zD <= 1022) {
      sign = "Libra";
    }
    else if (zD >= 1023 && zD <= 1121) {
      sign = "Scorpio";
    }
    else if (zD >= 1122 && zD <= 1221) {
      sign = "Sagittarius";
    }
    else if (zD >= 1222 || zD <= 119) {
      sign = "Capricorn";
    }
    else if (zD >= 120 && zD <= 218) {
      sign = "Aquarius";
    }
    else if (zD >= 219 && zD <= 320) {
      sign = "Pisces";
    } 

      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        displayName: newUser.displayName,
        DOB: newUser.DOB,
        initials: newUser.firstName[0] + newUser.lastName[0],
        sign: sign
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}