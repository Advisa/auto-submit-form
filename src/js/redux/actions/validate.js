import { SYSTEM_VALIDATE_INPUT } from './constants'

export const validateInput = (data) => ({
  type: SYSTEM_VALIDATE_INPUT,
  data,
})
