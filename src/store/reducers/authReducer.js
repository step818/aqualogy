
const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('login failed');
      return {
        ...state,
        authError: 'Login failed'
      }
      case 'LOGIN_SUCCESS':
        console.log('log in success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNOUT_SUCCESS':
        console.log('log out success');
        return state;
      case 'SIGNOUT_ERROR':
        console.log('log out error');
        return {
          ...state,
          authError: 'Log out failed'
        }
      case 'SIGNUP_SUCCESS':
        console.log('sign up success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNUP_ERROR':
        console.log('sign up failed');
        return {
          ...state,
          authError: action.err.message
        }
      default:
        return state;
  }
}

export default authReducer;