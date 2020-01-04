const initState = {
  images: null
}

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE_SUCCESS':
      console.log('uploaded image', action.blogImage);
      return state;
    case 'UPLOAD_IMAGE_ERROR':
      console.log('upload image error', action.err);
      return state;
    default:
      return state;
  }
}

export default imageReducer;