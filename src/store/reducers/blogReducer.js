const initState = {
  blogs: [
    {id: '1', title: 'ice cube', content: 'today was a good day'},
    {id: '2', title: 'leos are the coolest', content: 'i like you'},
    {id: '3', title: 'venus in retrograde', content: 'you guys suck'}
  ]
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('created blog', action.blog);
      return state;
    case 'CREATE_BLOG_ERROR':
      console.log('create blog error', action.err);
      return state;
    default:
      return state;
  }
}

export default blogReducer;