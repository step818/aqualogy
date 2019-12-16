
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
      default:
        return state;
  }
}

export default authReducer;