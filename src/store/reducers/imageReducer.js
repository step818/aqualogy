const initState = {
  error: null
}

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE_SUCCESS':
      console.log('uploaded image', action.blogImage);
      return {
        ...state,
        error: false
      };
    case 'UPLOAD_IMAGE_ERROR':
      console.log('upload image error', action.err);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default imageReducer;