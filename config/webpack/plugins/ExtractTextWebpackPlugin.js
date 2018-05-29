// external
import ETWP from 'extract-text-webpack-plugin'

// internal
import { PRODUCTION } from '../environment'

export default new ETWP({
  filename : (PRODUCTION ? '../css/styles.css' : 'styles.css')
})
