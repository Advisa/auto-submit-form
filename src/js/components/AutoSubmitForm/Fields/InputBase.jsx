import React from 'react'
import classnames from 'classnames'

class InputBase extends React.Component {
  getClasses() {
    return {
      input: classnames(),
      label: classnames(),
    };
  }
}

export default InputBase
