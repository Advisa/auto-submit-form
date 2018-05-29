import React from 'react'

// import Loan from './Loan'
import Applicant from './Applicant'

class AutoSubmitForm extends React.Component {
  render() {
    return (
      <form>
        {/* <Loan /> */}
        {/* <Applicant /> */}
        <Applicant applicant="primary" />
      </form>
    )
  }
}

export default AutoSubmitForm
