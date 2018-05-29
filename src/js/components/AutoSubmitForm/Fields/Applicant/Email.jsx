import React from 'react'
import classnames from 'classnames'

import Input from '@components/Form/Input'
import InputBase from '@components/AutoSubmitForm/Fields/InputBase'

class Email extends InputBase {
  render() {

    // returns an Object
    const classes = this.getClasses()

    return (
      <Input
        type="email"
        label="E-postadress"
        className={classes}
      />
    )
  }
}

export default Email
