// Write your code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {change} = this.props
    return (
      <button type="button" onClick={change}>
        Login
      </button>
    )
  }
}

export default Login
