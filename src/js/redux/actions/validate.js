import { SYSTEM_VALIDATE_INPUT } from './constants'

export const validateInput = (validatorType, data) => ({
  type: SYSTEM_VALIDATE_INPUT,
  validatorType,
  data,
})
