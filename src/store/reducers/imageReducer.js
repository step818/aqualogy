import FileUploader from "react-firebase-file-uploader";
const initState = {
  error: null,
  avatarURL: null
}

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
      console.log('uploaded image', action.blogImage);
      return {
        ...state,
        avatarURL: action.url,
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