import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// internal
import { validateInput } from '@redux/actions/validate'
import { SYSTEM_VALIDATE_INPUT } from '@redux/actions/constants'
import FormInputError from '@components/Errors/FormInputError'

class Input extends React.Component {
  constructor(props) {
    super( props )

    this.state = {
      blurredOnce : false,
    }
  }

  componentWillUnmount() {
    this.state = {
      blurredOnce : false,
    }
  }

  render() {
    const {
      type,
      label,
      className,
      validateInput,
      applicant,
      applicants,
    } = this.props

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

    const errorMsg = applicants[ applicant ][ type ].message || null

    return (
      <React.Fragment>
        {
          label ? <label className={ classes.label }>{ label }</label> : false
        }
        <input
          type={type}
          onChange={(e) => validateInput({ type, value: e.target.value, applicant })}
          className={classes.input}
          onBlur={() => this.setState({ blurredOnce: true })}
        />
        {
          errorMsg ? <FormInputError errorMsg={ errorMsg } /> : false
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log( 'state', state );
  return {
    applicants: state.applicants,
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateInput: bindActionCreators(validateInput, dispatch)
})

// const validateInput = (input) => ({
//   input: input
// })ß
// dispatch(validateInput)

export default connect(mapStateToProps, mapDispatchToProps)(Input)
