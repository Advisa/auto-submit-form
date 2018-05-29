import 'scss/importer.scss'

// external
import React        from 'react'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'

// internal
import store from '@redux/store'

import AutoSubmitForm from './components/AutoSubmitForm/AutoSubmitForm'

class App extends React.Component {
  render() {
    return <AutoSubmitForm />
  }
}

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'root' ),
)
