const initState = {
  error: null,
  percent: null,
  showProgress: false,
  image: null
}

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOADING_START':
      console.log('uploading image ...');
      return {
        ...state,
        percent: 0,
        showProgress: true
      };
    case 'UPLOADING_SUCCESS':
      console.log('uploaded image');
      return {
        ...state,
        error: false,
        percent: null,
        showProgress: false
      };
    case 'UPLOADING_FAIL':
      console.log('upload image failure');
      return {
        ...state,
        error: action.payload,
        showProgress: false
      };
    case 'UPLOADING':
      return {
        ...state,
        percent: action.payload,
        showProgress: true
      };
    case 'GET_DATA' :
      return {
        ...state,
        image: action.payload
      }
    default:
      return state;
  }
}

export default imageReducer;