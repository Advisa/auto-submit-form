// external
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools }                   from 'redux-devtools-extension'
import logger                                    from 'redux-logger'

// internal
import reducers from '../reducers'

const configureStore = () => createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
    ),
  ),
)

export default configureStore()
