const initState = {
  appointments: ''
}

const apptReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_APPT':
      console.log('created appointment', action.appt);
      return state;
    case 'CREATE_APPT_ERROR':
      console.log('create appointment error', action.err);
      return state;
    default:
      return state;
  }
}

export default apptReducer;