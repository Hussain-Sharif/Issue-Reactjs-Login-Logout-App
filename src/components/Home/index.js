import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  state = {isLoged: false}

  change = () => {
    this.setState(pState => {
      const {isLoged} = pState
      if (isLoged) {
        return {isLoged: false}
      }
      return {isLoged: true}
    })
  }

  render() {
    const {isLoged} = this.state
    console.log(isLoged)
    return (
      <div className="d1">
        {!isLoged ? (
          <div className="d2">
            <Message state={isLoged} />
            <Login state={isLoged} change={this.change} />
          </div>
        ) : (
          <div className="d2">
            <Message state={isLoged} />
            <Logout state={isLoged} change={this.change} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
