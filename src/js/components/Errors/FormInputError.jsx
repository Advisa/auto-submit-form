// external
import React from 'react'
import classnames from 'classnames'

class FormInputError extends React.Component {

  render() {
    const {
      errorMsg,
    } = this.props

    if ( !errorMsg ) return false

    const classes = classnames(
      [
        'c-error',
      ],
      {},
    )

    return (
      <div className={ classes }>
        { errorMsg }
      </div>
    )
  }

}

export default FormInputError
