import React from 'react'
import classnames from 'classnames'

class Input extends React.Component {
  render() {
    const { type, label, className } = this.props


    const classes = {
      input: classnames(
        [
          'c-input',
          className.input,
        ]
      ),
      label: classnames(
        [
          'c-label',
          className.label,
        ]
      ),
    }

    return (
      <React.Fragment>
        {
          label ? <label>{ label }</label> : false
        }
        <input
          type={type}
          className={classes}
        />
      </React.Fragment>
    )
  }
}

export default Input
