const initState = {
  blogs: "",
  avatarURL: null,
  image: null
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('created blog', action.blog);
      return state;
    case 'UPLOAD_IMAGE':
      console.log('uploaded image', action.url);
      return {
        ...state,
        avatarURL: action.url,
        image: action.url
      }
    case 'CREATE_BLOG_ERROR':
      console.log('create blog error', action.err);
      return state;
    default:
      return state;
  }
}

export default blogReducer;