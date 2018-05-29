import React from 'react'

import Email from './Fields/Applicant/Email'

class Applicant extends React.Component {
  render() {
    return (
      <fieldset>
        <Email />
        {/* <Personummer />
        <MobilePhone />
        <Dependents />
        <Occupation />
        <LivingSituation /> */}
      </fieldset>
    )
  }
}

export default Applicant
