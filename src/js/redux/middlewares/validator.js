import * as Validator from '@src/js/validators/index'

export default ({ dispatch, getState }) => (next) => (action) => {
  console.log(action)
  if ( ! /SYSTEM\/VALIDATE\/INPUT/.test(action.type) ) return next( action )

  if (Validator[action.data.type]) {
    const validationResult   = Validator[action.data.type](action.data.value)
    const { valid, message } = validationResult

    dispatch({
      type: 'SYSTEM/VALIDATION/RESPONSE',
      valid,
      message,
      value: action.data.value,
      validatorType: action.data.type,
      applicant: action.data.applicant,
    })
    return
  }

  next(action)
}
