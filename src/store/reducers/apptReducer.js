const initState = {
  appointments: '',
  schedules: {
    id: "",
    month: "",
    dayOfWeek: null,
    date: null,
    year: null,
    time: null,
    isAvailable: true
  }
}

const apptReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_APPT':
      console.log('created appointment', action.appt);
      let created = action.appt;
      return {
        ...state,
        year: created.date,
        time: created.time
      }
    case 'CREATE_APPT_ERROR':
      console.log('create appointment error', action.err);
      return state;
    default:
      return state;
  }
}

export default apptReducer;