// Write your code here
import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {state} = this.props
    const {isLoged} = state
    return <p>{!isLoged ? 'Please Login' : 'Welcome User'}</p>
  }
}

export default Message
