import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// internal
import { validateInput } from '@redux/actions/validate'
import { SYSTEM_VALIDATE_INPUT } from '@redux/actions/constants'

class Input extends React.Component {
  render() {
    const { type, label, className, validateInput } = this.props

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
          onChange={(e) => validateInput(type, {
            value: e.target.value
          })}
          className={classes}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  // isLoggedIn : state.user.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  validateInput: bindActionCreators(validateInput, dispatch)
})

// const validateInput = (input) => ({
//   input: input
// })ß
// dispatch(validateInput)

export default connect(null, mapDispatchToProps)(Input)