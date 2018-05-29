import React from 'react'

import Email from './Fields/Applicant/Email'

class Applicant extends React.Component {
  render() {
    const { applicant } = this.props

    return (
      <fieldset>
        <Email applicant={ applicant } />
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
