// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {state} = this.props
    const {isLoged} = state
    return (
      <div>
        {!isLoged && <h1> Please Login</h1>}
        {isLoged && <h1> Welcome User </h1>}
      </div>
    )
  }
}

export default Message
