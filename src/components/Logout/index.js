// Write your code here
import './index.css'
import {Component} from 'react'

class Logout extends Component {
  render() {
    const {change} = this.props
    return (
      <button type="button" onClick={change}>
        Logout
      </button>
    )
  }
}

export default Logout
