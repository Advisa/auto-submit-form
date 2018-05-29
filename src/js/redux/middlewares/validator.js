import * as Validator from '@src/js/validators/index'

export default ({ dispatch, getState }) => (next) => (action) => {
  console.log(action)
  if (Validator[action.validatorType]) {
    const validationResult = Validator[action.validatorType](action.data.value)
    console.log(validationResult)
    return
  }
  next(action)
}
