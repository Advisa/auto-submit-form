const fields = {
  email: {
    value: null,
    valid: false,
    message: null,
  },
}

const initialState = {
  primary: fields,
  secondary: fields,
}


const applicantsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'SYSTEM/VALIDATION/RESPONSE':
      const { validatorType, type, ...rest } = action

      const newState = Object.assign({}, state)
      newState[ action.applicant ][ validatorType ] = rest

      return newState

    default:
      return state
  }
}

export default applicantsReducer
